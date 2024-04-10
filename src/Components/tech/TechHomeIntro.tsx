

import styles from "./TechHomeIntoComponent.module.css";
import mountains from "../../static/bg.png";

import laptop from "../../static/laptop.png";
import logo from "../../assets/logo.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LanguageIcon from "@mui/icons-material/Language";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import EuroIcon from "@mui/icons-material/Euro";
import { useState } from "react";
import clientTesla from "../../static/client_image/client_00001.png";
import clientGoogle from "../../static/client_image/client_00002.png";
import clientMeta from "../../static/client_image/client_00003.png";
import clientNetflix from "../../static/client_image/client_00004.png";
import clientAmazon from "../../static/client_image/client_00005.png";
import clientSpotify from "../../static/client_image/client_00006.png";
import clientBloomberg from "../../static/client_image/client_00007.png";
import clientMicrosoft from "../../static/client_image/client_00008.png";
import clientAdobe from "../../static/client_image/client_00009.png";
import futuristicCity from "../../static/futuristic-city.png";
import sem from "../../static/sem.png";
import smart5G from "../../static/smart-5g.png";
import smartCity from "../../static/smarty-city-5g.png";
import superComputer from "../../static/super-computer.png";
import work from "../../static/work.png";
import infoIcon from "../../static/info-icon.png";
import arrowYellow from "../../static/arrow_yellow.png";
import arrowWhite from "../../static/arrow_white.png";
import slider1 from "../../static/slider_1.png";
import slider2 from "../../static/slider_2.png";
import slider3 from "../../static/slider_3.png";
import slider4 from "../../static/slider_4.png";
import slider5 from "../../static/slider_5.png";
import brainStorming from "../../static/brainstorm.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import OurClient from "../OurClient";
import NewsLetter from "../NewsLetter";

const SuperHeadingTextStyle = styled(Typography)({
  fontWeight: 400,
  fontSize: "62px",
  lineHeight: "72px",
  fontFamily: "'Playfair Display', serif",
  color: "white",
});

interface SpacedTextProps {
  text: string;
  color: string;
}
interface HeadingTextProps {
  text: string;
  color: string;
}
interface SuperHeadingTextProps {
  text: string;
}
interface ParagraphTextProps {
  text: string;
}
interface CustomTextProps {
  text: string;
  lineHeight: string;
  size: string;
}
interface ImageContainerProps {
  src: string;
}
interface OfferContainerProps {
  url: string;
}

interface ArrowColorProp {
  color: string;
}

