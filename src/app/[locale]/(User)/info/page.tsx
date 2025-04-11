"use client";
import { useState } from "react";
import ProfilePage from "./PageInfo";
import buttonnr from "./PageInfo";
import UpdateInfoPage from "./UpdateInfoPage";
import StudentRecord from "./studentScore";
import SchedulePage from "./Schedule";
import Calendar from "./Schedule";

function InfoPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Vị trí bắt đầu bằng 0 (nút đầu tiên được chọn mặc định)

  const handleClick = (index: number) => {
    setActiveIndex(index); // Cập nhật trạng thái khi bấm vào nút
  };
  let listbreed = [
    "Thông tin cá nhân",

    "Cập nhật thông tin",
    "Kết quả học tập",
    "Lịch",
  ];
  const handleClickUpdate = () => {
    setActiveIndex(1);
  };
  const handleClickSave = () => {
    setActiveIndex(0);
  };

  return (
    <div className="px-8 py-4 w-full">
      <nav className="bg-[#e8e8e8] text-white  shadow-sm ">
        <div className="flex justify-between items-center">
          <ul className="flex justify-start">
            {listbreed.map((label, index) => (
              <li key={index}>
                <div
                  onClick={() => handleClick(index)} // Gọi hàm khi nút được bấm
                  className={`text-black w-[170px] py-[8px] px-2 flex justify-center text-md font-semibold  ${
                    activeIndex === index
                      ? "bg-white  border-gray-600 border-2  rounded-tr-[15px] border-gray-300 hover:cursor-default" // Nếu là nút được chọn
                      : "bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300 hover:border-[#333] hover:border-solid hover:text-black hover:shadow-lg" //
                  }`}
                >
                  {label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="">
        {activeIndex === 0 && (
          <ProfilePage handleClickUpdate={handleClickUpdate} />
        )}
        {activeIndex === 1 && (
          <UpdateInfoPage handleClickSave={handleClickSave} />
        )}
        {activeIndex === 2 && <StudentRecord />}
        {activeIndex === 3 && <Calendar />}
      </div>
    </div>
  );
}

export default InfoPage;
