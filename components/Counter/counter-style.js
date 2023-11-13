import { makeStyles } from "tss-react/mui";

const counterStyles = makeStyles({ uniqId: "counter" })((theme) => ({
  counterWrap: {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
    padding: theme.spacing(5, 0),
  },
  text: {
    display: "flex",
    alignItems: "center",

    "& img": {
      width: 120,
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  counterItem: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(5),
    },
    "& i": {
      marginRight: theme.spacing(2),
      fontSize: 40,
      lineHeight: "40px",
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
