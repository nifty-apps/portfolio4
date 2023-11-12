import { makeStyles } from "tss-react/mui";
const gold = "#D6BD96";

const aboutStyles = makeStyles({ uniqId: "about" })((theme) => ({
  root: {
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      "& .MuiContainer-root": {
        maxWidth: 1280,
        padding: 0,
      },
    },
    "& > div": {
      [theme.breakpoints.down("md")]: {
        padding: 0,
      },
    },
  },
  title: {
    color: "#eeeeee",
    fontSize: 32,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginRight: "24%",
    [theme.breakpoints.down("lg")]: {
      fontSize: 24,
    },
    "& > h2": {
      color: gold,
      fontSize: 40,
      fontWeight: 600,
      lineHeight: "60px",
      textTransform: "uppercase",
    },
  },
  svg: {
    fontSize: 32,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "26%",

    [theme.breakpoints.down("lg")]: {
      fontSize: 24,
    },
  },
  paragraph: {
    color: "#cccccc",
    fontSize: 18,
    fontWeight: 500,
    textAlign: "center",
  },

  about: {
    display: "flex",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
      "& > h5": {
        fontSize: 18,
        lineHeight: "28px",
        marginTop: theme.spacing(1),
        padding: theme.spacing(0, 2),
      },
    },
  },
  line: {
    height: 36,
    width: "calc(100% - 130px)",
    border: "4px solid",
    borderTop: 0,
    borderLeft: 0,
    borderImageSource: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderImageSlice: 1,
    position: "relative",
    marginTop: theme.spacing(-5),
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  reward: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0, 7, 0, 0),
    },
    [theme.breakpoints.down("md")]: {
      overflow: "auto",
    },
  },
  item: {
    textAlign: "center",
    color: "#EEEEEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    margin: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(4),
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    "& figure": {
      height: 80,
      width: 80,
      backgroundColor: "black",
      borderRadius: "50%",
      margin: theme.spacing(0, 0, 2),
      [theme.breakpoints.down("md")]: {
        height: 50,
        width: 50,
      },
      "& .icon": {
        fontSize: 80,
        padding: 10,
        [theme.breakpoints.down("md")]: {
          padding: 5,
          fontSize: 40,
        },
      },
      "& img": {
        height: "100%",
      },
    },
    "& p": {
      [theme.breakpoints.down("lg")]: {
        fontSize: 16,
      },
    },
    "& h5": {
      fontWeight: theme.typography.fontWeightMedium,
      textTransform: "uppercase",
      [theme.breakpoints.down("lg")]: {
        fontSize: 16,
      },
    },
  },
  photo: {
    position: "relative",
    marginTop: -200,
    background: theme.palette.common.white,
    width: 270,
    height: 335,
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      marginTop: -180,
      width: 200,
      minHeight: 200,
      height: "auto",
      marginLeft: "auto",
      marginRight: "auto",
    },
    "& figure": {
      margin: 0,
      "& img": {
        width: "100%",
        minHeight: "100%",
      },
    },
  },
  frame: {
    position: "absolute",
    width: "90%",
    left: "5%",
    top: theme.spacing(2),
    height: "105%",
    border: "2px solid",
    borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderImageSlice: 1,
    zIndex: 10,
  },
  socmed: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: `${theme.spacing(4)} auto`,
    maxWidth: 600,
    "& button": {
      margin: theme.spacing(1, 2),
      width: 36,
      height: 36,
      "& i": {
        color:
          theme.palette.mode === "dark"
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
      },
    },
    "& i": {
      fontSize: 22,
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default aboutStyles;
