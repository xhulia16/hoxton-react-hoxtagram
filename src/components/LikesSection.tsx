import "./LikesSection.css";
import {Image} from './ImageContainer'

type Props={
    item: Image
}

function LikesSection({item}: Props){
    return(
        <div className="likes-section">
            <span className="likes">{item.likes}</span>
            <button className="like-button">♥</button>
          </div>
    )
}
export default LikesSection