import React, { Fragment, useState, useEffect } from 'react';
import Lightbox from 'react-18-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import ImageThumbCard from '../Cards/ImageThumb';
import Title from '../Title';
import useStyle from './gallery-style';

const portfolio = [
  {
    img: imgAPI.maskulino[3],
    title: 'Shutter Academy',
    description:
      'The system enables students to browse, select, and pay for photography classes, while instructors can manage class details and receive feedback from admins for approval. Admins oversee class and user management, assign roles, and facilitate communication among all users.',
    technology:
      'React.js, Vite, Tailwinds, DaisyUI, React DaisyUI, Firebase Authentication, Express.js, MongoDB',
    position: 'Full-stack Developer',
    gitClientUrl: 'https://github.com/pieash9/shutter-academy-client',
    gitServerUrl: 'https://github.com/pieash9/shutter-academy-server',
    previewUrl: 'https://shutter-academy-f96fa.web.app/',
    size: 'long',
    category: 'react'
  },
  {
    img: imgAPI.maskulino[1],
    title: 'Battle Zone Toys',
    description:
      'This website offers a diverse collection of action figures and toys for exploration and contribution. Users can add, manage, and search toys, while enjoying secure authentication and personalized experiences.',
    technology:
      'React.js, Vite, Tailwinds, DaisyUI, React DaisyUI, Firebase Authentication, Express.js, MongoDB',
    position: 'Full-stack Developer',
    gitClientUrl: 'https://github.com/pieash9/battle-zone-toys-client',
    gitServerUrl: 'https://github.com/pieash9/battle-zone-toys-server',
    previewUrl: 'https://battle-zone-toys.web.app/',
    size: 'long',
    category: 'react'
  },
  {
    img: imgAPI.maskulino[2],
    title: 'Italian Chef Hub',
    description:
      'An online service providing users with the best Italian recipes, including recipe details accessible through login. Users can also save favorite recipes and explore chef details, experience, and recipe count',
    technology:
      'React.js, Vite, Tailwinds, DaisyUI, Firebase Authentication, Express.js, MongoDB, Vercel etc',
    position: 'Full-stack Developer',
    gitClientUrl: 'https://github.com/pieash9/italian-chef-hub-client',
    gitServerUrl: 'https://github.com/pieash9/italian-chef-hub-server',
    previewUrl: 'https://dreamy-sunshine-c64edf.netlify.app/',
    size: 'long',
    category: 'react'
  },
  {
    img: imgAPI.maskulino[4],
    title: 'HatMart (Team project)',
    description:
      'Easy online grocery shopping with advanced search, filters, product reviews, and responsive design.  Multiple payment options, delivery choices, and order tracking for a convenient and secure checkout. Empowers administrators with coupon management, a comprehensive dashboard (user and admin specific).',
    technology:
      'Next.js, MongoDB, Mongoose, Tailwind CSS, Express.js, Firebase, Vercel, Stripe, JSON Web Token',
    position: 'Full-stack Developer',
    gitClientUrl: 'https://github.com/SagorAhamed251245/HatMart_client',
    gitServerUrl: 'https://github.com/SagorAhamed251245/HatMart_server',
    previewUrl: 'https://hat-mart-client.vercel.app/',
    size: 'long',
    category: 'next'
  },
  // {
  //   img: imgAPI.maskulino[10],
  //   title: 'Aenean facilisis vitae purus',
  //   link: 'linkofthisitem.com',
  //   size: 'short',
  //   category: 'cat2'
  // },
  // {
  //   img: imgAPI.maskulino[11],
  //   title: 'Aenean facilisis vitae purus',
  //   link: 'linkofthisitem.com',
  //   size: 'short',
  //   category: 'cat3'
  // },
  // {
  //   img: imgAPI.maskulino[12],
  //   title: 'Aenean facilisis vitae purus',
  //   link: 'linkofthisitem.com',
  //   size: 'short',
  //   category: 'cat1'
  // },
  // {
  //   img: imgAPI.maskulino[14],
  //   title: 'Aenean facilisis vitae purus',
  //   link: 'linkofthisitem.com',
  //   size: 'short',
  //   category: 'cat2'
  // },
  // {
  //   img: imgAPI.maskulino[13],
  //   title: 'Aenean facilisis vitae purus',
  //   link: 'linkofthisitem.com',
  //   size: 'long',
  //   category: 'cat2'
  // },
];

