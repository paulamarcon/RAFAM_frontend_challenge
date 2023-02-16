import Navbar from "./Navbar";

const Sidebar = () => {

    return (
        <div style={{ float: "left", background: "#272795" }}>
            <div style={{ margin: "10px", background: "#272795" }}>
                <p style={{ background: "#272795", color: "white" }}>Desarrollado por RAFAM 2021</p>
                <p style={{ background: "#272795", color: "white" }}>v4.12.3</p>
            </div>
            <hr style={{ color: "white" }}></hr>
            <div style={{ background: "#272795" }}>
                <img src={require("../images/logo.png")} style={{ float: "left", background: "#272795" }} width={50} height={50} alt='logo' />
                <span className='titleSidebarStyle' style={{ background: "#272795" }}>RAFAM2</span>
            </div>
            <Navbar />
            <hr style={{ color: "white" }}></hr>
            <div style={{ background: "#272795", color: "white", height: "150px" }}>
                <img src={require("../images/logo.png")} style={{ float: "left", background: "#272795" }} width={40} height={40} alt='logo' />
                <p style={{ background: "#272795" }}>(0221) 429-4484/4509</p>
                <p style={{ background: "#272795" }}>pa@es.gov.ar</p>
            </div>
        </div>
    )
}

export default Sidebar