"use client";
import React, { useState, useEffect } from "react";

export default function VerificationPage({ Label, Input, Button, formData }) {
  const [countdown, setCountdown] = useState(120); // 2 minutes in seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (isResendDisabled && countdown > 0) {
      const timerId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timerId); // Cleanup on unmount
    }

    if (countdown === 0) {
      setIsResendDisabled(false);
    }
  }, [isResendDisabled, countdown]);

  const handleResendCode = () => {
    // Handle resend code logic here
    // Reset the countdown and disable the button again
    setCountdown(120);
    setIsResendDisabled(true);
  };

  const handleVerifyCode = () => {
    // Handle code verification here
  };

  return (
    <>
      <div className="message text-sm mb-8 text-gray-300">
        We sent a 6 digit verification code to{" "}
        <strong className="font-bold">{formData.email}</strong>. Please check
        your mailbox or check your provided email address for mistakes or errors
      </div>
      <div>
        <Label
          htmlFor="verificationCode"
          className="block text-white text-sm mb-2 font-bold"
        >
          Enter Verification Code
        </Label>
        <Input
          type="text"
          id="verificationCode"
          placeholder="Enter the code sent to your email"
          className="w-full px-4 py-5 bg-gray-800 text-white outline-none text-sm rounded-lg border-none"
        />
        <Button
          type="button"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-4 rounded-lg mt-4"
          onClick={handleVerifyCode}
        >
          Verify
        </Button>
        <Button
          type="button"
          className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg mt-2 hover:bg-gray-700"
          onClick={handleResendCode}
          disabled={isResendDisabled}
        >
          {isResendDisabled
            ? `Resend Code (${Math.floor(countdown / 60)}:${countdown % 60})`
            : "Resend Code"}
        </Button>
      </div>
    </>
  );
}
