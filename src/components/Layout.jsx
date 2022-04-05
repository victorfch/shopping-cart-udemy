const styles = {
    layout: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    }

}

function Layout({children}) {
    return (
        <div style={styles.layout}>
            {children}
        </div>
    )
}

export default Layout