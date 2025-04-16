"use client";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CoursePage from "@/components/course/Course";
import ScoreClass from "@/components/course/ScoreClass";
// Interface cho File và Chapter
interface FileIN {
  nameFile: string;
  typeFile: string;
}

interface Chapter {
  id: number;
  name: string;
  description: string;
  file: FileIN[];
  active: boolean;
}

let course = {
  id: 1,
  name: "Xác suất thống kê",
  description: "Tìm hiểu về JavaScript cơ bản",
  image:
    "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
  teacher: "Đinh Thùy Duyên",
  class: "L01",
};

export default function Page({ params }: { params: { id: string } }) {
  const [selectedButton, setSelectedButton] = useState<"course" | "score">(
    "course"
  );
  const handleButtonClick = (button: "course" | "score") => {
    setSelectedButton(button);
  };

  return (
    <>
      <div className="mx-auto my-24 font-serif min-h-[calc(100vh-260px)]">
        <h1 className="text-[30px] text-blue-700 text-center font-serif font-semibold tracking-wide">
          {course.name + "_" + course.teacher + " " + course.class}
        </h1>
        <div className="flex flex-row justify-center mt-10">
          <button
            className={`text-lg mt-4 w-[250px] h-[50px] flex items-center justify-center float-right mr-4 rounded-md ${selectedButton === "course"
              ? "bg-[linear-gradient(to_bottom_right,_rgb(85,_85,_223),_rgba(255,_0,_0,_0.431372549))] bg-[#d7a5a5] text-white cursor-default"
              : "bg-gray-200 cursor-pointer"
              }`}
            onClick={() => handleButtonClick("course")}
          >
            Khóa học
          </button>
          <button
            className={`text-lg mt-4 w-[250px] h-[50px] flex items-center justify-center float-right mr-4 rounded-md cursor-default ${selectedButton === "score"
              ? "bg-[linear-gradient(to_bottom_right,_rgb(85,_85,_223),_rgba(255,_0,_0,_0.431372549))] bg-[#d7a5a5] text-white"
              : "bg-gray-200 cursor-pointer"
              }`}
            onClick={() => handleButtonClick("score")}
          >
            Điểm số
          </button>
        </div >
        {selectedButton === "course" && <CoursePage ></CoursePage>}
        {selectedButton === "score" && <ScoreClass></ScoreClass>}
      </div>
    </>
  );
}
