import { makeStyles } from "tss-react/mui";

const timelineStyles = makeStyles({ uniqId: "timeline" })(
  (theme, _params, classes) => ({
    root: {
      position: "relative",
      "& .MuiContainer-root": {
        [theme.breakpoints.up("md")]: {
          maxWidth: 1280,
          padding: 0,
        },
      },
      [theme.breakpoints.down("lg")]: {
        paddingTop: theme.spacing(5),
      },
    },
    nameDeco: {
      margin: 0,
      padding: 0,
      transform: "rotate(-90deg)",
      transformOrigin: "top center",
      letterSpacing: -10,
      position: "absolute",
      fontWeight: theme.typography.fontWeightRegular,
      textTransform: "uppercase",
      color: theme.palette.common.black,
      top: theme.spacing(30),
      left: theme.spacing(-5),
      fontSize: 72,
      opacity: 0.1,
      zIndex: 20,
    },
    title: {
      textTransform: "uppercase",
      marginBottom: theme.spacing(3),
      color: theme.palette.secondary.main,
    },
    time: {},
    history: {
      borderLeft: "2px solid",
      position: "relative",
      padding: theme.spacing(5, 4, 10),
      borderImageSource: `linear-gradient(190deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      borderImageSlice: 1,
      borderTop: 0,
      borderRight: 0,
      borderBottom: 0,
      [theme.breakpoints.down("lg")]: {
        border: "none",
      },
      "& h3": {
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      },
      "& p": {
        [theme.breakpoints.down("md")]: {
          display: "inline-block",
          marginRight: theme.spacing(2),
        },
      },
      "& ul": {
        margin: 0,
        padding: 0,
        "& li": {
          listStyle: "none",
          marginBottom: theme.spacing(5),
          position: "relative",
          [theme.breakpoints.down("lg")]: {
            paddingLeft: 45,
          },
          "&:last-child": {
            marginBottom: 0,
          },
          "&:before": {
            content: '""',
            borderRadius: "50%",
            width: 24,
            height: 24,
            background:
              theme.palette.mode === "dark"
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
            border: `4px solid ${
              theme.palette.mode === "dark"
                ? theme.palette.background.default
                : theme.palette.background.paper
            }`,
            position: "absolute",
            left: -45,
            top: 4,
            [theme.breakpoints.down("lg")]: {
              left: 0,
            },
          },
          [`& .${classes.time}`]: {
            color: theme.palette.text.secondary,
          },
        },
      },
    },
    progress: {
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(5, 0, 10),
      },
      "& ul": {
        margin: 0,
        padding: 0,
        "& li": {
          listStyle: "none",
          marginBottom: theme.spacing(5),
          "&:last-child": {
            marginBottom: 0,
          },
          "& h6": {
            fontWeight: theme.typography.fontWeightBold,
          },
        },
      },
    },
    textIcon: {
      marginBottom: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      "& i": {
        color: theme.palette.text.secondary,
        fontSize: 28,
      },
      "& img": {
        width: 32,
        height: 32,
      },
      "& h6": {
        marginLeft: theme.spacing(),
      },
    },
    progressBg: {
      borderRadius: 10,
      background: theme.palette.divider,
      height: 10,
    },
    bar: {
      borderRadius: 10,
      background:
        theme.palette.mode === "dark"
          ? theme.palette.primary.light
          : theme.palette.primary.main,
    },
  })
);

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default timelineStyles;
