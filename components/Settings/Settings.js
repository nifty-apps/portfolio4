import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LanguageSwitch from "../LangSwitch/Menu";
import useStyles from "../Header/header-style";
import i18nextConfig from "~/next-i18next.config";
import DarkModeIcon from "@mui/icons-material/DarkMode";

let themeType = "dark";
if (typeof Storage !== "undefined") {
  themeType = localStorage.getItem("luxiTheme") || "dark";
}

function Settings(props) {
  const [ctn, setCtn] = useState(null);
  const { classes, cx } = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDark, setDark] = useState(themeType === "dark");
  const { t, i18n } = useTranslation("common");

  const currentLocale = i18n.language;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  useEffect(() => {
    setCtn(document.getElementById("main-wrap"));
  });

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { invert } = props;
  return (
    <div className={classes.setting}>
      <ListItem>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item></Grid>
            <Grid item>
              <Switch
                checked={isDark}
                onChange={handleChangeMode}
                value={isDark}
                inputProps={{ "aria-label": "checkbox" }}
              />
            </Grid>
            <Grid item>
              <DarkModeIcon />
            </Grid>
          </Grid>
        </Typography>
      </ListItem>
    </div>
  );
}

Settings.propTypes = {
  toggleDark: PropTypes.func.isRequired,
  toggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Settings.defaultProps = {
  invert: false,
};

export default Settings;
