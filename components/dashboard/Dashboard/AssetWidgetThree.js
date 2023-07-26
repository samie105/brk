import React from "react";
import { MiniChart, SymbolOverview } from "react-tradingview-embed";

export default function AssetWidgetThree() {
  return (
    <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
      <SymbolOverview
        widgetPropsAny={{
          symbols: [
            ["Apple", "AAPL|1D"],
            ["Google", "GOOGL|1D"],
            ["Microsoft", "MSFT|1D"],
            ["BINANCE:RNDRUSDT|1D"],
          ],
          chartOnly: false,
          width: "100%",
          height: 500,
          locale: "en",
          colorTheme: "light",
          autosize: false,
          showVolume: false,
          showMA: false,
          isTransparent: true,
          hideDateRanges: false,
          hideMarketStatus: false,
          hideSymbolLogo: false,
          scalePosition: "right",
          scaleMode: "Normal",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          fontSize: "10",
          noTimeScale: false,
          valuesTracking: "1",
          changeMode: "price-and-percent",
          chartType: "area",
          maLineColor: "#2962FF",
          maLineWidth: 1,
          maLength: 9,
          lineWidth: 2,
          lineType: 0,
          dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
        }}
      />
    </div>
  );
}