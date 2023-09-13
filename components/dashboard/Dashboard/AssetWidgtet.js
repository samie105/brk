"use client";
import Link from "next/link";
import React from "react";
import { MarketOverview } from "react-tradingview-embed";

export default function AssetWidgtet() {
  return (
    <div className="shadow[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg my-4 ">
      <div className="header p-5 flex w-full items-center justify-between">
        <h2 className="text-lg font-bold">My Assets</h2>
        <Link href="dashboard/deposits" passHref>
          {" "}
          <div>
            <button className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-500 rounded-full py-3 px-5 text-white font-bold text-xs md:text-sm">
              Deposit
            </button>
          </div>
        </Link>
      </div>
      <MarketOverview
        widgetPropsAny={{
          colorTheme: "light",
          dateRange: "12M",
          showChart: true,
          locale: "en",
          largeChartUrl: "",
          isTransparent: true,
          showSymbolLogo: true,
          showFloatingTooltip: true,
          width: "100%",
          height: "660",
          plotLineColorGrowing: "rgba(204, 0, 0, 1)",
          plotLineColorFalling: "rgba(153, 0, 0, 1)",
          gridLineColor: "rgba(240, 243, 250, 0)",
          scaleFontColor: "rgba(204, 0, 0, 1)",
          belowLineFillColorGrowing: "rgba(244, 204, 204, 0.12)",
          belowLineFillColorFalling: "rgba(244, 204, 204, 0.12)",
          belowLineFillColorGrowingBottom: "rgba(234, 153, 153, 0)",
          belowLineFillColorFallingBottom: "rgba(234, 153, 153, 0)",
          symbolActiveColor: "rgba(234, 153, 153, 0.12)",
          tabs: [
            {
              title: "Your Assets",
              symbols: [
                {
                  s: "CME_MINI:ES1!",
                  d: "S&P 500",
                },
                {
                  s: "CME:6E1!",
                  d: "Euro",
                },
                {
                  s: "COMEX:GC1!",
                  d: "Gold",
                },
                {
                  s: "NYMEX:CL1!",
                  d: "Crude Oil",
                },
                {
                  s: "NYMEX:NG1!",
                  d: "Natural Gas",
                },
                {
                  s: "CBOT:ZC1!",
                  d: "Corn",
                },
              ],
              originalTitle: "Futures",
            },
            {
              title: "Bonds",
              symbols: [
                {
                  s: "CBOT:ZB1!",
                  d: "T-Bond",
                },
                {
                  s: "CBOT:UB1!",
                  d: "Ultra T-Bond",
                },
                {
                  s: "EUREX:FGBL1!",
                  d: "Euro Bund",
                },
                {
                  s: "EUREX:FBTP1!",
                  d: "Euro BTP",
                },
                {
                  s: "EUREX:FGBM1!",
                  d: "Euro BOBL",
                },
              ],
              originalTitle: "Bonds",
            },
            {
              title: "Forex",
              symbols: [
                {
                  s: "FX:EURUSD",
                  d: "EUR to USD",
                },
                {
                  s: "FX:GBPUSD",
                  d: "GBP to USD",
                },
                {
                  s: "FX:USDJPY",
                  d: "USD to JPY",
                },
                {
                  s: "FX:USDCHF",
                  d: "USD to CHF",
                },
                {
                  s: "FX:AUDUSD",
                  d: "AUD to USD",
                },
                {
                  s: "FX:USDCAD",
                  d: "USD to CAD",
                },
              ],
              originalTitle: "Forex",
            },
            {
              title: "Futures",
              symbols: [
                {
                  s: "BINANCE:BTCUSDT",
                },
                {
                  s: "BINANCE:MATICUSDT",
                },
                {
                  s: "FX:GBPUSD",
                },
                {
                  s: "NASDAQ:TSLA",
                },
                {
                  s: "NASDAQ:AAPL",
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
