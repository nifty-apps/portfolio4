import { makeStyles } from "tss-react/mui";
import { alpha } from "@mui/material/styles";

const bannerStyles = makeStyles({ uniqId: "banner" })(
  (theme, _params, classes) => ({
    root: {
      display: "block",
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(10),
        "& > div": {
          padding: 0,
        },
      },
      "& .MuiContainer-root": {
        padding: 0,
      },
    },
    cover: {
      position: "absolute",
      clip: "rect(auto,auto, auto, auto)",
      top: 0,
      left: 0,
      height: "100%",
      width: 1080,
      overflow: "hidden",
      zIndex: 1,
    },
    figure: {
      display: "block",
      width: "100%",
      height: "100%",
      "& img": {
        position: "fixed",
        [theme.breakpoints.down("md")]: {
          left: "-50%",
        },
      },
    },
    overlay: {
      backgroundImage: `linear-gradient(120deg, ${
        theme.palette.mode === "dark"
          ? theme.palette.secondary.dark
          : theme.palette.secondary.main
      }, ${
        theme.palette.mode === "dark"
          ? theme.palette.primary.dark
          : theme.palette.primary.main
      })`,
      backdropFilter: "saturate(180%) blur(100px)",
      opacity: 0.75,
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
    },
    banner: {
      position: "relative",
      padding: theme.spacing(10, 3, 0),
      background: alpha(theme.palette.primary.main, 0.5),
      backdropFilter: "saturate(180%) blur(10px)",
      color: theme.palette.common.white,
      height: 517,
      [theme.breakpoints.down("lg")]: {
        height: 420,
      },
      [theme.breakpoints.down("md")]: {
        height: 400,
      },
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(10),
      },
    },
    text: {
      position: "relative",
      maxWidth: 720,
      zIndex: 1,
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
      "& h4, & h2, & h5": {
        position: "relative",
        padding: theme.spacing(1, 2),
        display: "inline-block",
        "& span": {
          zIndex: 1,
          position: "relative",
        },
      },
      "& h2": {
        color: theme.palette.secondary.light,
      },
    },
    socmed: {
      position: "relative",
      marginBottom: theme.spacing(3),
      background: alpha(theme.palette.primary.main, 0.5),
      backdropFilter: "saturate(180%) blur(10px)",
      padding: theme.spacing(1, 2),
      display: "inline-block",
      marginTop: 10,
      "& button": {
        zIndex: 1,
        margin: theme.spacing(),
        color: theme.palette.primary.dark,
        width: 36,
        height: 36,

        "& i": {
          color: alpha(theme.palette.common.white, 0.75),
        },
      },
      "& i": {
        fontSize: 24,
      },
    },
    bar: {},
    settingIcon: {
      position: "absolute",
      top: theme.spacing(10),
      right: theme.spacing(10),
      zIndex: 1,
      "& svg": {
        fill: theme.palette.common.white,
      },
    },
    mobileMenu: {
      marginRight: theme.spacing(),
      [`& .${classes.bar}`]: {
        backgroundColor: theme.palette.text.secondary,
        "&:after, &:before": {
          backgroundColor: theme.palette.text.secondary,
        },
      },
    },
    mobileNav: {
      width: 240,
      background: theme.palette.background.default,
      padding: theme.spacing(10, 2, 4),
    },
    menuList: {
      textTransform: "capitalize",
    },
    download: {
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white,
      fontSize: 14,
      padding: theme.spacing(0.5, 2),
      marginRight: theme.spacing(3),
    },
  })
);

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default bannerStyles;
