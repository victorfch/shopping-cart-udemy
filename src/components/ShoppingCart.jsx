import { useEffect, useState } from "react"
import BubbleAlert from "./BubbleAlert"
import CartDetails from "./CartDetails"

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

function ShoppingCart({shoppingCart}) {
    const [value, setValue] = useState(0)
    const [show, setShow] = useState(false);

    useEffect(() => {
        const total = shoppingCart.reduce((ac, el) =>ac + el.quantity, 0)
        setValue(total)
    }, [shoppingCart])

    const handleShow = () => {
        if (!shoppingCart.length) {
            return
        }

        setShow(!show)
    }

    return (
        <div>
            { value > 0 
                ? <BubbleAlert value={value} />
                : null }
            <button style={styles.cart} onClick={handleShow}>
                Cart
            </button>
            {
                show
                ? <CartDetails cart={shoppingCart} />
                : null
            }
        </div>
    )

}

export default ShoppingCart