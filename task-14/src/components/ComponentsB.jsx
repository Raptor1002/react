import { useSelector } from 'react-redux';

const ComponentB = () => {
  // Access data from the Redux store
  const userData = useSelector((state) => state.user.submittedData);

  return (
    <div className="card display-container">
      <h2>Stored Redux Data</h2>
      
      {!userData ? (
        <p className="no-data">No data submitted yet. Fill out the form in Component A.</p>
      ) : (
        <div className="data-card">
          <div className="data-row">
            <span className="label">Name:</span>
            <span className="value">{userData.name}</span>
          </div>
          <div className="data-row">
            <span className="label">Email:</span>
            <span className="value">{userData.email}</span>
          </div>
          <div className="data-row">
            <span className="label">Phone:</span>
            <span className="value">{userData.phone}</span>
          </div>
          <div className="data-row">
            <span className="label">City:</span>
            <span className="value">{userData.city}</span>
          </div>
          <div className="data-row">
            <span className="label">Role:</span>
            <span className="value badge">{userData.role}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentB;