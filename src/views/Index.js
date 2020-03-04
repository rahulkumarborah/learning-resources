import DemoFooter from "components/Footers/DemoFooter.js";
import IndexHeader from "components/Headers/IndexHeader.js";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Main from "./Main/Main";
/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// index sections
// import SectionButtons from "views/index-sections/SectionButtons.js";
// import SectionCarousel from "views/index-sections/SectionCarousel.js";
// import SectionDark from "views/index-sections/SectionDark.js";
// import SectionDownload from "views/index-sections/SectionDownload.js";
// import SectionExamples from "views/index-sections/SectionExamples.js";
// import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
// import SectionLogin from "views/index-sections/SectionLogin.js";
// import SectionNavbars from "views/index-sections/SectionNavbars.js";
// import SectionNavigation from "views/index-sections/SectionNavigation.js";
// import SectionNotifications from "views/index-sections/SectionNotifications.js";
// import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
// import SectionProgress from "views/index-sections/SectionProgress.js";
// import SectionTypography from "views/index-sections/SectionTypography.js";
// reactstrap components

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        {/* <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload /> */}
        <Main />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
