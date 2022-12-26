import "./Register.css";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { StoreCtxt } from "../../services/StoreService";

function Register() {
  const { user, gigs } = useContext(StoreCtxt).states;
  const { addNewUser } = useContext(StoreCtxt).actions;
  const userName = useRef();
  const email = useRef();
  const pass = useRef();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    addNewUser({
      userName: userName.current.value,
      email: email.current.value,
      password: pass.current.value,
    });
    navigate("/");
  };

  return (
    <div className="register-page">
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>שם משתמש</Form.Label>
          <Form.Control type="text" ref={userName} name="userName1" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>מייל</Form.Label>
          <Form.Control ref={email} name="email1" type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>סיסמא</Form.Label>
          <Form.Control type="Password" ref={pass} name="pass1" />
        </Form.Group>

        <Button type="submit" variant="primary" className="shira-button">
          שליחה
        </Button>
      </Form>
    </div>
  );
}

export default Register;
