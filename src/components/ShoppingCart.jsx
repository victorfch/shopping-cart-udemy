import BubbleAlert from "./BubbleAlert"

const styles = {
    cart: {
        backgroundColor: "#359A2C",
        color: "white",
        border: "none",
        padding: "15px",
        borderRadius: "15px",
        cursor: "pointer"
    }
}

function ShoppingCart() {
    return (
        <div>
            <BubbleAlert />
            <button style={styles.cart}>
                Cart
            </button>
        </div>
    )

}

export default ShoppingCart