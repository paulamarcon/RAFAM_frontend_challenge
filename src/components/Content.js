import { contentItems } from "../data/contentItems";
import ContentItem from "./ContentItem";


const Content = () => {
    return (
        <div style={{ float: "left", width: "75%" }}>
            <span className='titleContentStyle' style={{ marginLeft: "10px" }}>Configuración</span>
            <div class="row" style={{ marginLeft: "150px", marginTop: "20px" }}>
                {
                    contentItems.map(item => (
                        <div class="col-sm-6" style={{ marginTop: "5px" }}>
                            <ContentItem key={item} {...item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Content