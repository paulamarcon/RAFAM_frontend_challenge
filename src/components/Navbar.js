import NavbarItem from "./NavbarItem";

import { navbarItems } from "../data/navbarItems";

const Navbar = () => {

    return (
        <div style={{ height: "550px", background: "#272795", marginTop: "25px" }}>
            <ul style={{ background: "#272795" }}>
                <span style={{ background: "#272795", color: "white" }}>Inicio</span>
                {
                    navbarItems.map(item => (
                        <>
                            <NavbarItem key={item} {...item} />
                        </>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar;
