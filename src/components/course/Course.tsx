"use client";

import { ChevronDownIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

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
const listchapters: Chapter[] = [
  {
    id: 1,
    name: "Thông báo chung",
    description: `Paraphrasing thì dạng này không chỉ được sử dụng trong part 7 mà ở part 3 + 4 cũng xuất hiện rất nhiều. Trong Part 3 + 4 để đạt điểm cao thì NGHE TỐT chưa đủ mà còn phải PARAPHRASE TỐT nên các bạn phải vận dụng được kỹ năng này nếu muốn tầm 400+ LC các bạn nhé.`,
    file: [
      { nameFile: "C1 Đại cương về xác suất", typeFile: "doc" },
      { nameFile: "C2 Tổ hợp chỉnh Hợp", typeFile: "doc" },
      { nameFile: "C3 Phân phối chuẩn", typeFile: "doc" },
    ],
    active: false,
  },
  {
    id: 2,
    name: "Chương 1",
    description: `Lý thuyết cơ bản`,
    file: [
      { nameFile: "C1 Đại cương về xác suất", typeFile: "doc" },
      { nameFile: "C2 Tổ hợp chỉnh Hợp", typeFile: "doc" },
      { nameFile: "C3 Phân phối chuẩn", typeFile: "doc" },
    ],
    active: false,
  },
];
function CoursePage() {
  const [chapters, setChapters] = useState<Chapter[]>(listchapters);

  // Hàm để thay đổi trạng thái "active" của chương
  const toggleActive = (id: number) => {
    setChapters((prevChapters) =>
      prevChapters.map((chapter) =>
        chapter.id === id ? { ...chapter, active: !chapter.active } : chapter
      )
    );
  };

  // Title Component
  interface TitleProps {
    title: string;
    onclick: () => void; // Function to handle click
    active: boolean; // Boolean state to determine if the chapter is active
  }

  const Title = ({ title, onclick, active }: TitleProps) => {
    return (
      <div
        className="cursor-pointer pl-2 text-[24px] font-semibold  flex items-center text-[#0388b4] h-[50px] relative   bg-white select-none"
        onClick={onclick}
      >
        <div className="rounded-full bg-gray-300 p-1 mr-2 ">
          {active ? (
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronRightIcon className="h-6 w-6 text-gray-500" />
          )}
        </div>
        <p>{title}</p> {/* Render title passed as prop */}
      </div>
    );
  };

  // File Component
  let File = ({ file }: { file: FileIN }) => {
    return (
      <div className="flex justify-center mb-4 ml-[20px]">
        <div className="px-2 py-2 bg-white text-[18px] font-medium w-[840px] flex items-center min-h-[50px] relative border border-gray-300 rounded-xl">
          <DocumentIcon className="h-7 w-7 text-black mr-2" />
          <p className="text-justify text-[#0388b4] hover:underline cursor-pointer">
            {file.nameFile}
          </p>
        </div>
      </div>
    );
  };

  // Description Component
  let Description = ({ notify }: { notify: string }) => {
    return (
      <div className="flex justify-center my-3 ml-[20px]">
        <div className="p-4 pt-2 bg-gray-200 text-[18px] m-5 font-medium w-[840px] flex items-center text-black min-h-[50px] relative border border-gray-300 rounded-xl">
          <p className="text-justify">{notify}</p>
        </div>
      </div>
    );
  };

  // Chapter Component
  interface ChapterComponentProps {
    chapter: Chapter;
  }

  let ChapterComponent = ({ chapter }: ChapterComponentProps) => {
    return (
      <div className="border-gray-300 rounded-2xl border py-1 md:w-[60%] sm:w-[550px] mx-auto flex justify-start flex-col my-6 overflow-hidden">
        <Title
          title={chapter.name}
          onclick={() => toggleActive(chapter.id)}
          active={chapter.active}
        />
        {chapter.active && (
          <>
            <Description notify={chapter.description} />
            {chapter.file.map((file) => (
              <File key={file.nameFile} file={file} />
            ))}
          </>
        )}
      </div>
    );
  };
  return (
    <div className="mt-16">
      {chapters.map((item) => (
        <ChapterComponent key={item.id} chapter={item} />
      ))}
    </div>
  );
}

export default CoursePage;
