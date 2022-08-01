import './comments.css'

function Comments({ item }) {
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
