"use client";

import { useState } from "react";

type QuestionProps = {
  question: string;
  options: string[];
};

const Question: React.FC<QuestionProps> = ({ question, options }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFlagged, setIsFlagged] = useState(false);

  const handleToggleFlag = () => {
    setIsFlagged((prev) => !prev);
  };
  const handleSelect = (option: string) => {
    setSelectedAnswer(option);
    console.log("Đáp án đã chọn:", option);
  };

  return (
    <div className="flex user-select-none select-none space-x-7">
      <div
        className={`flex 
          w-[110px]
        h-28 pl-2 pr-1 pt-2  flex-col  bg-gray-100 border-[1px] border-gray-300 rounded-md`}
      >
        <div>
          <p className="text-base font-medium text-blue-700 mb-1">
            Câu hỏi <strong className=" text-2xl font-medium">1</strong>
          </p>
        </div>
        <div
          className={`flex items-center text-base mt-[6px] cursor-pointer ${
            isFlagged ? "text-red-600" : "text-black"
          }`}
          onClick={handleToggleFlag}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFlagged ? "red" : "none"}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 mr-[4px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
            />
          </svg>
          <span className={`${isFlagged ? "" : "text-blue-500"}`}>
            {isFlagged ? "Bỏ cờ" : "Đặt cờ"}
          </span>
        </div>
      </div>
      <div className="relative py-3 px-5 mb-4 border-0 rounded-lg shadow-md bg-[#e7f3f5] w-fit max-w-4xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{question}</h3>
        <div className="flex flex-col space-y-2">
          {options.map((option, index) => (
            <label
              key={index}
              className={`flex space-x-2 p-1  rounded-lg transition cursor-pointer `}
            >
              <input
                type="radio"
                name="answer"
                checked={selectedAnswer === option}
                onChange={() => handleSelect(option)}
                className="w-4 h-4 accent-blue-600 mt-1  "
              />
              <strong>{String.fromCharCode(65 + index)}. </strong>

              <span className="text-gray-800 w-fit ml-1">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
