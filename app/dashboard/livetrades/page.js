"use client";
import Holder from "../../../components/dashboard/Livetrades/Holder";
import Livetrade from "../../../components/dashboard/Livetrades/Livetrade";
import AdvancedCh from "../../../components/dashboard/Livetrades/AdvancedCh";
import TradingView from "../../../components/dashboard/Livetrades/TradingView";
import ActiveTraders from "../../../components/dashboard/Livetrades/ActiveTraders";
import AccountSect from "../../../components/dashboard/Livetrades/AccountSect";
import { motion as m } from "framer-motion";
function Livetrades() {
  return (
    <m.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      transition={{ type: "spring" }}
      className="max-w-[100vw]"
    >
      <Livetrade />
      <AdvancedCh />
      <AccountSect />
      <Holder />
      <TradingView />
      <ActiveTraders />
    </m.div>
  );
}

export default Livetrades;
