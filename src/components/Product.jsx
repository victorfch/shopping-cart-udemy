const styles = {
    product: {
        border: "solid 1px #eee",
        boxShadow: "0 5px 5px rgb(0, 0, 0, 0.1)",
        width: "30%",
        padding: "10px 15px",
        borderRadius: "5px"
    },
    img: {
        width: "100%"
    }
}

function Product({product}) {
    return (
        <div style={styles.product}>
            <img style={styles.img} src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <div>{product.price}</div>
        </div>
    )

}
export default Product