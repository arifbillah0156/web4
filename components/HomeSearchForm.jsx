// components/ResponsiveSelectForm.js
"use client";
import { useState } from "react";

// হোম - যেখান থেকে ইউজার পাত্র/পাত্রীর সন্ধান করবে
export default function HomeSearchForm() {
  const [selectOption1, setselectOption1] = useState("");
  const [selectOption2, setselectOption2] = useState("");
  const [selectOption3, setselectOption3] = useState("");

  const handleChange1 = (e) => {
    setselectOption1(e.target.value);
  };
  const handleChange2 = (e) => {
    setselectOption2(e.target.value);
  };
  const handleChange3 = (e) => {
    setselectOption3(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchDataArray = [
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
    ];
    console.log(searchDataArray);
  };

  return (
    <div className="mt-14 ">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
      >
        <div className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse px-0 py-3 font-bold">
          <h1 className="underline decoration-purple-500">“বায়োডাটা খুজুন”</h1>
        </div>

        {/* লেবেল - আমি খুজছি */}
        <div>
          <label
            htmlFor="option1"
            className="block text-2xl font-medium text-purple-700"
          >
            আমি খুজছি:
          </label>
          <select
            id="option1"
            name="option1"
            value={selectOption1}
            onChange={handleChange1}
            className="w-full border border-purple-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 px-2 py-4 text-xl bg-white text-black"
          >
            <option value="allBiodata">সকল</option>
            <option value="boyBiodata">পাত্রের বায়োডাটা</option>
            <option value="girlBiodata">পাত্রীর বায়োডাটা</option>
          </select>
        </div>
        <hr />

        {/* লেবেল - বৈবাহিক অবস্থা */}
        <div>
          <label
            htmlFor="option2"
            className="block text-2xl font-medium text-purple-700"
          >
            বৈবাহিক অবস্থা:
          </label>
          <select
            id="option2"
            name="option2"
            value={selectOption2}
            onChange={handleChange2}
            className="w-full border border-purple-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 px-2 py-4 text-xl  bg-white text-black"
          >
            <option value="allStatus">সকল</option>
            <option value="unmarried">অবিবাহিত</option>
            <option value="married">বিবাহিত</option>
          </select>
        </div>
        <hr />

        {/* লেবেল - বিভাগ */}
        <div>
          <label
            htmlFor="option3"
            className="block text-2xl font-medium text-purple-700"
          >
            বিভাগ:
          </label>
          <select
            id="option3"
            name="option3"
            value={selectOption3}
            onChange={handleChange3}
            className="w-full border border-purple-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 px-2 py-4 text-xl  bg-white text-black"
          >
            <option value="allDivision">সকল</option>
            <option value="Dhaka">ঢাকা বিভাগ</option>
            <option value="Chattogram">চট্টগ্রাম বিভাগ</option>
            <option value="Rajshahi">রাজশাহী বিভাগ</option>
            <option value="Khulna">খুলনা বিভাগ</option>
            <option value="Barishal">বরিশাল বিভাগ</option>
            <option value="Sylhet">সিলেট বিভাগ</option>
            <option value="Rangpur">রংপুর বিভাগ</option>
            <option value="Mymensingh">ময়মনসিংহ বিভাগ</option>
          </select>
        </div>

        <div className="flex justify-center ">
          <button
            type="submit"
            className="mt-6 px-16 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white text-2xl rounded-lg shadow-lg hover:ring-2 hover:bg-green-600 hover:px-20 hover:underline duration-100"
          >
            খুজুন
          </button>
        </div>
      </form>
    </div>
  );
}
