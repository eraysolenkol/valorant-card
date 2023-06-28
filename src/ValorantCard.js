import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Styles';

function ValorantCard(props) {
    const [user, setUser] = useState({});
    const [mmr, setMMR] = useState({});
    const API_ENDPOINT_DETAILS = 'https://api.henrikdev.xyz/valorant/v1/account/';
    const API_ENDPOINT_MMR = 'https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/';
    const [errorMessage, setErrorMessage] = useState('');

    async function fetchUserDetails() {
        const details = await axios.get(`${API_ENDPOINT_DETAILS}${props.nickname}/${props.tag}`);
        return details.data.data;
    }

    async function fetchUserMMR(puuid, region) {
        const mmr = await axios.get(`${API_ENDPOINT_MMR}${region}/${puuid}`);
        return mmr.data.data;
    }

    useEffect(() => {
        (async () => {
            try {
                const userDetails = await fetchUserDetails();
                setUser(userDetails);
            } catch (error) {
                setErrorMessage("ERROR " + error.response.data.status);
            }
        })();
    }, []);

    useEffect(() => {
        if (!user.puuid) return;
        (async () => {
            try {
                const userMMR = await fetchUserMMR(user?.puuid, user?.region);
                setMMR(userMMR);
                console.log(userMMR);
            } catch (error) {
                setErrorMessage("ERROR " + error.response.data.status);
            }
        })();
    }, [user]);

    const divs = (
        <div style={props.styles || styles.card}>
            <div style={styles.texts}>
                <p>{user?.name}#{user?.tag}</p>
                <p>{mmr?.currenttierpatched}</p>
                <img src={mmr?.images?.large} alt="RankImage" style={{ width: '100px', height: '100px' }} />
            </div>
            <div style={styles.images}>
                <img src={user?.card?.large} alt="CardImage" style={{
                    width: '150px', height: '100%', borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                }} />
            </div>
        </div>
    );

    return (
        <>
            {user?.card ? divs : <p>loading...</p>}
            {errorMessage}
        </>
    )
}

export default ValorantCard;