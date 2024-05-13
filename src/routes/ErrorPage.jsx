import { useRouteError, useNavigate } from "react-router-dom";


function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
  return (
    <div>
      <h1>Oops!! It is happened again!</h1>
      <p>{error.statusText || error.message}</p>
      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}

export default ErrorPage
