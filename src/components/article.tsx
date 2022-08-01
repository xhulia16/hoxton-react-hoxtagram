import { useEffect, useState } from "react";
import Comments from "./coments";

 function Article() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/images")
      .then((resp) => resp.json())
      .then((imagesFromServer) => setPost(imagesFromServer));
  }, []);
  
  return (
    <section className="image-container">
  {post.map((item)=>(
 <article className="image-card">
 <h2 className="title">Title of image goes here</h2>
 <img src="./assets/image-placeholder.jpg" className="image" />
 <div className="likes-section">
   <span className="likes">0 likes</span>
   <button className="like-button">♥</button>
 </div>
<Comments/>
</article>
  ))}
   
    </section>
  );
}

export default Article