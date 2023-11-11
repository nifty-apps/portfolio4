import React, { useRef, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Carousel from "react-slick";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "next-i18next";
import { useText } from "~/theme/common";
import Title from "../Title";
import IconTextCard from "../Cards/IconText";
import useStyle from "./services-style";
import framework from "~/public/images/logos/framework.png";
import staticweb from "~/public/images/logos/static.png";
import next from "~/public/images/logos/next.png";
import server from "~/public/images/logos/nodeJs.png";
import api from "~/public/images/logos/api.png";

const services = [
  {
    icon: framework,
    name: "Reactive Design",
    desc: "I can provide reactive design for your website.",
  },
  {
    icon: staticweb,
    name: "Static Website",
    desc: "Get your static (HTML, CSS, JS) website from me.",
  },
  {
    icon: next,
    name: "Server rendered",
    desc: "Get a full stack or server rendered website from me.",
  },
  {
    icon: server,
    name: "Full stack",
    desc: "Get a full stack website with mongodb from me.",
  },
  {
    icon: api,
    name: "API Integration",
    desc: "Providing a through API integration with REST & GraphQL.",
  },
];

function Services() {
  const { classes, cx } = useStyle();
  const { classes: text } = useText();

  const lastSlide = Math.floor(services.length - 3);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("common");

  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (theme.direction === "rtl") {
    slider.current.slickGoTo(lastSlide);
  }

  return (
    <div className={classes.root}>
      <div className={classes.floatingTitle}>
        <Title>
          <strong>{t("maskulino-landing.services_title")}</strong>
        </Title>
        <Typography className={text.paragraph}>
          {t("maskulino-landing.services_desc")}
        </Typography>
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={cx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
            size="large"
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {services.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <IconTextCard
                  icon={item.icon}
                  text={item.name}
                  desc={item.desc}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
          <IconButton
            className={cx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
            size="large"
          >
            <i className="ion-ios-arrow-forward" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Services;
