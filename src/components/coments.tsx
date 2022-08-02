import './comments.css'
import {Image} from './ImageContainer'

type Props={
    item: Image
}

function Comments({ item }: Props) {
  return (
    <ul className="comments">
      <ul className="comments">
        {item.comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </ul>
  );
}

export default Comments;
