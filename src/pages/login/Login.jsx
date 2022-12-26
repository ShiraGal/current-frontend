import "./Login.css";
import logoImg from "../../image/logo.png";
import { useRef, useContext } from "react";
import { StoreCtxt } from "../../services/StoreService";
import { useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel } from "react-bootstrap";

function Login(props) {
  const { loginUser } = useContext(StoreCtxt).actions;
  const email = useRef();
  const pass = useRef();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log("by ref:", email.current.value, pass.current.value);
    loginUser({
      email: email.current.value,
      password: pass.current.value,
    });
  };

  const goRegister = (e) => {
    navigate("/register");
  };

  return (
    <div className="out-login-page">
      <div className="login-page">
        <div className="login-title">
          <img className="login-title-logo" src={logoImg}></img>
        </div>
        <h3>הכרטיס הצהוב שיזכיר לך לדרוש תשלום מלקוח שהגזים</h3>
        <Form onSubmit={submitForm} className="shira-form">
          <FloatingLabel
            controlId="floatingInput"
            label="אימייל"
            className="mb-3"
          >
            <Form.Control
              type="email"
              ref={email}
              name="email1"
              placeholder="name@example.com"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="סיסמא"
            className="mb-3"
          >
            <Form.Control
              type="password"
              ref={pass}
              name="pass1"
              placeholder="Password"
            />
          </FloatingLabel>
          <div className="d-grid gap-2">
            <Button className="shira-button" variant="primary" type="submit">
              כניסה
            </Button>
          </div>
        </Form>
        <hr></hr>
        <div className="d-grid gap-2">
          <Button className="shira-button" onClick={goRegister}>
            הרשמה
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
