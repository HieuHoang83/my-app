"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

type RegistrationPeriod = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
};

const RegistrationPeriods: React.FC = () => {
  // Dữ liệu danh sách đợt đăng ký

  // Render nút "Xem Chi Tiết"
  const RegistrationTable = () => {
    const registrationPeriods = [
      {
        startDate: "09/01/2025 10:00",
        endDate: "15/01/2025 15:00",
      },
      // Bạn có thể thêm nhiều dữ liệu hơn ở đây
    ];

    return (
      <div className="w-full">
        <DataTable
          value={registrationPeriods}
          className="flex mb-4 text-[10px] shadow-sm md:text-[1rem]"
        >
          <Column
            field="startDate"
            header="Thời gian bắt đầu"
            headerStyle={{ padding: "10px" }} // Tăng chiều cao header cho dễ nhìn
            className="p-[10px]"
          />

          <Column
            field="endDate"
            header="Thời gian kết thúc"
            headerStyle={{ padding: "10px" }} // Tăng chiều cao header cho dễ nhìn
            className="p-[10px]"
          />
        </DataTable>
      </div>
    );
  };
  return (
    <div className=" block px-8 pb-8 ">
      <div className="border-[2px] border-[#3f9bd0]  w-full  rounded-md ">
        <div className="h-[45px] flex bg-[#337fab]  text-white text-[20px] justify-center   items-center">
          <p>
            Đăng ký các học phần có nhu cầu học Dự thính HK2/2024-2025 Lộ trình
            2
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full min-h-[calc(100vh-105px)]">
          <div className=" md:text-[10px]  w-full sm:w-[25%] sm:text-xl px-4">
            <div className="mt-16 border-t-[3px] border-[#337fab] w-full rounded-[3px]">
              <p className="text-lg p-2">Thời gian đăng ký</p>
              <RegistrationTable></RegistrationTable>
            </div>
          </div>
          <div className=" w-full md:w-[75%] p-4 ">
            <div className=" border-t-[3px] border-[#337fab] w-full rounded-[3px]  min-h-[65vh]">
              <p className="text-lg px-4 py-1">Chọn môn đăng ký</p>
              <div className="px-4 flex my-3 ">
                <input
                  type="text"
                  placeholder="Nhập mã môn học muốn đăng ký"
                  className="text-sm w-full py-1 px-3 border-2  outline-none border-r-0 rounded-tl-md rounded-bl-md focus:border-[#3f9bd0]"
                />
                <div className="bg-[#3f9bd0] flex items-center p-2 cursor-pointer rounded-tr-md rounded-br-md hover:bg-[#22648b]">
                  <MagnifyingGlassIcon className="h-[18px] w-[18px]  text-white" />
                </div>
              </div>
              <div className="px-4 mt-4 ">
                <p className="text-sm">
                  Chưa tìm kiếm / Môn học bạn đang tìm kiếm hiện không được mở
                  cho đăng ký.
                </p>
              </div>
            </div>
            <div className="border-t-[3px] border-[#3f9bd0] w-full rounded-[3px]  px-4 text-[10px] md:text-[1rem]  ">
              <p className="text-[12px] md:text-[1rem] p-2">Phiếu đăng ký</p>
              <div className="border-2 border-[#3f9bd0] flex flex-col ">
                <div className="text-lg p-2 bg-[#3f9bd0] text-white">
                  Danh sách đã đăng ký
                </div>

                <div className="container mx-auto p-4">
                  <div className="border-2 border-[#337fab] rounded-md overflow-hidden ">
                    <div className="bg-[#337fab] text-white text-md font-bold p-3 flex  ">
                      <p>1SP1039 - Lịch sử Đảng Cộng sản ( Tiếng Việt)</p>
                      <p className="ml-8 text-white">L06 ( 143 / 200 )</p>

                      <div className="ml-auto flex">
                        3.0
                        <TrashIcon className="ml-8 h-6 w-6 text-white hover:text-red-500 cursor-pointer " />
                      </div>
                    </div>

                    <table className=" table-auto w-full border-collapse border border-gray-300">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border border-gray-300 p-2 text-center w-[20%]">
                            Thứ
                          </th>
                          <th className="border border-gray-300 p-2 text-center w-[15%]">
                            Tiết
                          </th>

                          <th className="border border-gray-300 p-2 text-center w-[15%]">
                            Phòng
                          </th>
                          <th className="border border-gray-300 p-2 text-center w-[15%]">
                            CS
                          </th>

                          <th className="border border-gray-300 p-2 text-center w-[26%]">
                            Tuần học
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 text-center w-[20%]">
                            Thứ 6
                          </td>
                          <td className="border border-gray-300 p-2 text-center w-[20%]">
                            9, 10
                          </td>

                          <td className="border border-gray-300 p-2 text-center w-[17%]">
                            H6-GDH6
                          </td>
                          <td className="border border-gray-300 p-2 text-center w-[17%]">
                            2
                          </td>

                          <td className="border border-gray-300 p-2 text-center w-[26%]">
                            12--56789-12345--------------
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 text-center w-[20%]">
                            Thứ 6
                          </td>
                          <td className="border border-gray-300 p-2 text-center w-[15%]">
                            9, 10
                          </td>

                          <td className="border border-gray-300 p-2 text-center w-[15%]">
                            H6-GDH6
                          </td>
                          <td className="border border-gray-300 p-2 text-center w-[15%]">
                            2
                          </td>

                          <td className="border border-gray-300 p-2 text-center w-[26%]">
                            12--56789-12345--------------
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPeriods;
