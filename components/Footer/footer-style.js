import { makeStyles } from "tss-react/mui";

const footerStyles = makeStyles({ uniqId: "footer" })((theme) => ({
  root: {
    textAlign: "center",
    paddingBottom: theme.spacing(5),
  },
  decoration: {},
  logo: {
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
    },
    "& img": {
      // filter: "grayscale(1) contrast(0.5) brightness(1.5)",
      width: 80,
      marginBottom: theme.spacing(2),
    },
    "& h4": {
      textTransform: "uppercase",
    },
  },
  margin: {
    margin: theme.spacing(2),
  },
  socmed: {
    margin: theme.spacing(3, 0),
    "& button": {
      margin: theme.spacing(),
      width: 36,
      height: 36,
      "& i": {
        // color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
      },
    },
    "& i": {
      fontSize: 24,
    },
  },
  contact: {
    color: theme.palette.text.secondary,
  },
  divider: {
    margin: theme.spacing(1.5),
    border: "none",
    background: "none",
  },
  download: {
    marginBottom: theme.spacing(4),
    borderColor: theme.palette.text.secondary,
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: "#5f6163",
      transition: "all 0.3s linear",
      color: theme.palette.text.main,
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default footerStyles;
