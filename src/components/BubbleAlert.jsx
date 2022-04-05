const styles = {
    bubble: {
        backgroundColor: "#E9725A",
        borderRadius: "15px",
        color: "white",
        padding: "2px 10px",
        fontSize: ".9rem",
        width: "20px",
        position: "relative",
        top: 20,
        left: 12
    }

}

function BubbleAlert() {
    return (
        <span style={styles.bubble}>
            3
        </span>
    )
}

export default BubbleAlert