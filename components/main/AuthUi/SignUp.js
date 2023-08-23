import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Calendar } from "../../ui/calendar";
import PhoneInput from "react-phone-input-2";
import VerificationPage from "./VerifficationPage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { countryList } from "./countries";
import { FlagIcon } from "react-flag-kit";

const stepValidationSchemas = [
  z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email").nonempty("Email is required"),
  }),
  z.object({
    phoneNumber: z.string().nonempty("Phone number is required"),
    country: z.string().nonempty("Country is required"),
  }),
  z.object({
    gender: z.string().nonempty("Gender is required"),
    dob: z.string().nonempty("Date of Birth is required"),
  }),
  z.object({
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Confirm Password is required"),
  }),
];

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

export function DatePickerDemo({ selected, onSelect }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={` justify-start w-full text-left font-normal border-0 hover:text-white hover:bg-slate-800 bg-slate-800 ${
            selected ? "" : "text"
          }`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? format(selected, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          defaultMonth={new Date(1979, 8)}
          selected={selected}
          onSelect={onSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

const Signup = () => {
  const [isVerificationStep, setIsVerificationStep] = useState(false);
  const [formData, setFormData] = useState({});

  const [currentStep, setCurrentStep] = useState(0);
  const { control, handleSubmit, getValues, setError, formState } = useForm({
    mode: "onChange",
    resolver: zodResolver(stepValidationSchemas[currentStep]),
  });

  const [selectedCountry, setSelectedCountry] = useState("us");

  const handleSignupSubmit = (data) => {
    const finalData = {
      ...formData,
      ...data,
    };
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    setIsVerificationStep(true);
    console.log("data", finalData);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleNextStep = () => {
    const currentStepSchema = stepValidationSchemas[currentStep];
    const currentStepData = getValues(); // Get all form values for the current step

    setFormData({
      ...formData,
      ...currentStepData,
    });
    // Validate the current step's data
    const result = currentStepSchema.safeParse(currentStepData);

    if (result.success) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      // The validation failed
      for (const [key, value] of Object.entries(
        result.error.flatten().fieldErrors
      )) {
        setError(key, {
          type: "manual",
          message: value[0].message,
        });
      }
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderFormStep = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="mb-5 mt-6">
              <Label
                htmlFor="name"
                className="block text-white text-sm mb-2 capitalize"
              >
                Legal Full Name
              </Label>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      error={fieldState.error?.message}
                      className="w-full px-4 py-3 bg-gray-800 text-white capitalize rounded-lg text-sm border-none"
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
              <Label htmlFor="email" className="block text-white text-sm mb-2">
                Email
              </Label>
              <Controller
                name="email"
                control={control}
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
          </>
        );
      case 1:
        return (
          <>
            <div className="mb-5">
              <Label
                htmlFor="country"
                className="block text-white text-sm mb-2"
              >
                Country
              </Label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center">
                    <div className="w-full pr-4 py-3 bg-gray-800 text-white  text-sm rounded-lg border-none">
                      <select
                        id="country"
                        className="bg-gray-800 text-white w-full ml-1 mr-3"
                        value={field.value}
                        onChange={(event) => {
                          field.onChange(event);
                          handleCountryChange(event);
                        }}
                      >
                        <option value="" disabled>
                          Select country
                        </option>
                        {countryList.map((country) => (
                          <option key={country.value} value={country.value}>
                            <div className="flex items-center">
                              {country.label}
                            </div>{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flag ml-2 p-4 bg-slate-800 rounded-lg">
                      {" "}
                      <FlagIcon
                        code={selectedCountry.toUpperCase()}
                        size={21}
                        className="mr-1"
                      />
                    </div>
                  </div>
                )}
              />
            </div>
            <div className="mb-5">
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <PhoneInput
                      country={selectedCountry.toLocaleLowerCase()}
                      value={field.value}
                      {...field}
                      className="w-full"
                      containerClass="w-full"
                      inputClass="w-full px-4 py-3  bg-slate-800 text-sm rounded-lg border-none"
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
          </>
        );
      case 2:
        return (
          <>
            <div className="mb-5">
              <Label htmlFor="gender" className="block text-white text-sm mb-2">
                Gender
              </Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full bg-slate-800 px-4 py-3 rounded-lg border-0 text-white"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    {genderOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="mb-5">
              <Label htmlFor="dob" className="block text-white text-sm mb-2">
                Date of Birth
              </Label>
              <Controller
                name="dob"
                control={control}
                render={({ field }) => (
                  <input
                    type="date"
                    {...field}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border-0 text-white"
                    onChange={(e) => {
                      field.onChange(e);
                      setSelectedDate(e.target.value);
                    }}
                  />
                )}
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="mb-5">
              <Label
                htmlFor="password"
                className="block text-white text-sm mb-2"
              >
                Password
              </Label>
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Create a password"
                      error={fieldState.error?.message}
                      className="w-full px-4 py-3 bg-gray-800 text-white text-sm rounded-lg border-none"
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
              <Label
                htmlFor="confirmPassword"
                className="block text-white text-sm mb-2"
              >
                Confirm Password
              </Label>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm password"
                      error={fieldState.error?.message}
                      className="w-full px-4 py-3 bg-gray-800 text-white text-sm rounded-lg border-none"
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
          </>
        );
      default:
        return null;
    }
  };

  const totalSteps = 4; // Set the total number of steps

  return (
    <>
      {isVerificationStep ? (
        <VerificationPage
          Input={Input}
          Button={Button}
          Label={Label}
          formData={formData}
        />
      ) : (
        <form onSubmit={handleSubmit(handleSignupSubmit)} className="">
          <div className="message mb-5">
            <div className="text-white font-bold">Create a new account</div>
            <p className="text-sm font-normal text-gray-400 mt-3">
              Continue where you left off by logging in, we keep track of your
              every progress.
            </p>
          </div>
          <div className="">{renderFormStep(currentStep)}</div>
          <div className="flex justify-between">
            {currentStep > 0 && (
              <Button
                type="button"
                onClick={handlePreviousStep}
                className=" mr-2 bg-slate-800 text-white py-3 px-4 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            )}
            {currentStep < totalSteps - 1 && (
              <Button
                type="button"
                onClick={handleNextStep}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-4 rounded-lg"
                disabled={!formState.isValid}
              >
                Proceed
              </Button>
            )}
            {currentStep === totalSteps - 1 && (
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-4 rounded-lg"
                disabled={!formState.isValid}
              >
                Sign Up
              </Button>
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default Signup;
