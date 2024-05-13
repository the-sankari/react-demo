import Card from "../components/Card";


const Users = ({ users }) => {
  return (
    <>
      <h2>Users</h2>
      <div className="boxes">
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </>
  );
};

export default Users;
