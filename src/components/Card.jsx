const Card = (props) => {
  return (
    <>
      <div className="card">
        <img  src={`https://source.unsplash.com/150x100?${props.name}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.email}</p>
          <p className="card-text">
            {props.address.street}, {props.address.city}
          </p>
          <a href={props.website} className="btn btn-dark">
            Website
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
