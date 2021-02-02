import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Alert, Modal } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import "./style.css";
import googleIcon from "../../assents/form/google.png";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../helper/ErrorMesages";
import { getAllEmail, signUp } from "../../Action/authAction";
import { useDispatch, useSelector } from "react-redux";
import NewModal from "../../Components/Modals/NewModal";
import { useHistory } from "react-router-dom";
import FormInfo from "../../Components/FormInfo/FormInfo";
const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState("");
  const { register, handleSubmit, errors, watch } = useForm();
  let history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllEmail());
  }, []);
  useEffect(() => {
    if (auth.sendActivate) {
      setMsg(auth.msg);
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [auth.sendActivate]);

  const handlechange = (e) => {
    setEmail(e.target.value);
    const validEmail = auth.emails.find((item) => item.email == e.target.value);

    if (validEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const onSubmit = (data) => {
    const validEmail = auth.emails.find((item) => item.email == email);

    if (validEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);
      console.log(data);
      dispatch(signUp(data));
    }
  };
  const handleClose = () => {
    setOpen(false);
    history.push("/");
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
                      placeholder="نام"
                      name="firstName"
                      ref={register({
                        required: true,
                        minLength: 2,
                        maxLength: 20,
                      })}
                    />

                    {ErrorMessage({ error: errors.firstName })}
                  </Col>
                  <Col className="mb-3" md="12">
                    <Form.Control
                      disabled={auth.loading}
                      placeholder="نام خانوادگی"
                      name="lastName"
                      ref={register({
                        required: true,
                        minLength: 2,
                        maxLength: 20,
                      })}
                    />
                    {ErrorMessage({ error: errors.lastName })}
                  </Col>
                  <Col className="  mb-3" md="12">
                    <div className="d-flex text-right myCheckBox">
                      <Form.Check
                        disabled={auth.loading}
                        type="radio"
                        aria-label="radio 1"
                        label="مرد"
                        className="mr-2"
                        name="gender"
                        value="man"
                        style={{ color: " #a7a89a" }}
                        ref={register({ required: true })}
                      />

                      <Form.Check
                        disabled={auth.loading}
                        type="radio"
                        aria-label="radio 1"
                        ref={register({ required: true })}
                        label="زن"
                        name="gender"
                        value="women"
                        style={{ color: " #a7a89a" }}
                      />
                    </div>
                    {ErrorMessage({ error: errors.gender })}
                  </Col>

                  <Col className="mb-3" md="12">
                    <Form.Control
                      disabled={auth.loading}
                      placeholder="ایمیل "
                      onChange={handlechange}
                      name="email"
                      type="email"
                      autoComplete="false"
                      ref={register({
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {ErrorMessage({ error: errors.email })}
                    {emailError && (
                      <Alert variant="warning" className=" text-right m-0 p-2">
                        با این ایمیل قبلا ثبت نام شده است
                      </Alert>
                    )}
                  </Col>

                  <Col className="mb-3 " md="12">
                    <div className="d-flex">
                      <Form.Control
                        disabled={auth.loading}
                        style={{ order: "2" }}
                        placeholder="تکرار رمز"
                        name="newPassword"
                        type="password"
                        ref={register}
                        autoComplete="false"
                      />
                      <Form.Control
                        disabled={auth.loading}
                        style={{ order: "1" }}
                        placeholder="رمز "
                        type="password"
                        ref={register({
                          validate: (value) => value === watch("newPassword"),
                        })}
                        name="password"
                        autoComplete="false"
                        className="mr-2"
                      />
                    </div>
                    {ErrorMessage({ error: errors.password })}
                  </Col>
                  <Col md="12">
                    <button className="registerButton" type="submit">
                      ثبت نام
                    </button>
                  </Col>
                  <Col md="12">
                    <div className="formButtons">
                      <button className="registerButton d-flex">
                        <span>ثبت نام از طریق</span>
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
        <NewModal
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          msg={msg}
        ></NewModal>
      </Container>
    </div>
  );
};

export default SignUp;
