import React from "react";
import { Fade } from "react-awesome-reveal";
import WakeShakeHS from "./WakeShakeHS";
import OneTouchHS from "./OneTouchHS";
import WallpaperHS from "./WallpaperHS";
import WallpaperHS2 from "./WallpaperHS2";
import Footer from "../Reusable Components/Footer/Footer";

function HomeScreen() {
  return (
    <>
      <div>
        <Fade>
          <WakeShakeHS
            title="WAKE & SHAKE"
            info="Oreo Shake & the McFlurry for the win!"
            image="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F02%2Fmcdonalds-shamrock-shake-mcflurry-ice-cream-dessert-release-date-tw.jpg?w=960&cbr=1&q=90&fit=max"
            background="#D3E5CB"
            color="#1e3932"
          />
        </Fade>
      </div>

      <div>
        <Fade>
          <WallpaperHS />
        </Fade>
      </div>

      <Fade>
        <WallpaperHS2 />
      </Fade>

      <Fade>
        <OneTouchHS />
      </Fade>

      <Fade>
        <Footer />
      </Fade>
    </>
  );
}

export default HomeScreen;
