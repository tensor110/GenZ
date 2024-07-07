import React from "react";
import "../../styles/Glassmorph.css";
import FooterLeft from "../../components/Footer/FooterLeft";
import MidFooter from "../../components/Footer/MidFooter";
import FooterRight from "../../components/Footer/FooterRight";
import FooterDown from "../../components/Footer/FooterDown";

function Footer() {
  return (
    <div className="mx-[4%] px-[6%] py-[3%] flex flex-col gap-16 glassmorph rounded-3xl">
      <div className="flex justify-between gap-[4%]">
        <FooterLeft />
        <MidFooter />
        <FooterRight />
      </div>
      <FooterDown />
    </div>
  );
}

export default Footer;
