import { Routes, Route, NavLink } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <span className="brand">Directory</span>
          <nav>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Users
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          {/* Dynamic route: :id is read with useParams() in UserDetails */}
          <Route path="/users/:id" element={<UserDetails />} />
          <Route
            path="*"
            element={
              <div className="state-box">
                <h2>Page not found</h2>
                <a className="btn" href="/">Back to Users</a>
              </div>
            }
          />
        </Routes>
      </main>
    </>
  );
}