import { makeStyles } from 'tss-react/mui';

const cardsStyles = makeStyles({ uniqId: 'cards' })((theme, _params, classes) => ({
  iconText: {
    position: 'relative',
    textAlign: 'center',
    padding: theme.spacing(2),
    width: 240,
    height: 200,
    transition: 'all 0.3s ease-out',
    overflow: 'hidden',
    [theme.breakpoints.down(1500)]: {
      width: 200
    },
    '&:hover': {
      background: theme.palette.secondary.main,
      [`& .${classes.more}`]: {
        bottom: 0,
      },
      [`& .${classes.name}`]: {
        color: theme.palette.common.white,
        top: 0,
        '&:after': {
          width: 30,
        }
      },
      [`& .${classes.desc}`]: {
        top: 0,
        opacity: 1,
      },
      [`& .${classes.icon}`]: {
        transform: 'scale(0.5)',
        opacity: 0,
      }
    }
  },
  icon: {
    marginBottom: theme.spacing(2),
    transition: 'all 0.3s ease-out',
    '& span': {
      '&:before': {
        fontSize: 130,
      }
    }
  },
  more: {
    position: 'absolute',
    bottom: -90,
    width: '100%',
    padding: theme.spacing(3),
    left: 0,
    height: 200,
    transition: 'all 0.3s ease-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    transition: 'all 0.3s ease-out',
    marginBottom: theme.spacing(4),
    fontSize: 16,
    top: 30,
    position: 'relative',
    '&:after': {
      content: '""',
      width: 0,
      transition: 'all 0.5s ease-out',
      display: 'block',
      position: 'relative',
      margin: '0 auto',
      top: theme.spacing(1),
      borderTop: '2px solid #FFF',
    }
  },
  desc: {
    top: 60,
    position: 'relative',
    opacity: 0,
    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    color: theme.palette.common.white,
  },
  figure: {},
  img: {},
  imgThumb: {
    border: `8px solid ${theme.palette.background.paper}`,
    position: 'relative',
    [`& .${classes.figure}`]: {
      height: '100%',
      width: '100%',
      position: 'relative',
      margin: 0,
      overflow: 'hidden'
    },
    '& button': {
      textAlign: 'left',
      width: '100%',
      height: '100%'
    },
    [`& .${classes.img}`]: {
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      transform: 'scale(1.1)',
      transition: 'transform 0.2s ease-out',
    },
    '&:hover': {
      [`& .${classes.img}`]: {
        transform: 'scale(1)'
      },
      [`& .${classes.detail}`]: {
        opacity: 1,
        backgroundPosition: '60% 0',
        '& h6, & a': {
          transform: 'translate(0, 0)',
        }
      }
    }
  },
  detail: {
    position: 'absolute',
    transition: 'opacity 0.3s ease-out, background-position 3s ease-out',
    width: '100%',
    bottom: 0,
    opacity: 0,
    background: theme.palette.primary.main,
    backgroundSize: '300%',
    backgroundPosition: '0% 0',
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > *': {
      transition: 'all 0.4s ease-out'
    },
    '& h6': {
      position: 'relative',
      transform: 'translate(0, 10px)',
      marginBottom: theme.spacing(3),
      lineHeight: '36px'
    },
    '& a': {
      fontSize: 18,
      textDecoration: 'underline',
      color: theme.palette.secondary.light,
      position: 'relative',
      transform: 'translate(0, 30px)',
    },
  },
  short: {
    height: 240,
    [theme.breakpoints.down('sm')]: {
      height: 210
    },
    [`& .${classes.img}`]: {
      width: '100%'
    },
    '&:before': {
      width: 80,
      height: 80
    },
    [`& .${classes.detail}`]: {
      height: '100%',
    }
  },
  medium: {
    height: 320,
    [theme.breakpoints.down('md')]: {
      height: 210
    },
    [`& .${classes.img}`]: {
      width: '100%'
    },
    [`& .${classes.detail}`]: {
      height: '100%',
    }
  },
  long: {
    height: 480,
    [theme.breakpoints.down('md')]: {
      height: 210
    },
    [`& .${classes.img}`]: {
      height: '100%'
    },
    '&:before': {
      width: 190,
      height: 260
    },
    [`& .${classes.figure}`]: {
      '&:after': {
        width: 300,
        height: 300,
        left: -200,
        bottom: -120,
      }
    },
    [`& .${classes.detail}`]: {
      height: '70%',
    }
  },
  post: {
    height: 380,
    width: 256,
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      marginBottom: 12
    },
    '& figure': {
      margin: 0,
      width: '100%',
      height: 140,
      overflow: 'hidden',
      '& img': {
        width: '100%',
        minHeight: '100%'
      }
    }
  },
  text: {
    height: 200,
    padding: theme.spacing(3),
    '& h5': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(),
    },
    '& p': {
      color: theme.palette.text.secondary,
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical'
    }
  },
  readmore: {
    '& span': {
      fontWeight: theme.typography.fontWeightRegular
    },
    margin: theme.spacing(0, 3),
    lineHeight: '16px !important',
    textTransform: 'upperCase',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  textReadmore: {
    padding: '0px !important',
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
