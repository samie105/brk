import Holder from "../../../components/dashboard/Livetrades/Holder";
import Livetrade from "../../../components/dashboard/Livetrades/Livetrade";
import AdvancedCh from "../../../components/dashboard/Livetrades/AdvancedCh";
import TradingView from "../../../components/dashboard/Livetrades/TradingView";
import ActiveTraders from "../../../components/dashboard/Livetrades/ActiveTraders";
import AccountSect from "../../../components/dashboard/Livetrades/AccountSect";
function Livetrades() {
  return (
    <>
      <Livetrade />
      <AdvancedCh />
      <AccountSect />
      <Holder />
      <TradingView />
      <ActiveTraders />
    </>
  );
}

export default Livetrades;
