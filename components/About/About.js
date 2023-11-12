import React, { Fragment } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import brand from "~/public/text/brand";
import { useText } from "~/theme/common";
import useStyles from "./about-style";
import BoltIcon from "@mui/icons-material/Bolt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function About() {
  const theme = useTheme();
  const { classes } = useStyles();
  const { classes: text } = useText();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("common");

  return (
    <div className={classes.root}>
      <Container maxWidth={isMobile ? "sm" : "lg"}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12} />
          <Grid item lg={9} xs={12}>
            <div>
              <Typography variant="h1" className={classes.title}>
                This developer
              </Typography>
              <Typography className={classes.svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 50"
                  width="220"
                  height="50"
                >
                  <path
                    d="M0 20
           C 30 5, 70 35, 90 25
           S 110 5, 160 15
           S 220 40, 250 5"
                    fill="none"
                    stroke="gray"
                    strokeWidth="3"
                  />
                </svg>
              </Typography>
            </div>
            <div className={classes.about}>
              <div className={classes.reward}>
                <div className={classes.item}>
                  <figure>
                    <BoltIcon className="icon" />
                  </figure>
                  <Typography component="p" className={classes.paragraph}>
                    Can adapt any technology quickly
                  </Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    <PsychologyIcon className="icon" />
                  </figure>
                  <Typography component="p" className={classes.paragraph}>
                    Can think & work under pressure
                  </Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    <AutoStoriesIcon className="icon" />
                  </figure>
                  <Typography component="p" className={classes.paragraph}>
                    {" "}
                    Reads lots of Docs & loves to apply them
                  </Typography>
                </div>
              </div>
              {!isDesktop && (
                <Fragment>
                  <div className={classes.socmed}>
                    <IconButton
                      aria-label="Delete"
                      className={classes.margin}
                      size="small"
                    >
                      <i className="ion-logo-facebook" />
                    </IconButton>
                    <IconButton
                      aria-label="Delete"
                      className={classes.margin}
                      size="small"
                    >
                      <i className="ion-logo-twitter" />
                    </IconButton>
                    <IconButton
                      aria-label="Delete"
                      className={classes.margin}
                      size="small"
                    >
                      <i className="ion-logo-google" />
                    </IconButton>
                    <IconButton
                      aria-label="Delete"
                      className={classes.margin}
                      size="small"
                    >
                      <i className="ion-logo-linkedin" />
                    </IconButton>
                  </div>
                  <Typography variant="h5">
                    {t("maskulino-landing.banner_desc")}
                  </Typography>
                </Fragment>
              )}
              <Paper elevation={0} className={classes.photo}>
                <figure>
                  <img src={brand.maskulino.avatar} alt="avatar" />
                </figure>
                <span className={classes.frame} />
              </Paper>
            </div>
            <div className={classes.line} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
