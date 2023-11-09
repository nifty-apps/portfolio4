import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import LinearProgress from '@mui/material/LinearProgress';
import { FaReact } from 'react-icons/fa';
import {
  BiLogoGraphql,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoTypescript
} from 'react-icons/bi';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './timeline-style';
import brand from '~/public/text/brand';

function Timeline() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();

  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [play, setPlay] = useState(false);

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
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
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('maskulino-landing.timeline_experience')}
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
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>ReactJS Developer </Typography>
                        <Typography variant="body1" style={{ fontWeight: 'bold' }} gutterBottom> At Nifty IT Solution Ltd</Typography>
                        <Typography gutterBottom>Internship</Typography>
                        <Typography className={classes.time}>September, 2023 - Present</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  {/* <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={100}
                      delay={300}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Senior UI/UX Designer</Typography>
                        <Typography gutterBottom>at Third Company</Typography>
                        <Typography className={classes.time}>2013 - 2015</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={200}
                      delay={400}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>UI/UX Designer</Typography>
                        <Typography gutterBottom>at Second Company</Typography>
                        <Typography className={classes.time}>2012 - 2013</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={300}
                      delay={500}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>UI/UX Designer</Typography>
                        <Typography gutterBottom>at First Company</Typography>
                        <Typography className={classes.time}>2009 - 2011</Typography>
                      </div>
                    </ScrollAnimation>
                  </li> */}
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('maskulino-landing.timeline_skill')}
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
                        <FaReact size={22} />
                        <Typography variant="h6" className={text.subtitle2}>ReactJS</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <BiLogoTypescript size={26} />
                        <Typography variant="h6" className={text.subtitle2}>TypeScript</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 70 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <BiLogoJavascript size={26} />
                        <Typography variant="h6" className={text.subtitle2}>JavaScript</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <BiLogoGraphql size={26} />
                        <Typography variant="h6" className={text.subtitle2}>GraphQL</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 70 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <BiLogoRedux size={26} />
                        <Typography variant="h6" className={text.subtitle2}>Redux</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 75 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
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
