
const Header = () => {

    return (
        <div style={{ float: "left", width: "80%", marginLeft: "10px" }}>
            <p style={{ float: "left", marginTop: "10px", color: "#8E9096" }}>Municipio {'>'} Organismo</p>
            <div style={{ float: "right", marginTop: "10px", color: "#272795" }}>
                <i class="bi bi-search"></i>
                <i class="bi bi-bell ml-5" style={{ marginLeft: "10px" }}></i>
                <i class="bi bi-question-circle" style={{ marginLeft: "10px" }}></i>
            </div>
        </div>
    )
}

export default Header