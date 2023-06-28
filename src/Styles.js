const styles = {
    card: {
        width: '500px',
        height: '300px',
        backgroundColor: '#212121',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        justifyContent: 'space-between',
        fontFamily: 'Dosis, sans-serif',
        fontWeight: '900',
    },
    images: {
        display: 'flex',
        flexDirection: 'row',
    },
    texts: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        fontSize: '30px',
        justifyContent: 'space-between',
        backgroundImage: `url(valorantcardbg.jpg)`,
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '0.8',
        color: "black",
    }
}

export default styles;