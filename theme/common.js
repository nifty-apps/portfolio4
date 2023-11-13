import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
const textShine = keyframes`
0% {
    background-position: 0% 50%;
  }
  100%  {
    background-position: 100% 50%;
  }`;

export const useTextAlign = makeStyles({ uniqId: "textalign" })({
  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },
});

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useFloat = makeStyles({ uniqId: "float" })({
  floatLeft: {
    float: "left",
  },
  floatRight: {
    float: "right",
  },
});

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useText = makeStyles({ uniqId: "text" })((theme) => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 58,
    lineHeight: "50px",

    [theme.breakpoints.down("lg")]: {
      fontSize: 38,
      lineHeight: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      lineHeight: "44px",
    },
    "& span": {
      background: `linear-gradient(
    to right,
    #FBE7C6 20%,
    #B4F8C8 40%,
    #A0E7E5 60%,
    #E9A200 80%
  )`,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundSize: "500% auto",
      animation: `${textShine} 20s ease-in-out infinite alternate`,
    },
  },
  titleV2: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 38,
    lineHeight: "50px",

    [theme.breakpoints.down("lg")]: {
      fontSize: 38,
      lineHeight: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      lineHeight: "44px",
    },
    "& span": {
      background: `linear-gradient(
    to right,
    #bf5af2 20%,
    #007aff 40%,
    #5e5ce6 60%,
    #6d20fd 80%
  )`,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundSize: "500% auto",
      animation: `${textShine} 10s ease-in-out infinite alternate`,
    },
  },
  title2: {
    fontSize: 36,
    lineHeight: "56px",

    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("lg")]: {
      fontSize: 32,
      lineHeight: "48px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      lineHeight: "36px",
    },
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: "44px",

    [theme.breakpoints.down("lg")]: {
      fontSize: 24,
      lineHeight: "36px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      lineHeight: "28px",
    },
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: "32px",
    marginTop: 15,

    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
      lineHeight: "32px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "24px",
    },
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: "24px",
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: "24px",

    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "22px",
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useHidden = makeStyles({ uniqId: "hidden" })((theme) => ({
  lgDown: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mdDown: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  smDown: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  xsDown: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  lgUp: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  mdUp: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  smUp: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
