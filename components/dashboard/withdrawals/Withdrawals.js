"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import Btcpayment from "./Btcpayment";
import Bankwire from "./BankWire";
import { useUserData } from "../../../contexts/userrContext";
import axios from "axios";

export default function Withdrawals() {
  const { details, coinPrices } = useUserData();
  const { email } = useUserData();
  const [loading, setLoading] = useState(false);
  const [mssg, setMssg] = useState(false);
  const isVerified = details.isVerified;
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [formData, setFormData] = useState({
    walletAddress: "",
    amount: "",
    password: "",
  });
  const [btcFilled, setBtcFilled] = useState(true);
  const [formErrors, setFormErrors] = useState({
    walletAddress: "",
    amount: "",
    password: "",
  });
  const handleValueChange = (value) => {
    setPaymentMethod(value);
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.walletAddress) {
      errors.walletAddress = "Wallet Address is required";
    }
    if (!formData.amount) {
      errors.amount = "Amount is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    if (formData.amount > details.tradingBalance) {
      errors.amount =
        "Insufficient Balance, you can only withdraw $" +
        details.tradingBalance;
    }
    if (formData.amount <= 0) {
      errors.amount = "Please add a valid amount";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  async function loginUser(email, password) {
    const errors = {};
    setLoading(true);
    try {
      const response = await axios.post("/withdrawals/verifypw/api", {
        email,
        password,
      });

      if (response.data.success) {
        // Perform action when login is successful
        setBtcFilled(false);
        setLoading(false);
      } else {
        setLoading(false);
        errors.password = "Incorrect! Check password and try again";
        // Perform action when login fails
      }
    } catch (error) {
      // Handle any error that occurs during the request
      console.log("An error occurred:", error.message);
    }
    setFormErrors(errors);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      loginUser(email, formData.password);

      // Perform submit logic here
    }
  };
  return (
    <div>
      {!isVerified && (
        <>
          <div className="flex w-full md:w-1/2 md:mx-auto h-[80vh] justify-center items-center">
            <div className="not-verified-container rounded-xl p-6 /shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              <div className="header-text text-lg  uppe/rcase font-bold w-full text-center">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 mb-1 text-black/60"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="font-bold">Verification Required</div>
              </div>
              <div className="message py-1 text-sm font-bold text-black/60 text-center">
                You need to be verified to make a withdrawal.
              </div>
              <div className="cta pt-2 flex justify-center">
                <Link href="/dashboard/verify" passHref>
                  <button className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-500 text-white py-3 px-9 text-sm font-bold rounded-md hover:bg-slate-600">
                    Verify Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      {isVerified && (
        <>
          <div className="">
            <div>
              <div className="border /shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] sticky rounded-lg px-2 py-4  bg-white transition-all ">
                <div className="card-info shado-md flex items-center justify-between">
                  <div className="card-header font-bold ml-1 flex items-center ">
                    <div className="block">
                      {" "}
                      <div className="icon-cont bg-gry-50 bg-white-700 rounded-full p-3 mr-2 border bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-600 via-red-600 to-orange-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 text-white"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-xs ml-2">
                      <div className="flex items-center">
                        <p>Available Balance</p>{" "}
                      </div>

                      <div className="mt-2 md:mt-0 text-lg  bg-gay-200 rounded-lg md:ml-2 md:text-sm text-left text-gray-700">
                        {` $${
                          details && details.tradingBalance.toLocaleString()
                        }.00`}
                      </div>
                    </div>
                  </div>
                  <div className="crypto-quivalents mx-4 flex justify-around">
                    <div className="btc flex items-center text-xs bg-orange-50 rounded-xl p-3">
                      <div className="image mr-2">
                        <Image
                          alt=""
                          src="/assets/bitcoin.webp"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="font-bold">
                        {details &&
                          coinPrices &&
                          (
                            details.tradingBalance / coinPrices.bitcoin.usd
                          ).toFixed(5)}
                      </div>
                    </div>
                    <div className="btc sm:flex hidden items-center ml-3 text-xs bg-cyan-50 rounded-xl p-3">
                      <div className="image mr-2">
                        <Image
                          alt=""
                          src="/assets/Tether.webp"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="font-bold">
                        {" "}
                        {details &&
                          coinPrices &&
                          (
                            details.tradingBalance / coinPrices.tether.usd
                          ).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="mb-1 mt-3">
                  <label
                    htmlFor="paymentOption"
                    className="font-bold text-sm py-2"
                  >
                    Select payment method
                  </label>
                </div>

                <Select id="paymentOption" onValueChange={handleValueChange}>
                  <SelectTrigger className="border-0/ font-bold border /shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] text-sm">
                    <SelectValue
                      defaultValue="Bitcoin Payment"
                      className="font-bold"
                      placeholder="Select Method"
                    />
                  </SelectTrigger>
                  <SelectContent className="font-bold">
                    <SelectItem value="Bitcoin Payment" className="">
                      <div className="flex items-center py-2">
                        {" "}
                        <div className="image mr-2">
                          <Image
                            alt=""
                            src="/assets/bitcoin.webp"
                            width={20}
                            height={20}
                          />
                        </div>{" "}
                        <p>Bitcoin Payment</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="Bank Wire" className="">
                      <div className="flex items-center py-2">
                        {" "}
                        <div className="image mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-blue-700"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9.763 9.51a2.25 2.25 0 013.828-1.351.75.75 0 001.06-1.06 3.75 3.75 0 00-6.38 2.252c-.033.307 0 .595.032.822l.154 1.077H8.25a.75.75 0 000 1.5h.421l.138.964a3.75 3.75 0 01-.358 2.208l-.122.242a.75.75 0 00.908 1.047l1.539-.512a1.5 1.5 0 01.948 0l.655.218a3 3 0 002.29-.163l.666-.333a.75.75 0 10-.67-1.342l-.667.333a1.5 1.5 0 01-1.145.082l-.654-.218a3 3 0 00-1.898 0l-.06.02a5.25 5.25 0 00.053-1.794l-.108-.752H12a.75.75 0 000-1.5H9.972l-.184-1.29a1.863 1.863 0 01-.025-.45z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>{" "}
                        <p>Bank Wire</p>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {paymentMethod === null && (
                <div className="flex w-full justify-center items-center mt-20 opacity-70">
                  <div>
                    <div className="logo flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                          clipRule="evenodd"
                        />
                        <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
                      </svg>
                    </div>
                    <div className="message text-lg font-bold text-black/80 text-center my-2 /font-bold">
                      Please select any of the Payment method
                    </div>
                  </div>
                </div>
              )}
              {paymentMethod === "Bitcoin Payment" && (
                <div className="bitcoin-payment my-3 rounded-xl ">
                  <Btcpayment
                    formErrors={formErrors}
                    mssg={mssg}
                    loading={loading}
                    setLoading={setLoading}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    formData={formData}
                    btcFilled={btcFilled}
                    setBtcFilled={setBtcFilled}
                    email={email}
                  />
                </div>
              )}
              {paymentMethod === "Bank Wire" && (
                <div className="bitcoin-payment my-3 rounded-xl ">
                  <Bankwire email={email} />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
