import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import logo from '~/public/images/main.png';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import useStyles from './footer-style';
import ContactForm from '../Contact/Form';

function Footer() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
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
                <Button href="https://drive.google.com/u/1/uc?id=1PzfwY7cc0IRyKJO5LIITdn1E6BttZr25&export=download" target="_blank" variant="outlined" color="primary" className={classes.download} component="a">Download CV</Button>
                <div className={classes.contact}>
                  <Typography className={text.paragraph}>
                    {t('maskulino-landing.footer_contact')}
                    <br />
                    +880 16270 01665
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography className={text.paragraph}>
                    {t('maskulino-landing.footer_hello')}
                    <br />
                    pieash9@gmail.com
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
