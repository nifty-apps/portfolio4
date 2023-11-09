import { makeStyles } from 'tss-react/mui';

const galleryStyles = makeStyles({ uniqId: 'gallery' })((theme, _params, classes) => ({
  root: {
    position: 'relative'
  },
  loaded: {},
  selected: {},
  filter: {
    position: 'relative',
    display: 'flex',
    overflow: 'auto',
    width: '100%',
    padding: theme.spacing(3, 0),
    '& > button': {
      background: 'transparent',
      borderRadius: 40,
      marginRight: theme.spacing(),
      border: '1px solid rgba(0, 0, 0, 0.87)',
      color: theme.palette.text.primary,
      whiteSpace: 'nowrap',
      minWidth: 100,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4),
        marginRight: theme.spacing(3),
      },
      [`&.${classes.selected}`]: {
        background: 'rgba(0, 0, 0, 0.87)',
        color: theme.palette.common.white
      }
    }
  },
  massonry: {
  display: 'grid',
  gridGap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns on medium screens
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns on large screens
  },
},

  item: {
    marginBottom: theme.spacing(4),
    breakInside: 'avoid',
    position: 'relative',
    paddingTop: 0,
  },
  itemCarousel: {
    position: 'relative'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default galleryStyles;
