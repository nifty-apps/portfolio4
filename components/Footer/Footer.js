import React from "react";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { useTranslation } from "next-i18next";
import logo from "~/public/images/aalogo.png";
import brand from "~/public/text/brand";
import { useText } from "~/theme/common";
import useStyles from "./footer-style";
import ContactForm from "../Contact/Form";

function Footer() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation("common");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid
          container
          spacing={6}
          direction={isMobile ? "column-reverse" : "row"}
        >
          <Grid item xs={12} md={5}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={100}
              delay={200}
              duration={0.3}
            >
              <div>
                <div className={classes.logo}>
                  <img src={logo} alt="logo" />
                  <Typography variant="h3" className={text.title}>
                    {brand.maskulino.name}
                  </Typography>
                  <Typography variant="h4" className={text.subtitle}>
                    {brand.maskulino.title}
                  </Typography>
                </div>
                <div className={classes.socmed}>
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
                      <i className={cx("ion-logo-facebook", classes.fb)} />
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
                      <i className={cx("ion-logo-twitter", classes.tw)} />
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
                      <i className={cx("ion-logo-linkedin", classes.in)} />
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
                <div className={classes.contact}>
                  <Typography className={text.paragraph}>
                    {t("maskulino-landing.footer_contact")}
                    <br />
                    +880 178 567 6641
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography className={text.paragraph}>
                    {t("maskulino-landing.footer_hello")}
                    <br />
                    alaminkhan6203@gmail.com
                  </Typography>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} md={7}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInRightShort"
              offset={100}
              delay={200}
              duration={0.3}
            >
              <div>
                <ContactForm />
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
