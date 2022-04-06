const styles = {
    details: {
        backgroundColor: "white",
        position: "absolute",
        marginTop: 30,
        boxShadow: "1px 5px 5px rgb(0, 0, 0, 0.3)",
        borderRadius: "5px",
        width: "300px",
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    product: {
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 20px",
        borderBottom: "1px solid #aaa"
    }
}

function CartDetails({cart}) {
    return (
        <div style={styles.details}>
            <ul style={styles.ul}>
                {cart.map(ele => 
                    <li key={ele.name} style={styles.product}>
                        <img src={ele.img} alt={ele.name} width="50" height="32" />
                        {ele.name}
                        <span>{ele.quantity}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CartDetails