const menuItemStyle = {
  color: "white",
  paddingBottom: "16px",
  cursor: "pointer",
};
const menuItemBoldStyle = {
  color: "white",
  paddingBottom: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

const ImageContainer: React.FC<ImageContainerProps> = ({ src }) => {
  return (
    <Box sx={{ width: "30%", height: "521.25px" }}>
      <img src={src} alt="" srcSet="" />
    </Box>
  );
};

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ClientImage: React.FC<ImageContainerProps> = ({ src }) => {
  return (
    <Box sx={{ width: "156px", height: "52px", opacity: "0.4" }}>
      <img src={src} alt="" srcSet="" />
    </Box>
  );
};

const ParagraphText: React.FC<ParagraphTextProps> = ({ text }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "20.83px",
          fontFamily: "'DM Sans', sans-serif",
          color: "white",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const CustomText: React.FC<CustomTextProps> = ({ text, size, lineHeight }) => {
  return (
    <Box>
      <Typography
        className="text-justify"
        sx={{
          fontFamily: "'DM Sans', sans-serif",
          color: "white",
          fontWeight: "400",
          fontSize: `${size} !important`,
          lineHeight: `"${lineHeight} !important"`,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const ArrowYello: React.FC<ArrowColorProp> = ({ color }) => {
  return (
    <Box sx={{ marginLeft: "10px", height: "18px" }}>
      <img src={arrowYellow} alt="" srcSet="" />
    </Box>
  );
};
const ArrowWhite: React.FC<ArrowColorProp> = ({ color }) => {
  return (
    <Box sx={{ marginLeft: "10px", height: "12px" }}>
      <img src={arrowWhite} alt="" srcSet="" />
    </Box>
  );
};

const HeadingText: React.FC<HeadingTextProps> = ({ text, color }) => {
  return (
    <Box>
      <Typography
        sx={{
          color: color,
          fontWeight: "400",
          fontSize: "46px !important",
          lineHeight: "61px",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const SuperHeadingText: React.FC<SuperHeadingTextProps> = ({ text }) => {
  return (
    <Box>
      <SuperHeadingTextStyle>{text}</SuperHeadingTextStyle>
    </Box>
  );
};

const SpacedText: React.FC<SpacedTextProps> = ({ text, color }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Box
        sx={{ width: "51px", height: "1.5px", backgroundColor: "#FBD784" }}
      ></Box>
      <Typography
        sx={{
          color: "#FBD784",
          fontSize: "12px",
          letterSpacing: "8px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
const TechHomeInto: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const [isOrderedHovered, setOrderedIsHovered] = useState<{
    [key: number]: boolean;
  }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  const setonMouseLeave = (num: number) => {
    console.log(num);
    setOrderedIsHovered((prevState) => ({
      ...prevState,
      [num]: false,
    }));
  };

  const setonMouseEnter = (num: number) => {
    setOrderedIsHovered((prevState) => ({
      ...prevState,
      [num]: true,
    }));
  };

  console.log("isOrderedHovered");
  console.log(isOrderedHovered);

  const NavBarContainer = styled(Box)({
    color: "black",
    display: "flex",
    gap: "40px",
    justifyContent: "flex-start",
    alignItems: "center",
  });

  const ContentContainer = styled(Box)({
    paddingLeft: "80px",
    paddingRight: "80px",
    justifyContent: "center",
    alignItems: "center",
    height: "525px",
  });

  const HeaderContainer = styled(Box)({
    display: "flex",
    gap: "150px",
    flexDirection: "column",
  });

  const ReadMoreText = styled(Box)({
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    color: "#FBD784",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: "bold",
  });

  interface ImageTextLayoutProps {
    reversed: boolean;
  }

  const ImageTextLayout: React.FC<ImageTextLayoutProps> = ({ reversed }) => {
    return (
      <div
        style={{
          flexGrow: 1,
          marginTop: 16,
          background: "#0B1D26",
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Grid container spacing={2}>
          {/* Right column (Text) */}
          <Grid
            item
            xs={12}
            sm={8}
            style={{ width: "60%", padding: 16, textAlign: "left" }}
          >
            <SpacedText color="#FBD784" text={"GET STARTED"} />
            <br></br>
            <HeadingText
              color="#FFFFFF"
              text={"Summit Excellence with Everest Technology"}
            ></HeadingText>
            <br></br>

            <ParagraphText
              text={
                "Everest Technology is inspired by the all mighty Mt Everest – highest peak in the world thrive to be leading IT services provider in the Middle East region and globally. Everest Technology is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, marketing strategies and industrial automation services."
              }
            ></ParagraphText>
            <br></br>
            <div style={{ textAlign: "left" }}>
              <ReadMoreText>
                read more <ArrowYello color="" />{" "}
              </ReadMoreText>
            </div>
          </Grid>
          {reversed ? (
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={laptop}
                alt="Sample Image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </div>
    );
  };

  return (
    <>
      <Box sx={{ position: "relative", background: "#0B1D26" }}>
        <Box
          sx={{
            paddingTop: ["20px", "51px"],
            paddingLeft: ["20px", "70px"],
            paddingRight: ["20px", "70px"],
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%, rgba(11, 29, 38, 1.0) 100%, rgba(11, 29, 38, 1.0) 100%), url(${mountains})`,
            height: ["auto", "120vh"],
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <HeaderContainer>
            <Grid container spacing={2}>
              {/* Logo Grid Item */}
              <Grid item xs={12} sm={4}>
                {" "}
                {/* Full width on mobile, 4 columns on tablet */}
                <Link to="/">
                  <img src={logo} alt="logo" className="w-25 h-auto" />
                </Link>
              </Grid>
              {/* Navigation Grid Item - Only visible on Tablet and Desktop */}
              <Grid
                item
                xs={0}
                sm={8}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <NavBarContainer sx={{ cursor: "pointer", color: "white" }}>
                  <Link to="/"> Explore</Link>
                  <Box>
                    <Link to="/about-us"> About Us</Link>
                  </Box>
                  <Link to="/"> Media</Link>
                </NavBarContainer>
              </Grid>
            </Grid>

            <button
              className="md:hidden focus:outline-none flex items-center justify-center p-2 rounded-md mobile-btn "
              style={{ position: "absolute", right: "9%" }}
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <div
              className={`absolute top-0 z-10 left-0 bg-[rgba(0,0,0,0.9)] w-full text-white md:hidden ${
                isOpen
                  ? "h-screen"
                  : "h-0 overflow-hidden transition-all duration-300 ease-in-out"
              }`}
            >
              <button
                className="absolute top-4 right-4 text-white"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="flex flex-col items-center gap-9 font-bold text-xl p-8">
                <li onClick={toggleMenu}>
                  <Link to="/">Explore</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/">Media</Link>
                </li>
              </ul>
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: ["column", "row"],
                alignItems: ["center", "flex-start"],
                color: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: ["row", "column"], // Stack icons vertically on mobile
                  alignItems: "center",
                  gap: ["30px", "0"], // Adjust gap for responsive design
                  transform: ["none", "rotate(90deg)"], // Remove rotation on mobile
                }}
              >
                <Box
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                  }}
                >
                  Follow us
                </Box>
                <Box>
                  <InstagramIcon />
                </Box>
                <Box>
                  <XIcon />
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <SpacedText color="#FBD784" text="EVEREST TECHNOLOGY" />
                <Box
                  sx={{
                    fontWeight: "400",
                    fontSize: ["28px", "63px"], // Adjust font size for responsive design
                    lineHeight: ["32px", "71px"], // Adjust line height for responsive design
                    color: "white",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Elevate Your Business
                </Box>
                <Box
                  sx={{
                    fontWeight: "400",
                    fontSize: ["28px", "63px"], // Adjust font size for responsive design
                    lineHeight: ["32px", "71px"], // Adjust line height for responsive design
                    color: "white",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Beyond Peaks!
                </Box>
                <Box
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#EDEDF5",
                  }}
                >
                  Your Gateway to Next-Level IT & IOT Solutions
                </Box>
              </Box>
            </Box>
          </HeaderContainer>
        </Box>

        <ImageTextLayout reversed={true} />

        <Box sx={{ background: "#0B1D26" }}>
          <Box
          // sx={{
          //   paddingLeft: "163px",
          //   paddingRight: "163px",
          //   paddingTop: "100px",
          // }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <SpacedText color="#FBD784" text={"TECHNOLOGY EXCELLENCE"} />
              <SuperHeadingText text={"What We Offer"} />
              <ParagraphText
                text={"Developing Custom Services To Implement Best For You."}
              ></ParagraphText>
            </Box>
            {/* <Grid container spacing={4}>
                        <Grid item xs>
                            <Typography sx={{ color: "red", fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", transition: "font-size 0.5s ease-in-out" }}>111: CRM/ERP</Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ color: "red", fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", transition: "font-size 0.5s ease-in-out" }}>111: CRM/ERP</Typography>

                        </Grid>
                        <Grid item xs>
                            <Typography sx={{ color: "red", fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", transition: "font-size 0.5s ease-in-out" }}>111: CRM/ERP</Typography>

                        </Grid>
                    </Grid> */}

            <Box>
              <Grid
                container
                sx={{
                  border: "",
                  paddingTop: "80px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                spacing={1}
              >
                <Grid item md={4} xs={12}>
                  <Box
                    onMouseLeave={() => setonMouseLeave(1)}
                    onMouseEnter={() => setonMouseEnter(1)}
                    sx={{
                      height: "345px",
                      overflow: "hidden",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                      }}
                    >
                      <Box
                        className=""
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "inherit",
                          paddingLeft: "20px",
                        }}
                      >
                        <Box sx={{ paddingTop: "20px" }}>
                          <img src={infoIcon} alt="" srcSet="" />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              bottom: isOrderedHovered[1] ? "10%" : "-65%",
                              transition:
                                "bottom 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "28px",
                                transition: "font-size 0.5s ease-in-out",
                              }}
                            >
                              CRM/ERP
                            </Typography>
                            <Box
                              sx={{
                                opacity: isOrderedHovered[1] ? "1" : "0",
                                fontSize: "12px",
                                transition:
                                  "opacity 0.5s ease-in-out, font-size 0.5s ease-in-out",
                              }}
                            >
                              We make custom ERP/CRM development, which we
                              develop and deliver for your business as per
                              requirements and to help you grow your business
                              exponentially by automating all your recurring
                              tasks.
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              fontFamily: "'Bebas Neue', sans-serif",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "10px",
                              fontSize: "14px",
                            }}
                          >
                            EXPLORE MORE <ArrowRightAltIcon />{" "}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${futuristicCity})`,
                      }}
                    ></Box>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Box
                    onMouseLeave={() => setonMouseLeave(2)}
                    onMouseEnter={() => setonMouseEnter(2)}
                    sx={{
                      height: "345px",
                      overflow: "hidden",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                      }}
                    >
                      <Box
                        className=""
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "inherit",
                          paddingLeft: "20px",
                        }}
                      >
                        <Box sx={{ paddingTop: "20px" }}>
                          <img src={infoIcon} alt="" srcSet="" />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              bottom: isOrderedHovered[2] ? "10%" : "-65%",
                              transition:
                                "bottom 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "28px",
                                transition: "font-size 0.5s ease-in-out",
                              }}
                            >
                              CRM/ERP
                            </Typography>
                            <Box
                              sx={{
                                opacity: isOrderedHovered[2] ? "1" : "0",
                                fontSize: "12px",
                                transition:
                                  "opacity 0.5s ease-in-out, font-size 0.5s ease-in-out",
                              }}
                            >
                              We make custom ERP/CRM development, which we
                              develop and deliver for your business as per
                              requirements and to help you grow your business
                              exponentially by automating all your recurring
                              tasks.
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              fontFamily: "'Bebas Neue', sans-serif",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "10px",
                              fontSize: "14px",
                            }}
                          >
                            EXPLORE MORE <ArrowRightAltIcon />{" "}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${smart5G})`,
                      }}
                    ></Box>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Box
                    onMouseLeave={() => setonMouseLeave(3)}
                    onMouseEnter={() => setonMouseEnter(3)}
                    sx={{
                      height: "345px",
                      overflow: "hidden",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                      }}
                    >
                      <Box
                        className=""
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "inherit",
                          paddingLeft: "20px",
                        }}
                      >
                        <Box sx={{ paddingTop: "20px" }}>
                          <img src={infoIcon} alt="" srcSet="" />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              bottom: isOrderedHovered[3] ? "10%" : "-65%",
                              transition:
                                "bottom 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "28px",
                                transition: "font-size 0.5s ease-in-out",
                              }}
                            >
                              CRM/ERP
                            </Typography>
                            <Box
                              sx={{
                                opacity: isOrderedHovered[3] ? "1" : "0",
                                fontSize: "12px",
                                transition:
                                  "opacity 0.5s ease-in-out, font-size 0.5s ease-in-out",
                              }}
                            >
                              We make custom ERP/CRM development, which we
                              develop and deliver for your business as per
                              requirements and to help you grow your business
                              exponentially by automating all your recurring
                              tasks.
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              fontFamily: "'Bebas Neue', sans-serif",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "10px",
                              fontSize: "14px",
                            }}
                          >
                            EXPLORE MORE <ArrowRightAltIcon />{" "}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${futuristicCity})`,
                      }}
                    ></Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container sx={{ paddingTop: "80px" }} spacing={1}>
                <Grid item md={4} xs={12}>
                  <Box
                    onMouseLeave={() => setonMouseLeave(4)}
                    onMouseEnter={() => setonMouseEnter(4)}
                    sx={{
                      height: "345px",
                      overflow: "hidden",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                      }}
                    >
                      <Box
                        className=""
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "inherit",
                          paddingLeft: "20px",
                        }}
                      >
                        <Box sx={{ paddingTop: "20px" }}>
                          <img src={infoIcon} alt="" srcSet="" />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              bottom: isOrderedHovered[4] ? "10%" : "-65%",
                              transition:
                                "bottom 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "28px",
                                transition: "font-size 0.5s ease-in-out",
                              }}
                            >
                              CRM/ERP
                            </Typography>
                            <Box
                              sx={{
                                opacity: isOrderedHovered[4] ? "1" : "0",
                                fontSize: "12px",
                                transition:
                                  "opacity 0.5s ease-in-out, font-size 0.5s ease-in-out",
                              }}
                            >
                              We make custom ERP/CRM development, which we
                              develop and deliver for your business as per
                              requirements and to help you grow your business
                              exponentially by automating all your recurring
                              tasks.
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              fontFamily: "'Bebas Neue', sans-serif",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "10px",
                              fontSize: "14px",
                            }}
                          >
                            EXPLORE MORE <ArrowRightAltIcon />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${futuristicCity})`,
                      }}
                    ></Box>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Box
                    onMouseLeave={() => setonMouseLeave(5)}
                    onMouseEnter={() => setonMouseEnter(5)}
                    sx={{
                      height: "345px",
                      overflow: "hidden",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                      }}
                    >
                      <Box
                        className=""
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "inherit",
                          paddingLeft: "20px",
                        }}
                      >
                        <Box sx={{ paddingTop: "20px" }}>
                          <img src={infoIcon} alt="" srcSet="" />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              bottom: isOrderedHovered[5] ? "10%" : "-65%",
                              transition:
                                "bottom 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "28px",
                                transition: "font-size 0.5s ease-in-out",
                              }}
                            >
                              CRM/ERP
                            </Typography>
                            <Box
                              sx={{
                                opacity: isOrderedHovered[5] ? "1" : "0",
                                fontSize: "12px",
                                transition:
                                  "opacity 0.5s ease-in-out, font-size 0.5s ease-in-out",
                              }}
                            >
                              We make custom ERP/CRM development, which we
                              develop and deliver for your business as per
                              requirements and to help you grow your business
                              exponentially by automating all your recurring
                              tasks.
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              fontFamily: "'Bebas Neue', sans-serif",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "10px",
                              fontSize: "14px",
                            }}
                          >
                            EXPLORE MORE <ArrowRightAltIcon />{" "}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${smartCity})`,
                      }}
                    ></Box>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Box
                    onMouseLeave={() => setonMouseLeave(6)}
                    onMouseEnter={() => setonMouseEnter(6)}
                    sx={{
                      height: "345px",
                      overflow: "hidden",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                      }}
                    >
                      <Box
                        className=""
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "inherit",
                          paddingLeft: "20px",
                        }}
                      >
                        <Box sx={{ paddingTop: "20px" }}>
                          <img src={infoIcon} alt="" srcSet="" />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              bottom: isOrderedHovered[6] ? "10%" : "-65%",
                              transition:
                                "bottom 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "28px",
                                transition: "font-size 0.5s ease-in-out",
                              }}
                            >
                              CRM/ERP
                            </Typography>
                            <Box
                              sx={{
                                opacity: isOrderedHovered[6] ? "1" : "0",
                                fontSize: "12px",
                                transition:
                                  "opacity 0.5s ease-in-out, font-size 0.5s ease-in-out",
                              }}
                            >
                              We make custom ERP/CRM development, which we
                              develop and deliver for your business as per
                              requirements and to help you grow your business
                              exponentially by automating all your recurring
                              tasks.
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              fontFamily: "'Bebas Neue', sans-serif",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "10px",
                              fontSize: "14px",
                            }}
                          >
                            EXPLORE MORE <ArrowRightAltIcon />{" "}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        backgroundColor: "#152E3A",
                        color: "white",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${superComputer})`,
                      }}
                    ></Box>
                  </Box>
                </Grid>
              </Grid>

              {showMore && (
                <Grid container sx={{ paddingTop: "80px" }} spacing={1}>
                  <Grid item md={4} xs={12}>
                    <Box
                      onMouseLeave={() => setonMouseLeave(7)}
                      onMouseEnter={() => setonMouseEnter(7)}
                      sx={{
                        height: "345px",
                        overflow: "hidden",
                        display: "flex",
                      }}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          width: "50%",
                          backgroundColor: "#152E3A",
                          color: "white",
                        }}
                      >
                        <Box
                          className=""
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "inherit",
                            paddingLeft: "20px",
                          }}
                        >
                          <Box sx={{ paddingTop: "20px" }}>
                            <img src={infoIcon} alt="" srcSet="" />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            <Box
                              sx={{
                                position: "relative",
                                bottom: isOrderedHovered[7] ? "10%" : "-65%",
                                transition:
                                  "bottom 0.5s ease-in-out, opacity 0.5s ease-in-out",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: "'Bebas Neue', sans-serif",
                                  fontSize: "28px",
                                  transition: "font-size 0.5s ease-in-out",
                                }}
                              >
                                CRM/ERP
                              </Typography>
                              <Box
                                sx={{
                                  opacity: isOrderedHovered[7] ? "1" : "0",
                                  fontSize: "12px",
                                  transition:
                                    "opacity 0.5s ease-in-out, font-size 0.5s ease-in-out",
                                }}
                              >
                                We make custom ERP/CRM development, which we
                                develop and deliver for your business as per
                                requirements and to help you grow your business
                                exponentially by automating all your recurring
                                tasks.
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: "10px",
                                fontSize: "14px",
                              }}
                            >
                              EXPLORE MORE <ArrowRightAltIcon />{" "}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          height: "100%",
                          width: "50%",
                          backgroundColor: "#152E3A",
                          color: "white",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundImage: `url(${superComputer})`,
                        }}
                      ></Box>
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Box
                      onMouseLeave={() => setonMouseLeave(8)}
                      onMouseEnter={() => setonMouseEnter(8)}
                      sx={{
                        height: "345px",
                        overflow: "hidden",
                        display: "flex",
                      }}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          width: "50%",
                          backgroundColor: "#152E3A",
                          color: "white",
                        }}
                      >
                        <Box
                          className=""
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "inherit",
                            paddingLeft: "20px",
                          }}
                        >
                          <Box sx={{ paddingTop: "20px" }}>
                            <img src={infoIcon} alt="" srcSet="" />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            <Box
                              sx={{
                                position: "relative",
                                bottom: isOrderedHovered[8] ? "10%" : "-65%",
                                transition:
                                  "bottom 0.5s ease-in-out, opacity 0.5s ease-in-out",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: "'Bebas Neue', sans-serif",
                                  fontSize: "28px",
                                  transition: "font-size 0.5s ease-in-out",
                                }}
                              >
                                CRM/ERP
                              </Typography>
                              <Box
                                sx={{
                                  opacity: isOrderedHovered[8] ? "1" : "0",
                                  fontSize: "12px",
                                  transition:
                                    "opacity 0.5s ease-in-out, font-size 0.5s ease-in-out",
                                }}
                              >
                                We make custom ERP/CRM development, which we
                                develop and deliver for your business as per
                                requirements and to help you grow your business
                                exponentially by automating all your recurring
                                tasks.
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: "10px",
                                fontSize: "14px",
                              }}
                            >
                              EXPLORE MORE <ArrowRightAltIcon />{" "}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          height: "100%",
                          width: "50%",
                          backgroundColor: "#152E3A",
                          color: "white",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundImage: `url(${futuristicCity})`,
                        }}
                      ></Box>
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Box
                      onMouseLeave={() => setonMouseLeave(9)}
                      onMouseEnter={() => setonMouseEnter(9)}
                      sx={{
                        height: "345px",
                        overflow: "hidden",
                        display: "flex",
                      }}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          width: "50%",
                          backgroundColor: "#152E3A",
                          color: "white",
                        }}
                      >
                        <Box
                          className=""
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "inherit",
                            paddingLeft: "20px",
                          }}
                        >
                          <Box sx={{ paddingTop: "20px" }}>
                            <img src={infoIcon} alt="" srcSet="" />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            <Box
                              sx={{
                                position: "relative",
                                bottom: isOrderedHovered[9] ? "10%" : "-65%",
                                transition:
                                  "bottom 0.5s ease-in-out, opacity 0.5s ease-in-out",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: "'Bebas Neue', sans-serif",
                                  fontSize: "28px",
                                  transition: "font-size 0.5s ease-in-out",
                                }}
                              >
                                CRM/ERP
                              </Typography>
                              <Box
                                sx={{
                                  opacity: isOrderedHovered[9] ? "1" : "0",
                                  fontSize: "12px",
                                  transition:
                                    "opacity 0.5s ease-in-out, font-size 0.5s ease-in-out",
                                }}
                              >
                                We make custom ERP/CRM development, which we
                                develop and deliver for your business as per
                                requirements and to help you grow your business
                                exponentially by automating all your recurring
                                tasks.
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: "10px",
                                fontSize: "14px",
                              }}
                            >
                              EXPLORE MORE <ArrowRightAltIcon />{" "}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          height: "100%",
                          width: "50%",
                          backgroundColor: "#152E3A",
                          color: "white",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundImage: `url(${sem})`,
                        }}
                      ></Box>
                    </Box>
                  </Grid>
                </Grid>
              )}
              <div
                style={{
                  textAlign: "end",
                  color: "white",
                  margin: "0 1em",
                  fontSize: "1.5em",
                  cursor: "pointer", // Add cursor pointer to indicate clickable element
                }}
                onClick={handleShowMore}
              >
                {showMore ? "show less" : "show more"}
              </div>
            </Box>
          </Box>
        </Box>

        <OurClient bg="tranparent" />

        <Box
        // sx={{
        //   paddingLeft: "163px",
        //   paddingRight: "163px",
        //   paddingTop: "100px",
        //   background: "#0B1D26",
        // }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <SuperHeadingText text="Media"></SuperHeadingText>
              <CustomText
                text="We’re trusted by some of the world’s most recognizable brands."
                lineHeight="25px"
                size="1em"
              ></CustomText>
            </Box>
            <Box className="slider-avinash" sx={{ width: "100%" }}>
              <Slider {...settings}>
                <div>
                  <img src={slider1} alt="" srcSet="" />
                </div>
                <div>
                  <img src={slider2} alt="" srcSet="" />
                </div>
                <div>
                  <img src={slider3} alt="" srcSet="" />
                </div>
                <div>
                  <img src={slider4} alt="" srcSet="" />
                </div>
                <div>
                  <img src={slider5} alt="" srcSet="" />
                </div>
              </Slider>
            </Box>
            <Box></Box>
          </Box>
        </Box>

        <NewsLetter />
        <Footer></Footer>
      </Box>
    </>
  );
};

export default TechHomeInto;
