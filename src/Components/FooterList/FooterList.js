import React from "react";
import { GiPoloShirt } from "react-icons/gi";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import "./style.css";

const FooterList = () => {
  return (
    <div className="py-3  ">
      <ul className="footer_list text-right ">
        <li>
          <a href="#">مردانه</a>
          <ul>
            <div>
              <li>
                <a href="#">
                  <GiPoloShirt />
                  تی شرت
                </a>
              </li>
              <li>
                <a href="#">
                  <GiPoloShirt c />
                  تی شرت
                </a>
              </li>
              <li>
                <a href="#">
                  <GiPoloShirt />
                  تی شرت
                </a>
              </li>
              <li>
                <a href="#">
                  <GiPoloShirt />
                  تی شرت
                </a>
              </li>
              <li>
                <a href="#">
                  <GiPoloShirt />
                  تی شرت
                </a>
              </li>
              <li>
                <a href="#">
                  <GiPoloShirt c />
                  تی شرت
                </a>
              </li>
              <li>
                <a href="#">
                  <GiPoloShirt />
                  تی شرت
                </a>
              </li>
            </div>
          </ul>
        </li>
        <li>
          <a href="#">زنانه</a>
          <ul>
            <div>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
            </div>
          </ul>
        </li>
        <li>
          <a href="#">طرح‌های خاص</a>
          <ul>
            <div>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
            </div>
          </ul>
        </li>
        <li>
          <a href="#">درباره ما</a>
          <ul>
            <div>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
            </div>
          </ul>
        </li>
        <li>
          <a href="#">بیشتر</a>
          <ul>
            <div>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
              <li>
                <a href="#">تی شرت</a>
              </li>
            </div>
          </ul>
        </li>
        <li>
          <a href="#">صفحانت مجازی کافت</a>
          <ul>
            <div>
              <li>
                <a href="#">
                  <AiFillFacebook className="footer_social_icons" />
                  فیسبوک
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillInstagram className="footer_social_icons" />
                  ایستاگرام
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillTwitterSquare className="footer_social_icons" />
                  تویتر
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillYoutube className="footer_social_icons" />
                  یوتیوب
                </a>
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FooterList;
