import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import SideNavigation from "../SideNavigation";
import SideNavigationIcon from "../SideNavigation/SideNavigationIcon";
import brand from "~/public/text/brand";
import { useText } from "~/theme/common";
import ui from "~/theme/config";
import Settings from "../Settings";
import Animation from "./Hero/Animation";
import AnimationSlideshow from "./Hero/AnimationSlideshow";
import Slideshow from "./Hero/Slideshow";
import VideoHero from "./Hero/Video";
import useStyles from "./banner-style";
import AnchorLink from "react-anchor-link-smooth-scroll";

function BannerNav(props) {
  const theme = useTheme();
  const { classes: text } = useText();
  const { classes } = useStyles();
  const [bannerHero] = useState("animation");

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { t } = useTranslation("common");
  const { onToggleDark, onToggleDir } = props;

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={ui.navigation === "icon" ? 1 : 2} xs={12}>
            {!isTablet && (
              <Fragment>
                {ui.navigation === "icon" && <SideNavigationIcon />}
                {ui.navigation === "text" && <SideNavigation />}
              </Fragment>
            )}
          </Grid>
          <Grid item lg={ui.navigation === "icon" ? 11 : 10} xs={12}>
            <div className={classes.banner}>
              <div className={classes.cover}>
                <div className={classes.figure}>
                  {bannerHero === "image" && (
                    <div
                      className={classes.img}
                      style={{
                        backgroundImage: `url(${brand.maskulino.cover})`,
                      }}
                    />
                  )}
                  {bannerHero === "video" && <VideoHero />}
                  {bannerHero === "animation" && <Animation />}
                  {bannerHero === "animation-slide" && <AnimationSlideshow />}
                  {bannerHero === "slideshow" && <Slideshow />}
                  <img src={brand.maskulino.cover} alt="cover" />
                </div>
              </div>
              {!isTablet && (
                <div className={classes.settingIcon}>
                  <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
                </div>
              )}
              <div className={classes.text}>
                <Typography variant="h4" className={text.title2}>
                  <span>{t("maskulino-landing.banner_greeting")}</span>
                </Typography>
                <Typography variant="h2" className={text.title}>
                 
                   
                    <span> {t("maskulino-landing.banner_me")}&nbsp;Al Amin Khan,&nbsp;</span><br/>
                    <span className={text.titleV2}>{brand.maskulino.title}</span>
                 
                </Typography>
                {!isMobile && (
                  <Fragment>
                    <Typography variant="h5" className={text.subtitle2}>
                      <span>{t("maskulino-landing.banner_desc")}</span>
                    </Typography>
                    <div className={classes.socmed}>
                      <a
                        href="https://docs.google.com/document/d/1AabYcK1XUnV3xgopThy9LAJqhFJ2BZlPAK5K7K_em50/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <Button
                          variant="outlined"
                          className={classes.download}
                          component="a"
                        >
                          Download CV
                        </Button>
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=100008742093722"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <IconButton
                          aria-label="Delete"
                          className={classes.margin}
                          size="small"
                        >
                          <i className="ion-logo-facebook" />
                        </IconButton>
                      </a>

                      <a
                        href="https://twitter.com/AlAminKhan6203"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <IconButton
                          aria-label="Delete"
                          className={classes.margin}
                          size="small"
                        >
                          <i className="ion-logo-twitter" />
                        </IconButton>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/alaminkhan03/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <IconButton
                          aria-label="Delete"
                          className={classes.margin}
                          size="small"
                        >
                          <i className="ion-logo-linkedin" />
                        </IconButton>
                      </a>
                      <a
                        href="https://github.com/AlAminKh03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <IconButton
                          aria-label="Delete"
                          className={classes.margin}
                          size="small"
                        >
                          <i className="ion-logo-github" />
                        </IconButton>
                      </a>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

BannerNav.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default BannerNav;
