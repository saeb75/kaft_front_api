import React from "react";
import { Col, Container, Row, Form, Alert, Modal } from "react-bootstrap";
import FormInfo from "../../Components/FormInfo/FormInfo";
import Header from "../../Components/Header/Header";
import { useForm } from "react-hook-form";
import googleIcon from "../../assents/form/google.png";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../helper/ErrorMesages";
import { signIn } from "../../Action/authAction";
const SignIn = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(signIn(data));
  };
  return (
    <div>
      <Header />
      <Container style={{ maxWidth: "1700px" }}>
        <div className="signupHeader">
          <p>به دنیای کافت</p>
          <h2>خوش آمدید</h2>
        </div>
      </Container>
      <Container className="py-5">
        <Row>
          <Col md="5">
            <FormInfo />
          </Col>
          <Col md="7">
            <div className="registerForm">
              <h6>شما هم عضو کافت بشوید:</h6>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col className="mb-3" md="12">
                    <Form.Control
                      disabled={auth.loading}
                      placeholder="ایمیل "
                      name="email"
                      type="email"
                      autoComplete="false"
                      ref={register({
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {ErrorMessage({ error: errors.email })}
                  </Col>

                  <Col className="mb-3 " md="12">
                    <div className="d-flex">
                      <Form.Control
                        disabled={auth.loading}
                        style={{ order: "2" }}
                        placeholder=" رمز"
                        name="password"
                        type="password"
                        ref={register({ required: true })}
                        autoComplete="false"
                      />
                    </div>
                    {ErrorMessage({ error: errors.password })}
                  </Col>
                  <Col md="12">
                    <button className="registerButton" type="submit">
                      ورود
                    </button>
                  </Col>
                  <Col md="12">
                    <div className="formButtons">
                      <button className="registerButton d-flex">
                        <span> ورود از طریق</span>
                        <span>
                          <img src={googleIcon} />
                        </span>
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
