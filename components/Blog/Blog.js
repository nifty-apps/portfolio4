import React, { useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import Title from '../Title';
import BlogPostCard from '../Cards/BlogPost';
import useStyle from './blog-style';
import imgApi from '~/public/images/imgAPI';

const blogData = [
  {
    img: imgApi.photo[0],
    title: 'SitePoint',
    desc: 'SitePoint is an exclusive hub for web developers.It produces articles about developement and Responsive Web Design which are clearly classified and easily searched.'
  },
  {
    img: imgApi.photo[3],
    title: 'Next14',
    desc: 'Next14, a major independent specialised in integrated communication in marketing technologies.Passion, experience and transparency help us build long-lasting relationships with clients.'
  },
  {
    img: imgApi.photo[2],
    title: 'Simple Programmer',
    desc: 'Simple Programmer is a web development blog. Not only does the website talk about professional knowledge,but it also helps web developerssee everything in the tech world from a slightly different angle.'
  },
  {
    img: imgApi.photo[1],
    title: 'CSS-Tricks',
    desc: 'CSS-Tricks originally only talked about CSS and HTML as well. But when the author kicked off with JavaScript afterward,topics on JavaScript and JavaScript frameworks.'
  }
];

function Blog() {
  const slider = useRef(null);
  const { t } = useTranslation('common');

  const lastSlide = Math.floor(blogData.length - 2);

  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { classes, cx } = useStyle();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: isDesktop ? 4 : 1,
    arrows: false,
    pauseOnHover: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (theme.direction === 'rtl') {
    slider.current.slickGoTo(lastSlide);
  }

  return (
    <div className={classes.root}>
      <div className={classes.floatingTitle}>
        <Title>
          {t('maskulino-landing.blog_title')}
          &nbsp;
          <strong>
            {t('maskulino-landing.blog_titlebold')}
          </strong>
        </Title>
        <Typography gutterBottom className={text.paragraph}>
          {t('maskulino-landing.blog_desc')}
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
            {blogData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <BlogPostCard
                  img={item.img}
                  title={item.title}
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

export default Blog;
