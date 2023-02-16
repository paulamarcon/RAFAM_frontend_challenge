
import React from 'react'

const ContentItem = ({ title, text, links }) => {
    return (
        <div class="card" style={{ borderLeftColor: "#272795", borderLeftWidth: "10px" }} >
            <div class="card-body" style={{ background: "white", borderRadius: "10px" }}>
                <h5 class="card-title" style={{ color: "#272795", background: "white", fontWeight: "bold" }}>{title}</h5>
                <p class="card-text" style={{ color: "#8E9096", background: "white" }}>{text}</p>
                <ul style={{ background: "white" }}>
                    {
                        links.map(link => (
                            <li style={{ background: "white" }}>
                                <button class="buttonPage" style={{ color: "#272795", background: "white" }}>{link}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ContentItem