import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
});

const Login = () => {
  const {
    control: loginControl,
    handleSubmit: loginHandleSubmit,
    formState: loginFormState,
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  const handleLoginSubmit = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={loginHandleSubmit(handleLoginSubmit)} className="">
      <div className="message mb-5">
        <div className="text-white font-bold">Sign-In to your account</div>
        <p className="text-sm font-normal text-gray-400 mt-3">
          Continue where you left off by logging in, we keep track of your every
          progress.
        </p>
      </div>
      <div className="mb-5 mt-6">
        <Label htmlFor="email" className="block text-white text-sm mb-2">
          Email
        </Label>
        <Controller
          name="email"
          control={loginControl}
          render={({ field, fieldState }) => (
            <>
              <Input
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                error={fieldState.error?.message}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg text-sm border-none"
                {...field}
              />
              {fieldState.error && (
                <p className="text-sm text-red-500 my-1 font-semibold">
                  {fieldState.error?.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div className="mb-5">
        <Label htmlFor="password" className="block text-white text-sm mb-2">
          Password
        </Label>
        <Controller
          name="password"
          control={loginControl}
          render={({ field, fieldState }) => (
            <>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                error={fieldState.error?.message}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg text-sm border-none"
                {...field}
              />
              {fieldState.error && (
                <p className="text-sm text-red-500 my-1 font-semibold">
                  {fieldState.error?.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg"
      >
        Log In
      </Button>
    </form>
  );
};

export default Login;