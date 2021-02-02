import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { activeAccount } from "../../Action/authAction";
import kaft_logo from "../../assents/kaft_logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "react-bootstrap";
import "./style.css";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    border: "none",
    padding: theme.spacing(2, 4, 3),
  },
}));

const ActiveAccount = () => {
  let [open, setOpen] = useState(false);
  let auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    dispatch(activeAccount(params.token));
    setOpen(true);
  }, []);
  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };
  return (
    <Container className="activeContainer">
      <div className="activeLogo">
        <img src={kaft_logo} />
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className="text-center">
                <p id="transition-modal-description">{auth.msg}</p>
                <Button primary onClick={handleClose}>
                  تمام
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </Container>
  );
};

export default ActiveAccount;
