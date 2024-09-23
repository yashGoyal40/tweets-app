import React from 'react';


function FetchingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="spinner-border text-primary" role="status">
      </div>
    </div>
  );
}

export default FetchingSpinner;
