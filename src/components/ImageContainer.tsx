import "./ImageContainer.css";

import { useEffect, useState } from "react";
import Comments from "./coments";
import LikesSection from "./LikesSection";

export type Comment={
  id: number
  content: string
  imageId: number
  }
  
  export type Image={
  id: number
  title: string
  likes: number
  image: string
  comments: Comment[]
  }

function Article() {
  const [post, setPost] = useState<Image[]>([]);


  useEffect(() => {
    fetch("http://localhost:3005/images")
      .then((resp) => resp.json())
      .then((imagesFromServer) => setPost(imagesFromServer));
  }, []);

  return (
    <section className="image-container">
      {post.map((item) => (
        <article key={item.id} className="image-card">
          <h2 className="title">{item.title}</h2>
          <img src={item.image} className="image" />
          <LikesSection item={item} />
          <Comments item={item} />
        </article>
      ))}
    </section>
  );
}

export default Article;
