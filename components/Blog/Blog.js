import React, { useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useText } from '~/theme/common';
import Title from '../Title';
import BlogPostCard from '../Cards/BlogPost';
import useStyle from './blog-style';
import imgApi from '~/public/images/imgAPI';

const blogData = [
  {
    img: imgApi.photo[0],
    title: 'Explore the Power of SSR with Next.js',
    desc: 'Delivering smooth user experiences is essential in the fast-paced world…',
    link: 'https://medium.com/@pieash9/explore-the-power-of-server-side-rendering-with-next-js-5c1f0e6f2a9a',
  },
  {
    img: imgApi.photo[1],
    title: 'Static Typing for Safer Code',
    desc: 'One of TypeScript’s standout features that revolutionizes JavaScript development…',
    link: 'https://medium.com/@pieash9/static-typing-for-safer-code-effe6e16cc3b',
  },
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
    slidesToShow: 4,
    arrows: false,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
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
        <Link href="https://medium.com/@pieash9"><Button className={classes.link} color="secondary">https://medium.com/@pieash9</Button></Link>
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
              <div key={index.title} className={classes.item}>
                <BlogPostCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  link={item.link}
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
