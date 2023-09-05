import Slider from "../components/main/sliders/Sliders";
import TradingView from "../components/main/tradingView/tradingView";
import GettingStarted from "../components/main/gettingStarted/GettingStarted";
import WhatNRating from "../components/main/whatnrating/WhatNRating";
import Sponsors from "../components/main/sponsors/Sponsors";
import AboutUs from "../components/main/AboutUs/AboutUs";
import Wcy from "../components/main/whyUs/Wcy";
import Testimonials from "../components/main/Testimonials/Testimonials";
import ImageUsing from "../components/main/toUse/ImageUsing";
import FAQ from "../components/main/Faq/FAQ";
import Footer from "../components/main/footer/Footer";
import Commodities from "../components/main/commodities/Commodities";
import MT from "../components/main/MetaTrader/MT";
import Stock from "../components/main/Stocks/Stocks";
import Navbar from "../components/main/navbars/Navbar";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full text-white z-30 ">
        <Navbar />
      </div>
      <main className=" w-full relative overflow-hidden">
        <div className="relative w-full  animate__animated animate__slideInUp">
          <Slider />
        </div>
        <div className="my-2">
          <TradingView />
        </div>

        <GettingStarted />
        <WhatNRating />
        <AboutUs />
        {/* <ImageUsing /> */}
        <MT />
        <Commodities />
        <Stock />
        <Sponsors />
        <Wcy />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
