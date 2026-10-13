function Detail({ label, value }) {
  return (
    <div className="detail">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function UserCard({ user }) {
  return (
    <article className="card">
      <header className="card-header">
        <h2>{user.name}</h2>
        <span className="badge">ID {user.id}</span>
      </header>

      <dl className="details">
        <Detail label="Username" value={user.username} />
        <Detail label="Email" value={user.email} />
        <Detail label="Phone" value={user.phone} />
        <Detail label="Website" value={user.website} />
        <Detail label="City" value={user.address.city} />
      </dl>
    </article>
  );
}

export default UserCard;