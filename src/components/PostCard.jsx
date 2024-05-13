const PostCard = (props) => {
  return (
    <div className="card">
      {/* <img
      src={`https://source.unsplash.com/150x100?${props.name}`}
      className="card-img-top"
      alt="..."
    /> */}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.author}</p>
        <p className="card-text">{props.content}</p>
        <p>{props.date}</p>
        <button className="btn btn-dark">
          {props.published ? "Published" : "Not Published"}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
