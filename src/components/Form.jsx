import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';

export default function Form({onSubmit, currentUser}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div style={{background: "#FFFF8F",}}>
    <div className="form">
      <br/>
      <p style={{fontWeight: 'bold',}}>
      Welcome {currentUser.accountId}!
      </p>
      <Button variant="warning" onClick={handleShow}>
        New couple
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add an entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => {onSubmit(e, setShow);}}>
            <fieldset id="fieldset">
              <p className="highlight">
                <label htmlFor="title">Couple:</label>
                <input
                  autoComplete="off"
                  autoFocus
                  id="title"
                  required
                  className="form-control"
                />
              </p>
              <p>
                <label htmlFor="description">Why:</label>
                <textarea
                  autoComplete="off"
                  id="description"
                  required
                  className="form-control"
                />
              </p>
              <p>
                <label htmlFor="url">Photo:</label>
                <input
                  autoComplete="off"
                  id="url"
                  required
                  className="form-control"
                />
              </p>
              <button type="submit">
                Sign
              </button>
            </fieldset>
          </form>
        </Modal.Body>
      </Modal>
    </div>
    </div>
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};