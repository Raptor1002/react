import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://jsonplaceholder.typicode.com/users";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadUsers() {
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data = await res.json();
        if (!ignore) setUsers(data);
      } catch (err) {
        if (!ignore) setError(err.message || "Could not load users.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadUsers();
    return () => { ignore = true; };
  }, []);

  if (loading) return <div className="state-box"><div className="spinner" /><p>Loading users…</p></div>;
  if (error) return <div className="state-box error"><h2>Something went wrong</h2><p>{error}</p></div>;

  return (
    <>
      <h1 className="page-title">Users</h1>
      <p className="page-sub">{users.length} people in the directory</p>

      <div className="grid">
        {users.map((user) => (
          <article className="card" key={user.id}>
            <div className="card-head">
              <div className="avatar">{user.name.charAt(0)}</div>
              <div>
                <h3>{user.name}</h3>
                <span className="muted">@{user.username}</span>
              </div>
              <span className="id-badge">ID {user.id}</span>
            </div>

            <dl className="details">
              <dt>Email</dt><dd>{user.email}</dd>
              <dt>Phone</dt><dd>{user.phone}</dd>
              <dt>Website</dt><dd>{user.website}</dd>
              <dt>City</dt><dd>{user.address.city}</dd>
            </dl>

            <Link className="btn" to={`/users/${user.id}`}>View details</Link>
          </article>
        ))}
      </div>
    </>
  );
}