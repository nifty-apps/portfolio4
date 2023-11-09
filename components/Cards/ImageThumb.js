import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function ImageThumb(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const {
    img,
    title,
    description,
    technology,
    position,
    gitClientUrl,
    gitServerUrl,
    previewUrl,
    size,
    openPopup
  } = props;

  const setSize = sizePaper => {
    switch (sizePaper) {
      case 'short':
        return classes.short;
      case 'long':
        return classes.long;
      default:
        return classes.medium;
    }
  };
  return (
    <Paper className={cx(classes.imgThumb, setSize(size))}>
      <ButtonBase onClick={openPopup} title="View image">
        <div className={classes.figure}>
          <div className={classes.img} style={{ backgroundImage: `url(${img})` }} />
        </div>
      </ButtonBase>
      <div className={classes.detail}>
        <Typography variant="h6" className={text.subtitle}>{title}</Typography>
        <Typography variant="body1" className={text.description}>
          Description:
          <span style={{ margin: '4px' }}>{description.slice(0, 100)}</span>
        </Typography>
        <Typography style={{ marginTop: '10px' }} variant="body1" className={text.description}>
          Technologies:
          <span style={{ margin: '4px' }}>{technology}</span>
        </Typography>
        <Typography style={{ marginTop: '10px' }} variant="body1" className={text.description}>
          Position:
          <span style={{ margin: '4px' }}>{position}</span>
        </Typography>
        <div style={{ marginTop: '10px' }}>
          <Link href={gitClientUrl} target="_blank"> Client site</Link>
          <Link style={{ margin: '20px' }} href={gitServerUrl} target="_blank"> Server site</Link>
          <Link href={previewUrl} target="_blank">Live Link</Link>
        </div>
      </div>
    </Paper>
  );
}

ImageThumb.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  gitClientUrl: PropTypes.string.isRequired,
  gitServerUrl: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  openPopup: PropTypes.func,
};

ImageThumb.defaultProps = {
  openPopup: () => {}
};
