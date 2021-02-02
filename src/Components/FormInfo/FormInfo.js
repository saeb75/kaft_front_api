import React from "react";
import voice from "../../assents/form/voice.png";
import coupon from "../../assents/form/coupon.png";
import setting from "../../assents/form/setting.png";
import comment from "../../assents/form/comment.png";
const FormInfo = () => {
  return (
    <div className="registerForm registerInfo">
      <ul>
        <li>
          <img src={voice} />
          <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و</h6>
        </li>
        <li>
          <img src={coupon} />
          <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و</h6>
        </li>
        <li>
          <img src={setting} />
          <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و</h6>
        </li>
        <li>
          <img src={comment} />
          <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و</h6>
        </li>
      </ul>
    </div>
  );
};

export default FormInfo;
