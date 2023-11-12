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
    img: imgAPI.maskulino[6],
    title: 'LearnSelf24-learning website',
    link: 'https://visionary-strudel-f22b39.netlify.app/',
    size: 'long',
    category: 'cat1'
  },
  {
    img: imgAPI.maskulino[7],
    title: 'Movie~Flix',
    link: 'https://movieflixpro.netlify.app/',
    size: 'long',
    category: 'cat2'
  },
  {
    img: imgAPI.maskulino[5],
    title: 'QUIZ CRACKERS',
    link: 'https://quiz-app-crackers.netlify.app/',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.maskulino[9],
    title: 'Bike Club-Bike service station',
    link: 'https://bike-club-49a1f.web.app/',
    size: 'long',
    category: 'cat1'
  },
  {
    img: imgAPI.maskulino[4],
    title: 'Shopping-Cart',
    link: 'https://dreamy-begonia-b86fb7.netlify.app/',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.maskulino[8],
    title: 'SPACE-X',
    link: 'https://lucky-jelly-fa082b.netlify.app/',
    size: 'long',
    category: 'cat2'
  },

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
            onClick={() => filterChildren('cat1')}
            className={filter === 'cat1' ? classes.selected : ''}
          >
            Reactjs
          </Button>
          <Button
            onClick={() => filterChildren('cat2')}
            className={filter === 'cat2' ? classes.selected : ''}
          >
            Graphql
          </Button>
          {/* <Button
            onClick={() => filterChildren('cat3')}
            className={filter === 'cat3' ? classes.selected : ''}
          >
            Category 3
          </Button> */}
          {/* <Button
            onClick={() => filterChildren('cat4')}
            className={filter === 'cat4' ? classes.selected : ''}
          >
            Category 4
          </Button> */}
          {/* <Button
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
                  key={index.toString()}
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
                      link={item.link}
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
                    key={index.toString()}
                  >
                    <ImageThumbCard
                      img={item.img}
                      title={item.title}
                      link={item.link}
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
