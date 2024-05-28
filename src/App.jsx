import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LeftSection from "./components/LeftSection";
import Intro from "./components/Intro";
import RightSection from "./components/RightSection";
import Data2 from "./components/Data2.jsx";
import Footer from "./components/Footer.jsx";
import { enqueueSnackbar } from "notistack";

const App = () => {
  useEffect(() => {
    enqueueSnackbar("Click on the Images to Enlarge them!", {
      variant: "success",
    });
  }, []);
  var tempSwitch = true;
  return (
    <div className="relative">
      <Header></Header>
      <Hero></Hero>
      <Intro></Intro>
      {Data2.map((item) => {
        if (tempSwitch == true) {
          tempSwitch = false;
          return (
            <LeftSection heading={item.heading} image={item.image}>
              {item.descr}
            </LeftSection>
          );
        } else {
          tempSwitch = true;
          return (
            <RightSection heading={item.heading} image={item.image}>
              {item.descr}
            </RightSection>
          );
        }
      })}
      <Footer></Footer>
    </div>
  );
};

export default App;
