import Product from "./Product"

const styles = {
    products: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }
}

function ProductList({products}) {
    return (
        <div style={styles.products}>
            {products.map(product => <Product product={product} key={product.name} />)}
        </div>
    )
}

export default ProductList