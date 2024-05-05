function View(props) {
    return(
        <div className="view-container">
        <h2>View</h2>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
        <p>Measage: {props.messageArea}</p>
        </div>
    )
}


export default View;