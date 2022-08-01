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
 <h2 className="title">{item.title}</h2>
 <img src={item.image} className="image" />
 <div className="likes-section">
   <span className="likes">{item.likes}</span>
   <button className="like-button">♥</button>
 </div>
<Comments/>
</article>
  ))}
   
    </section>
  );
}

export default Article