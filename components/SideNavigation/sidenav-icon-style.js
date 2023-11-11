import { makeStyles } from "tss-react/mui";

const sideNavIconStyles = makeStyles({ uniqId: "sidenav" })(
  (theme, _params, classes) => ({
    navMenu: {
      background:
        theme.palette.mode === "dark"
          ? theme.palette.primary.dark
          : theme.palette.primary.light,
    },
    logo: {
      display: "block",
      padding: theme.spacing(1.5, 0),
      position: "relative",
      textAlign: "center",
      "& img": {
        height: 59,
      },
    },
    menu: {
      margin: "0 auto",
      padding: theme.spacing(0.5),
      width: 80,
      "& ul": {
        padding: 0,
        margin: 0,
      },
    },
    icon: {
      display: "block",
      minWidth: 0,
      margin: "0 auto",
      transition: "all 0.3s ease-in",
      "& span": {
        fontSize: 36,
        color: theme.palette.text.primary,
      },
    },
    text: {
      transition: "all 0.3s cubic-bezier(0, 1.73, 1, 1.02)",
      color: theme.palette.secondary.light,
      visibility: "hidden",
      position: "absolute",
      left: -20,
      background: theme.palette.primary.main,
      textTransform: "capitalize",
      padding: theme.spacing(2, 2, 2, 10),
      zIndex: 2,
      whiteSpace: "nowrap",
      opacity: 0,
      "& span": {
        fontSize: 18,
        fontWeight: theme.typography.fontWeightBold,
      },
    },
    link: {
      background: "none !important",
      textAlign: "center",
      padding: theme.spacing(1),
      "&:before": {
        content: '""',
        transition: "all 0.75s ease-out",
        width: 0,
        height: 30,
        background: theme.palette.secondary.main,
        position: "absolute",
        left: -15,
        top: 20,
        opacity: 0,
        zIndex: 3,
      },
      "&:hover": {
        "&:before": {
          opacity: 1,
          width: 7,
        },
        [`& .${classes.icon}`]: {
          zIndex: 3,
          "& span": {
            color: theme.palette.secondary.light,
          },
        },
        [`& .${classes.text}`]: {
          visibility: "visible",
          opacity: 1,
          left: -16,
        },
      },
    },
  })
);

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sideNavIconStyles;
