import React, { useState } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import LoginImage from "./LoginImage";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    Password: "",
    showPass: false,
  });
  console.log("");
  const handlePassvisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: values.email,
        password: values.Password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Row>
        <Col
          xs={{ span: 12, order: 1 }}
          lg={{ span: 8, order: 1 }}
          xl={{ span: 6, order: 1 }}
        >
          <LoginImage />
        </Col>
        <Col
          xs={{ span: 6, order: 2, offset: 9 }}
          lg={{ span: 4, order: 2, offset: 12 }}
          xl={{ span: 6, order: 2, offset: 9 }}
        >
          <Form className="login-form" onSubmit={onSubmit} autoComplete="off">
            <Form.Group>
              <Form.Text style={{ textAlign: "center", fontWeight: "bold" }}>
                <h1>Logo</h1>
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Text
                style={{ fontSize: "20px", color: "black", fontWeight: "bold" }}
              >
                Welcome Back
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Text>Continue where you left off</Form.Text>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Text style={{ color: "black", fontWeight: "normal" }}>
                Login
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label style={{ color: "grey" }}>Username</Form.Label>
              <Form.Control
                required
                sm={7}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label style={{ color: "grey" }}>Password</Form.Label>
              <Form.Control
                required
                type={values.showPass ? "text" : "password"}
                onChange={(e) =>
                  setValues({ ...values, Password: e.target.value })
                }
              />
              <span className="icon-span" onClick={handlePassvisibilty}>
                {values.showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </Form.Group>
            <br />
            <Row>
              <Form.Group>
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Form.Group>
                <Link to="#" className="login-form-forgot">
                  {" "}
                  Forgot your password?
                </Link>
              </Form.Group>
            </Row>
            <br />
            <Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="login-form-button"
                style={{ backgroundColor: "green" }}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
}
