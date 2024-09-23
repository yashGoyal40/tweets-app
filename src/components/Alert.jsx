import React from 'react'

function Alert(setAlertVisible) {
  return (
    <>
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        Your post has been successfully created!
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setAlertVisible(false)}
        ></button>
      </div>
    </>

  )
}

export default Alert