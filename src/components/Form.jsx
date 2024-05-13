function Form(props) {
  return (
    <div className="form-container">
      <form action="">
        <h2>Form</h2>
        <div>
          <label htmlFor="fName">First Name</label>
          <input
            onChange={props.formHandler}
            type="text"
            name="firstName"
            id="fName"
          />
        </div>
        <br />
        <div>
          <label htmlFor="fName">Last Name</label>
          <input
            onChange={props.formHandler}
            type="text"
            name="lastName"
            id="lName"
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={props.formHandler}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            onChange={props.formHandler}
            type="tel"
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="messageArea"
            id="message"
            cols="20"
            rows="5"
            onChange={props.formHandler}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Form;
