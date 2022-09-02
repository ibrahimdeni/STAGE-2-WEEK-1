import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../css/Auth.modules.css";

const AuthModal = ({ show, handleClose }) => {
  const [isRegister, setIsRegister] = useState(false);

  const [showPw, setShowPw] = useState(false);

  const switchMode = () => setIsRegister(!isRegister);

  return (
    <Modal show={show} onHide={handleClose}>
      {/* <div className="bg-dark">     */}
      <Modal.Header closeButton className="bg-dark">
        <Modal.Title className="text-light">{isRegister ? "Register" : "Login"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <Form>
          {isRegister && (
            <Form.Group className="mb-3 text-light" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                autoFocus
                className="atur__placeholder"
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3 text-light" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              autoFocus
              className="atur__placeholder"
            />
          </Form.Group>
          <div className="mb-3 text-light pw__container">
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPw ? "text" : "password"}
                placeholder="Enter your password"
                className="atur__placeholder"
              />
            </Form.Group>
            <div
              className="pw__icon-container"
              onClick={() => setShowPw(!showPw)}
            >
              {showPw ? (
                <FaEyeSlash className="pw__icon" />
              ) : (
                <FaEye className="pw__icon" />
              )}
            </div>
          </div>
          {isRegister && (
            <Form.Group className="mb-3 text-light" controlId="c_password">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your gender"
                className="atur__placeholder"
              />
            </Form.Group>
          )}
          {isRegister && (
            <Form.Group className="mb-3 text-light" controlId="c_password">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your phone number"
                className="atur__placeholder"
              />
            </Form.Group>
          )}
          {isRegister && (
            <Form.Group className="mb-3 text-light" controlId="c_password">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                className="atur__placeholder"
              />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <div className="bg-dark">
      <Modal.Footer className="bg-dark">
        <div className="mx-auto">
        <Button variant={isRegister ? "light" : "danger"} className={isRegister ? "px-5 fw-bold text-danger" : "px-5 fw-bold text-light" } onClick={handleClose}>
          {isRegister ? "Register" : "Login"}
        </Button>
        </div>
      </Modal.Footer>
      </div>

      <div className="d-flex bg-dark">
        <div className="mx-auto">
          <Button variant="light" className="fw-bold" onClick={switchMode}>
            {isRegister ? "Already have an account? Click Here" : "Don't have an account? Click Here"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;