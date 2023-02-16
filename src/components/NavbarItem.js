import { useState } from "react";

const NavbarItem = ({ title, subItems }) => {

    const [dropdown, setDropdown] = useState(false)

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <div style={{ marginTop: "10px" }}>
            <li onClick={() => { handleDropdown() }} style={{ background: "#272795" }} className={`liArrow${dropdown ? "Down" : "Right"}`}>
                <button className="buttonPage" style={{ background: "#272795" }}>{title}</button>
            </li>
            {dropdown &&
                <ul style={{ background: "#272795" }}>
                    {
                        subItems.map(item => (
                            <li style={{ background: "#272795" }}>
                                <button className="buttonPage" style={{ background: "#272795" }}>{item}</button>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default NavbarItem