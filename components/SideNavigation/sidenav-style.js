import { makeStyles } from "tss-react/mui";

const sideNavStyles = makeStyles({ uniqId: "sidenav" })(
  (theme, _params, classes) => ({
    navigation: {},
    fixed: {},
    navMenu: {},
    bar: {},
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
    logo: {
      display: "block",
      margin: theme.spacing(3, 0, 1),
      position: "relative",
      padding: theme.spacing(0, 2),
      "& img": {
        height: theme.spacing(10),
      },
    },
    text: {
      "& span": {
        fontSize: 18,
        textTransform: "Capitalize",
        fontWeight: theme.typography.fontWeightBold,
      },
    },
    link: {},
    active: {},
    menu: {
      "& ul": {
        padding: 0,
        margin: 0,
      },
      [`& .${classes.link}`]: {
        margin: theme.spacing(2, 0),
        paddingTop: 0,
        paddingBottom: 0,
        background: "none !important",
        "&:before": {
          content: '""',
          position: "absolute",
          left: theme.spacing(-2),
          top: 0,
          background:
            theme.palette.mode === "dark"
              ? theme.palette.primary.dark
              : theme.palette.primary.light,
          opacity: 1,
          height: "100%",
          width: 0,
          transition: "all 0.2s cubic-bezier(0, 0, 0.14, 0.97)",
        },
        "&:hover": {
          "&:before": {
            width: "110%",
          },
          [`& .${classes.text}`]: {
            color: theme.palette.secondary.main,
          },
        },
      },
      [`& .${classes.text}`]: {
        transition: "all 0.3s ease-in",
        position: "relative",
      },
    },
  })
);

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sideNavStyles;
