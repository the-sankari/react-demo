function Form(props) {
  return (
    <form action="" onChange={props.formHandler}>
      <h2>Form</h2>
      <div>
        <label htmlFor="fName">First Name</label>
        <input type="text" name="firstName" id="fName" />
      </div>
      <br />
      <div>
        <label htmlFor="fName">Last Name</label>
        <input type="text" name="lastName" id="lName" />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="messageArea" id="message" cols="20" rows="5"></textarea>
      </div>
    </form>
  );
}

export default Form;
