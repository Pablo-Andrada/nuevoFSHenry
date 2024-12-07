import Card from "./Card";

const CardList = ( {users} ) => {
  return (
    <div className="card-container">
      {users.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
          company={user.company}
        />
      ))}
    </div>
  );
};

export default CardList;
