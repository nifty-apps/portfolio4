import React, { useState, useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.globe.min";
import useStyles from "./hero-style";

function Animation() {
  const { classes } = useStyles();

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setTimeout(() => {
        setVantaEffect(
          WAVES({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            // color: theme.palette.primary.main,
          })
        );
      }, 2000);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div className={classes.illustration} ref={myRef} />;
}

export default Animation;
