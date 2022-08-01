function Comments({ item }) {
  return (
    <ul className="comments">
      <ul className="comments">
        {item.comments.map((comment) => (
          <li>{comment.content}</li>
        ))}
      </ul>
    </ul>
  );
}

export default Comments;
