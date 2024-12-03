"use client";
// pages/biodata.js
import { useState } from "react";

export default function BiodataForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: "পাত্র", label: "পাত্র" },
    { id: "পাত্রী", label: "পাত্রী" },
  ];

  const handleChange = (id) => {
    setSelectedOption(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <p className="mt-2"></p>
      <hr />
      <p className="mt-2"></p>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-start justify-center p-4 rounded-3xl">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-6 animate-fadeIn mt-12">
          {submitted ? (
            ""
          ) : (
            <div className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse px-0 py-3 font-bold">
              <h1 className="underline decoration-purple-500">
                “বায়োডাটা তৈরি করুন”
              </h1>
              <br />
              <hr />
              <hr />
              <hr />
            </div>
          )}

          {submitted ? (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-600">
                Thank You!
              </h3>
              <p className="text-gray-700">Your form has been submitted.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md max-w-md mx-auto">
                <h2 className="text-2xl text-purple-700 mb-4 underline">
                  আমি একজন:
                </h2>
                <div className="space-y-3">
                  {options.map((option) => (
                    <label
                      key={option.id}
                      htmlFor={option.id}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer transition-transform duration-200 ${
                        selectedOption === option.id
                          ? "bg-blue-500 text-white shadow-lg transform scale-105"
                          : "bg-white text-gray-800 hover:bg-blue-100 hover:shadow-md border border-purple-300"
                      }`}
                    >
                      <input
                        type="radio"
                        id={option.id}
                        name="radio-group"
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={() => handleChange(option.id)}
                        className="hidden"
                      />
                      <span
                        className={`w-5 h-5 mr-3 flex items-center justify-center rounded-full border-2 ${
                          selectedOption === option.id
                            ? "border-white bg-white"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedOption === option.id && (
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        )}
                      </span>
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>
              <hr />
              {/* নাম */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xl font-medium text-purple-900"
                >
                  নাম <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="NID অনুযায়ি নাম লিখুন......"
                  className="mt-1 px-2 py-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-300 focus:outline-none"
                />
              </div>{" "}
              <hr />
              {/* মোবাইল নাম্বার */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xl font-medium text-purple-900"
                >
                  মোবাইল নাম্বার <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 px-2 py-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-300 focus:outline-none"
                  placeholder="আপনার মোবাইল নাম্বার লিখুন....."
                />
              </div>
              <hr />
              {/* বয়স */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xl font-medium text-purple-900"
                >
                  আপনার বয়স <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  className="mt-1 px-2 py-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-300 focus:outline-none"
                  placeholder="আপনার মোবাইল নাম্বার লিখুন....."
                />
              </div>
              <hr />
              {/* জন্ম নিবন্ধন নাম্বার */}
              <div>
                <label
                  htmlFor=""
                  className="block text-xl font-medium text-purple-900"
                >
                  আপনার জন্ম নিবন্ধন নাম্বার{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="birthNumber"
                  className="mt-1 px-2 py-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-300 focus:outline-none"
                  placeholder="আপনার মোবাইল নাম্বার লিখুন....."
                />
              </div>
              <hr />
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  rows="3"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="pt-8 pb-4">
                <button
                  type="submit"
                  className="w-full text-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 hover:underline"
                >
                  জমা দিন
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
