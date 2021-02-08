import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import ReactImageZoom from "react-image-zoom";
import "./style.css";
import RelatedMenu from "../../Components/RelatedMenu/RelatedMenu";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Action/productAction";
import { useParams } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ReactImageMagnify from "react-image-magnify";
import { addToCart } from "../../Action/cartAction";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../helper/ErrorMesages";

const Product = ({ withOutRelated }) => {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [profilePicture, setProfilePicture] = useState(
    product.singleProduct
      ? product.singleProduct[0].productImg[0].img.image
      : ""
  );
  const { register, handleSubmit, errors, watch } = useForm();
  useEffect(async () => {
    await dispatch(getProduct(slug));
  }, [slug]);
  useEffect(() => {
    if (product.singleProduct) {
      setProfilePicture(product.singleProduct[0].productImg[0].img.image);
    }
  }, [product.singleProduct]);

  if (!product.singleProduct) {
    return <h2>loading</h2>;
  }

  let {
    _id,
    name,
    description,
    price,
    productDetails,
    productImg,
  } = product.singleProduct[0];
  const imgProps = {
    width: 600,
    height: 560,
    zoomPosition: "original",
  };

  const addCart = (data) => {
    dispatch(addToCart({ _id, name, price, img: productImg[0] }, data.size));
  };
  if (withOutRelated) {
    return (
      <Container className="py-2">
        <Row>
          <Col md="6">
            <Col md="12">
              <div className="ProductName py-3 text-center">
                <h5>تی شرت زارا</h5>
              </div>
            </Col>
            <Col md="12">
              <div className="ProductStory">
                <h6>داستان طراحی</h6>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
              </div>
            </Col>
            <form onSubmit={handleSubmit(addCart)}>
              <Col md="12">
                <div className="productSelects py-3">
                  <div>
                    <h6>30 هزار تومان</h6>
                  </div>
                  <div className="d-flex">
                    <Form.Control
                      as="select"
                      className="selectCostum"
                      ref={register({ required: true })}
                    >
                      <option>M</option>
                      <option>S</option>
                    </Form.Control>
                  </div>
                </div>
              </Col>
              <Col md="12">
                <button className="basketButton" type="submit">
                  <h6>اضافه کردن به سبد خرید</h6>
                </button>
              </Col>
            </form>
            <Col md="12">
              <div className="ProductAcoordionMenu">
                <div className="productAccordion">
                  <div>
                    <p>ویژگی محصولات</p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p> تابلو سایزها</p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p>تعویض و برگشت </p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p>محصولات دیگر این طرح </p>
                  </div>
                  <p>+</p>
                </div>
              </div>
            </Col>
          </Col>
          <Col md="6">
            <Col md="12" className="productProfile">
              <ReactImageZoom {...imgProps} />
            </Col>
            <Col md="12" className="thumbnail">
              {/*   {list.map((item) => (
                <div
                  onClick={() => setProfilePicture(item)}
                  className={`${profilePicture == item ? "activeProfile" : ""}`}
                >
                  <img src={item} />
                </div>
              ))} */}
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <div>
      <Header />
      <Container className="py-2">
        <Row>
          <Col md="5" className="rowReverse">
            <Col md="12">
              <div className="ProductName py-3 text-center">
                <h5>{name}</h5>
              </div>
            </Col>
            <Col md="12">
              <div className="ProductStory">
                <h6>داستان طراحی</h6>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
              </div>
            </Col>
            <form onSubmit={handleSubmit(addCart)}>
              <Col md="12">
                <div className="productSelects py-3">
                  <div>
                    <h6>30 هزار تومان</h6>
                  </div>
                  <div className="d-flex">
                    <Form.Control
                      as="select"
                      name="size"
                      className="selectCostum"
                      ref={register({ required: true })}
                    >
                      {productDetails.map((item) => {
                        return <option value={item.size}>{item.size}</option>;
                      })}
                    </Form.Control>
                  </div>
                </div>
              </Col>
              <Col md="12">
                <button className="basketButton" type="submit">
                  <h6>اضافه کردن به سبد خرید</h6>
                </button>
              </Col>
            </form>
            <Col md="12">
              <div className="ProductAcoordionMenu">
                <div className="productAccordion">
                  <div>
                    <p>ویژگی محصولات</p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p> تابلو سایزها</p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p>تعویض و برگشت </p>
                  </div>
                  <p>+</p>
                </div>
                <div className="productAccordion">
                  <div>
                    <p>محصولات دیگر این طرح </p>
                  </div>
                  <p>+</p>
                </div>
              </div>
            </Col>
          </Col>
          <Col md="7">
            <Col md="12" className=" productProfile">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    sizes:
                      "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                    src: profilePicture
                      ? profilePicture
                      : productImg[0].img.image,
                  },
                  largeImage: {
                    zoomPosition: "left",
                    src: profilePicture
                      ? profilePicture
                      : productImg[0].img.image,
                    width: 1200,
                    height: 1600,
                  },
                  enlargedImagePosition: "over",
                }}
              />
            </Col>
            <Col md="12" className="thumbnail">
              {productImg.map((item) => (
                <div
                  onClick={() => setProfilePicture(item.img.image)}
                  className={`${
                    profilePicture == item.img.image ? "activeProfile" : ""
                  }`}
                >
                  <img src={item.img.image} />
                </div>
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
      <RelatedMenu />
      <Footer />
    </div>
  );
};

export default Product;
