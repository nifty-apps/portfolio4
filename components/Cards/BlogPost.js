import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

function BlogPost(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const {
    img,
    title,
    desc,
    link
  } = props;
  const { t } = useTranslation('common');

  return (
    <Paper className={classes.post}>
      <figure>
        <img src={img} alt="thumb" />
      </figure>
      <div className={classes.text}>
        <Typography variant="h5" className={text.subtitle2}>{title}</Typography>
        <Typography display="block" component="p" className={text.paragraph}>{desc}</Typography>
      </div>
      <Link
        href={link}
        target="_blank"
        color="secondary"
        className={classes.readmore}
        classes={{
          root: classes.rootReadmore,
          text: classes.textReadmore
        }}
      >
        {t('maskulino-landing.read_more')}
      </Link>
    </Paper>
  );
}

BlogPost.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogPost;