function Gallery() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { classes } = useStyle();
  const { t } = useTranslation('common');
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all');

  // Image Gallery
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setData(portfolio);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  const filterChildren = name => {
    if (isDesktop) {
      setData([]);
    }
    setTimeout(() => {
      if (name !== 'all') {
        const filteredData = portfolio.filter(item => item.category === name);
        setData(filteredData);
        setFilter(name);
      } else {
        setData(portfolio);
        setFilter('all');
      }
    }, 1);
  };

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + data.length - 1) % data.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + data.length + 1) % data.length);
  }

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  return (
    <div className={classes.root}>
      {open && (
        <Lightbox
          mainSrc={data[photoIndex].img}
          nextSrc={data[(photoIndex + 1) % data.length].bg || data[(photoIndex + 1) % data.length].logo}
          prevSrc={data[(photoIndex + 1) % data.length].logo || null}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <Container>
        <Title>
          {t('maskulino-landing.gallery_title')}
          <strong>
            {t('maskulino-landing.gallery_titleBold')}
          </strong>
        </Title>
        <div className={classes.filter}>
          <Button
            onClick={() => filterChildren('all')}
            className={filter === 'all' ? classes.selected : ''}
          >
            All
          </Button>
          <Button
            onClick={() => filterChildren('react')}
            className={filter === 'react' ? classes.selected : ''}
          >
            React.JS
          </Button>
          <Button
            onClick={() => filterChildren('next')}
            className={filter === 'next' ? classes.selected : ''}
          >
            Next.JS
          </Button>
          {/* <Button
            onClick={() => filterChildren('cat3')}
            className={filter === 'cat3' ? classes.selected : ''}
          >
            Category 3
          </Button>
          <Button
            onClick={() => filterChildren('cat4')}
            className={filter === 'cat4' ? classes.selected : ''}
          >
            Category 4
          </Button>
          <Button
            onClick={() => filterChildren('cat5')}
            className={filter === 'cat5' ? classes.selected : ''}
          >
            Category 5
          </Button> */}
        </div>
        {!isTablet ? (
          <Fragment>
            <div className={classes.massonry}>
              {data.map((item, index) => (
                <div
                  className={classes.item}
                  key={item.title}
                  id={index.toString()}
                >
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-50}
                    delay={200 + (100 * index)}
                    duration={0.3}
                  >
                    <ImageThumbCard
                      img={item.img}
                      title={item.title}
                      description={item.description}
                      technology={item.technology}
                      position={item.position}
                      gitClientUrl={item.gitClientUrl}
                      gitServerUrl={item.gitServerUrl}
                      previewUrl={item.previewUrl}
                      size={item.size}
                      openPopup={() => showPopup(index)}
                    />
                  </ScrollAnimation>
                </div>
              ))}
            </div>
            {data.length < 1 && <Typography variant="button" component="p" align="center">{t('maskulino-landing.gallery_nodata')}</Typography>}
          </Fragment>
        ) : (
          <Fragment>
            {data.length < 1 && <Typography variant="button" component="p" align="center">{t('maskulino-landing.gallery_nodata')}</Typography>}
            {data.length > 0 && (
              <Carousel {...settings}>
                {data.map((item, index) => (
                  <div
                    className={classes.itemCarousel}
                    key={item.title}
                  >
                    <ImageThumbCard
                      img={item.img}
                      title={item.title}
                      description={item.description}
                      technology={item.technology}
                      position={item.position}
                      gitClientUrl={item.gitClientUrl}
                      gitServerUrl={item.gitServerUrl}
                      previewUrl={item.previewUrl}
                      size={item.size}
                      openPopup={() => showPopup(index)}
                    />
                  </div>
                ))}
              </Carousel>
            )}
          </Fragment>
        )}
      </Container>
    </div>
  );
}

export default Gallery;
