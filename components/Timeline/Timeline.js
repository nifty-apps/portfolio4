import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import ScrollAnimation from "react-scroll-animation-wrapper";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { useText } from "~/theme/common";
import useStyles from "./timeline-style";
import brand from "~/public/text/brand";
import nodeJs from "~/public/images/logos/nodeJs.png";
import js from "~/public/images/logos/js.png";
import markUp from "~/public/images/logos/markup.png";
import db from "~/public/images/logos/db.png";
import framework from "~/public/images/logos/framework.png";
function Timeline() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();

  const { t } = useTranslation("common");

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [play, setPlay] = useState(false);

  const handlePlay = (visible) => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true);
      }, 500);
    }
  };

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            {!isMobile && (
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.maskulino.name}
              </Typography>
            )}
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography
                  variant="h5"
                  className={cx(classes.title, text.subtitle)}
                >
                  {t("maskulino-landing.timeline_experience")}
                </Typography>
                <ul>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography
                          variant="h3"
                          gutterBottom
                          className={text.subtitle2}
                        >
                          Frontend Developer
                        </Typography>
                        <Typography gutterBottom>
                          at Nifty IT Solution ltd.
                        </Typography>
                        <Typography className={classes.time}>
                          Sep 2023 - Present
                        </Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography
                          variant="h3"
                          gutterBottom
                          className={text.subtitle2}
                        >
                          Contributor
                        </Typography>
                        <Typography gutterBottom>at Dev Sonket</Typography>
                        <Typography className={classes.time}>
                          Sep 2023 - Present
                        </Typography>
                        <Typography className={classes.time}>
                          Part time hobby
                        </Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography
                  variant="h5"
                  className={cx(classes.title, text.subtitle)}
                >
                  {t("maskulino-landing.timeline_skill")}
                </Typography>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  delay={400}
                  duration={0.3}
                  afterAnimatedIn={handlePlay}
                >
                  <ul>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={markUp} className="w-full" />
                        <Typography variant="h6" className={text.subtitle2}>
                          Frontend Development Tools(Html, CSS)
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={js} className="w-full" />
                        <Typography variant="h6" className={text.subtitle2}>
                          Language (Javascript, Typescript)
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={framework} className="w-full" />
                        <Typography variant="h6" className={text.subtitle2}>
                          Framework (React, NextJS)
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 85 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={`${classes.textIcon} "w-10 h-10"`}>
                        <img src={nodeJs} className="w-full" />
                        <Typography variant="h6" className={text.subtitle2}>
                          Server (NodeJS, ExpressJS)
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 75 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={db} className="w-full" />
                        <Typography variant="h6" className={text.subtitle2}>
                          Database (MongoDB)
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                  </ul>
                </ScrollAnimation>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Timeline;
