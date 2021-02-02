import React from "react";
import { Alert } from "react-bootstrap";

export default function ErrorMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return (
          <Alert variant="warning" className=" text-right m-0 p-2">
            پر کردن این فیلد الزامی است
          </Alert>
        );
      case "minLength":
        return (
          <Alert variant="warning" className=" text-right m-0 p-2">
            {" "}
            حداقل دو کاراکتر الزامی است
          </Alert>
        );
      case "pattern":
        return (
          <Alert variant="warning" className=" text-right m-0 p-2">
            ایمیل را به درستی وارد کنید
          </Alert>
        );
      case "min":
        return (
          <Alert variant="warning" className=" text-right m-0 p-2">
            Minmium age is 18
          </Alert>
        );
      case "validate":
        return (
          <Alert variant="warning" className=" text-right m-0 p-2">
            رمز را به درستی وارد کنید
          </Alert>
        );
      default:
        return null;
    }
  }

  return null;
}
