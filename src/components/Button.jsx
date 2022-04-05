const styles = {
    button: {
        backgroundColor: "#0A283E",
        padding: "10px 15px",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }
}

function Button(props) {
    return <button style={styles.button} {...props} />
}

export default Button