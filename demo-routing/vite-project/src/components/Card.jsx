import "./Card.css";

const Card = ({ name, email, username, company }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <p>Email: <a href={`mailto:${email}`} className="email">{email}</a></p>
      <p>Company: {company.name}</p>
      {/* <div className="action">
        <button className="button">Contact</button>
      </div> */}
    </div>
  );
};

export default Card;
