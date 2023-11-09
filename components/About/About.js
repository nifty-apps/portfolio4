import React, { Fragment } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import brand from '~/public/text/brand';
// import { useText } from '~/theme/common';
import useStyles from './about-style';

function About() {
  const theme = useTheme();
  const { classes } = useStyles();
  // const { classes: text } = useText();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Container maxWidth={isMobile ? 'sm' : 'lg'}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12} />
          <Grid item lg={9} xs={12}>
            <div className={classes.about}>
              <div className={classes.reward}>
                {/* <div className={classes.item}>
                  <figure>
                    <img src="/images/maskulino/reward1.svg" alt="badge" />
                  </figure>
                  <Typography component="p" className={text.paragraph}>Special Mention</Typography>
                  <Typography variant="h5" className={text.subtitle}>Awards</Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    <img src="/images/maskulino/reward2.svg" alt="badge" />
                  </figure>
                  <Typography component="p" className={text.paragraph}>100k videos</Typography>
                  <Typography variant="h5" className={text.subtitle}>Subscriber</Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    <img src="/images/maskulino/reward3.svg" alt="badge" />
                  </figure>
                  <Typography component="p" className={text.paragraph}>Best Filmography</Typography>
                  <Typography variant="h5" className={text.subtitle}>Footage</Typography>
                </div> */}
              </div>
              {!isDesktop && (
                <Fragment>
                  <div className={classes.socmed}>
                    <Link href="https://www.facebook.com/cloud.pieash/" target="_blank">
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className="ion-logo-facebook" />
                      </IconButton>
                    </Link>
                    <Link href="https://www.instagram.com/cloud_pieash/" target="_blank">
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className="ion-logo-instagram" />
                      </IconButton>
                    </Link>
                    <Link href="https://twitter.com/Cloud_Pieash" target="_blank">
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className="ion-logo-twitter" />
                      </IconButton>
                    </Link>
                    <Link href="https://www.linkedin.com/in/md-pieash-ahmed-7a6830204/" target="_blank">
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className="ion-logo-linkedin" />
                      </IconButton>
                    </Link>
                  </div>
                  <Typography variant="h5">
                    {t('maskulino-landing.banner_desc')}
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
