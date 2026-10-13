import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams(); // e.g. "5" for /users/5
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);

  // Re-runs every time the :id in the URL changes
  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError("");
    setNotFound(false);
    setUser(null);

    async function loadUser() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (res.status === 404) {
          if (!ignore) setNotFound(true);
          return;
        }
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data = await res.json();
        if (!ignore) {
          // The API can also return an empty object for unknown IDs
          if (!data || !data.id) setNotFound(true);
          else setUser(data);
        }
      } catch (err) {
        if (!ignore) setError(err.message || "Could not load this user.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadUser();
    return () => { ignore = true; };
  }, [id]);

  const back = <Link className="btn" to="/">Back to Users</Link>;

  if (loading) return <div className="state-box"><div className="spinner" /><p>Loading user {id}…</p></div>;

  if (notFound)
    return (
      <div className="state-box">
        <h2>User not found</h2>
        <p>There is no user with ID “{id}”. Try an ID from 1 to 10.</p>
        {back}
      </div>
    );

  if (error)
    return (
      <div className="state-box error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        {back}
      </div>
    );

  const { name, username, email, phone, website, address, company } = user;

  return (
    <>
      {back}

      <section className="profile">
        <div className="profile-head">
          <div className="avatar large">{name.charAt(0)}</div>
          <div>
            <h1>{name}</h1>
            <span className="muted">@{username} · ID {user.id}</span>
          </div>
        </div>

        <dl className="details wide">
          <dt>Email</dt><dd>{email}</dd>
          <dt>Phone</dt><dd>{phone}</dd>
          <dt>Website</dt><dd>{website}</dd>
          <dt>City</dt><dd>{address.city}</dd>
          <dt>Address</dt><dd>{address.suite}, {address.street}, {address.zipcode}</dd>
          <dt>Company</dt><dd>{company.name}</dd>
        </dl>
      </section>

      <div className="pager">
        {user.id > 1 && <Link className="btn ghost" to={`/users/${user.id - 1}`}>Previous user</Link>}
        {user.id < 10 && <Link className="btn ghost" to={`/users/${user.id + 1}`}>Next user</Link>}
      </div>
    </>
  );
}