"use client";
import { Question } from "@/components/viewQuestion/viewQuestion";
import { useState, useRef } from "react";

export default function QuizPage() {
  const questions = [
    {
      id: 1,
      question: "Đâu là ngôn ngữ lập trình hướng đối tượng?",
      options: ["C", "Java", "HTML", "SQL"],
    },
    {
      id: 2,
      question: "React là gì?",
      options: [
        "Ngôn ngữ lập trình",
        "Framework PHP",
        "Thư viện JavaScript",
        "Hệ điều hành",
      ],
    },
    {
      id: 3,
      question: "HTML là viết tắt của gì?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyperlink Text Management Language",
        "Home Tool Management Language",
      ],
    },
    {
      id: 4,
      question: "CSS được sử dụng để làm gì?",
      options: [
        "Lập trình Backend",
        "Xử lý dữ liệu",
        "Định dạng và thiết kế giao diện",
        "Tạo cấu trúc trang web",
      ],
    },
    {
      id: 5,
      question: "Ngôn ngữ nào thường được dùng để phát triển ứng dụng Android?",
      options: ["Python", "Java", "PHP", "Swift"],
    },
    {
      id: 6,
      question: "Câu lệnh nào dùng để in ra màn hình trong Python?",
      options: ["console.log()", "echo", "printf()", "print()"],
    },
    {
      id: 7,
      question: "Đâu là hệ quản trị cơ sở dữ liệu phổ biến?",
      options: ["React", "MySQL", "HTML", "Node.js"],
    },
    {
      id: 8,
      question: "Đâu là cú pháp đúng để khai báo biến trong JavaScript?",
      options: ["int x = 10;", "let x = 10;", "var x : 10;", "x <- 10;"],
    },
    {
      id: 9,
      question: "API là viết tắt của gì?",
      options: [
        "Application Programming Interface",
        "Advanced Programming Integration",
        "Applied Program Information",
        "Array Processing Instruction",
      ],
    },
    {
      id: 10,
      question: "HTTP là viết tắt của?",
      options: [
        "Hyper Text Transfer Protocol",
        "Hyperlink Text Transfer Protocol",
        "High Transfer Text Protocol",
        "Home Transfer Text Protocol",
      ],
    },
    {
      id: 11,
      question: "JSON là gì?",
      options: [
        "Công cụ thiết kế giao diện",
        "Ngôn ngữ lập trình",
        "Định dạng trao đổi dữ liệu",
        "Framework PHP",
      ],
    },
    {
      id: 12,
      question: "Câu lệnh nào dùng để lặp trong JavaScript?",
      options: ["if", "switch", "for", "break"],
    },
    {
      id: 13,
      question: "Ngôn ngữ nào không phải là ngôn ngữ lập trình?",
      options: ["JavaScript", "HTML", "Python", "Ruby"],
    },
    {
      id: 14,
      question: "Git là gì?",
      options: [
        "Hệ thống quản lý phiên bản",
        "Ngôn ngữ lập trình",
        "Công cụ soạn thảo văn bản",
        "Hệ điều hành",
      ],
    },
    {
      id: 15,
      question: "Đâu là từ khóa khai báo hằng số trong JavaScript?",
      options: ["var", "let", "const", "static"],
    },
    {
      id: 16,
      question: "DOM trong JavaScript là gì?",
      options: [
        "Document Object Model",
        "Data Object Mapping",
        "Dynamic Object Model",
        "Digital Object Mapping",
      ],
    },
    {
      id: 17,
      question: "Framework phổ biến để xây dựng giao diện React là gì?",
      options: ["Angular", "Vue", "Bootstrap", "Material UI"],
    },
    {
      id: 18,
      question: "Ký hiệu nào dùng để khai báo mảng trong JavaScript?",
      options: ["{}", "[]", "()", "<>"],
    },
    {
      id: 19,
      question: "Đâu là cú pháp để tạo hàm trong JavaScript?",
      options: [
        "function myFunction() {}",
        "def myFunction() {}",
        "fun myFunction() {}",
        "function:myFunction() {}",
      ],
    },
    {
      id: 20,
      question: "Đâu là cách để lấy phần tử HTML theo id trong JavaScript?",
      options: [
        "getElementById()",
        "querySelector()",
        "getElementByClass()",
        "getElementByTag()",
      ],
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [flaggedQuestions, setFlaggedQuestions] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );

  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSelectAnswer = (id: number, answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[id - 1] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleToggleFlag = (id: number) => {
    const newFlags = [...flaggedQuestions];
    newFlags[id - 1] = !newFlags[id - 1];
    setFlaggedQuestions(newFlags);
  };

  const handleChangeQuestion = (index: number) => {
    questionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="flex h-screen">
      <div className="mt-[100px] w-full px-10 md:mx-auto md:w-fit">
        {questions.map((q, index) => (
          <div
            key={q.id}
            ref={(el) => {
              questionRefs.current[index] = el;
            }}
            className="mb-4"
          >
            <Question
              id={q.id}
              question={q.question}
              options={q.options}
              onSelect={handleSelectAnswer}
              onToggleFlag={handleToggleFlag}
              isFlagged={flaggedQuestions[index]}
              selectedAnswer={selectedAnswers[index]}
            />
          </div>
        ))}
      </div>
      <div className="w-[300px] h-[calc(100vh - 60px)]">
        <div className="fixed top-[60px] right-0 bottom-0  w-[300px] h-[calc(100vh - 60px)] bg-gray-100 px-5 py-5 overflow-y-auto">
          <div className="mb-4 ml-auto cursor-pointer bg-[#0388b4] text-white font-bold w-[30px] h-[40px] flex justify-center items-center rounded-md text-md">
            X
          </div>
          <div className="bg-white border-2 border-gray-300 rounded-md">
            <div className="p-4 border-b-2 text-blue-700 text-lg font-bold">
              Bảng câu hỏi
            </div>
            <div className="bg-gray-100 h-fit flex flex-col">
              <div className="grid grid-cols-5 gap-x-4 gap-y-2 px-4 py-3">
                {questions.map((_, index) => {
                  const isSelected = selectedAnswers[index] !== null;
                  const isFlagged = flaggedQuestions[index];

                  return (
                    <div
                      key={index}
                      className={`w-[30px] h-[40px] border-[1px] border-black flex justify-center items-center rounded-[5px] cursor-pointer select-none 
                      ${isSelected ? "bg-green-600 text-white" : "bg-white"}
                    `}
                      onClick={() => handleChangeQuestion(index)}
                    >
                      {isFlagged ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill={"red"}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                          />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="text-blue-700 px-4 cursor-pointer hover:opacity-75 mt-2 mb-5 text-center">
                Nộp bài
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
