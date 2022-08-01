import "./LikesSection.css";

function LikesSection({item}){
    return(
        <div className="likes-section">
            <span className="likes">{item.likes}</span>
            <button className="like-button">♥</button>
          </div>
    )
}
export default LikesSection