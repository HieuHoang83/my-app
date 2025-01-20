"use client";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";

function StudentRecord() {
  const [courses, setCourses] = useState<any>([]);

  useEffect(() => {
    // Dữ liệu mẫu
    const sampleCourses = [
      {
        maMH: "MH001",
        tenMonHoc: "Toán Cao Cấp",
        nhomTo: "L01",
        soTC: 3,
        diemThanhPhan: 7.5,
        diemThi: 8.0,
        tongKet: 7.9,
      },
      {
        maMH: "MH002",
        tenMonHoc: "Lập Trình Cơ Bản",
        nhomTo: "L02",
        soTC: 4,
        diemThanhPhan: 6.5,
        diemThi: 7.0,
        tongKet: 6.8,
      },
      {
        maMH: "MH003",
        tenMonHoc: "Vật Lý Đại Cương",
        nhomTo: "L01",
        soTC: 2,
        diemThanhPhan: 8.0,
        diemThi: 8.5,
        tongKet: 8.3,
      },
      {
        maMH: "MH004",
        tenMonHoc: "Hóa Học Cơ Bản",
        nhomTo: "L02",
        soTC: 2,
        diemThanhPhan: 6.0,
        diemThi: 6.5,
        tongKet: 6.3,
      },
      {
        maMH: "MH005",
        tenMonHoc: "Tiếng Anh A1",
        nhomTo: "L01",
        soTC: 3,
        diemThanhPhan: 9.0,
        diemThi: 9.5,
        tongKet: 9.3,
      },
    ];

    setCourses(sampleCourses);
  }, []);
  let SemesterScores = () => {
    return (
      <div className="border-[3px] px-16 pb-16 pt-12 rounded-2xl mt-10 mb-10">
        <h1 className="text-xl font-semibold text-red-500 mb-8">
          Học kỳ 1 - Năm học 2021-2022
        </h1>
        <div className="card">
          <DataTable
            value={courses}
            showGridlines
            className="text-xl table-auto w-full text-centertext-center"
          >
            <Column
              field="maMH"
              header="MÃ MH"
              headerStyle={{
                backgroundImage:
                  "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
                backgroundColor: "#3282b8",
                color: "white",
                fontWeight: "bold",
                justifyItems: "center",
              }}
              className="pl-4 text-center font-semibold"
            ></Column>

            <Column
              field="tenMonHoc"
              header="TÊN MÔN HỌC"
              headerStyle={{
                backgroundImage:
                  "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
                backgroundColor: "#3282b8",
                color: "white",
                fontWeight: "bold",
                justifyItems: "center",
              }}
              className="pl-4 text-center font-semibold"
            ></Column>

            <Column
              field="nhomTo"
              header="NHÓM-TỔ"
              headerStyle={{
                backgroundImage:
                  "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
                backgroundColor: "#3282b8",
                color: "white",
                fontWeight: "bold",
                justifyItems: "center",
              }}
              className="pl-4 text-center font-semibold"
            ></Column>

            <Column
              field="soTC"
              header="SỐ TC"
              headerStyle={{
                backgroundImage:
                  "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
                backgroundColor: "#3282b8",
                color: "white",
                fontWeight: "bold",
                justifyItems: "center",
              }}
              className="pl-4 text-center font-semibold"
            ></Column>

            <Column
              header="ĐIỂM THÀNH PHẦN"
              body={combinedScoreTemplate}
              headerStyle={{
                backgroundImage:
                  "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
                backgroundColor: "#3282b8",
                color: "white",
                fontWeight: "bold",
                justifyItems: "center",
              }}
            ></Column>

            <Column
              field="tongKet"
              header="TỔNG KẾT"
              headerStyle={{
                backgroundImage:
                  "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
                backgroundColor: "#3282b8",
                color: "white",
                fontWeight: "bold",
                justifyItems: "center",
              }}
              className="pl-4 text-center font-semibold"
            ></Column>
          </DataTable>
        </div>
        <div className="space-y-4 text-gray-600 text-xl mt-8">
          <p>
            <span className="font-bold text-gray-800">
              Số tín chỉ tích lũy học kỳ:
            </span>
            <span className="text-xl font-bold text-red-500 ml-2">14</span>
          </p>
          <p>
            <span className="font-bold text-gray-800">
              Số tín chỉ tích lũy:
            </span>
            <span className="text-xl font-bold text-red-500 ml-2">14</span>
          </p>
          <p>
            <span className="font-bold text-gray-800">
              Điểm trung bình học kỳ:
            </span>
            <span className="text-xl font-bold text-red-500 ml-2">10.0</span>
          </p>
          <p>
            <span className="font-bold text-gray-800">
              Điểm trung bình tích lũy:
            </span>
            <span className="text-xl font-bold text-red-500 ml-2">10.0</span>
          </p>
        </div>
      </div>
    );
  };
  // Hàm hiển thị điểm thành phần + điểm thi
  const combinedScoreTemplate = (rowData: any) => {
    return (
      <div className="grid grid-cols-2">
        <div className="font-semibold text-gray-700 pl-4 flex ">
          <div className="w-[90px]">TP: {rowData.diemThanhPhan}</div>
          <span className="text-red-400"> ( 10% )</span>
        </div>

        <div className="font-semibold text-gray-700 pl-4 flex">
          <div className="w-[90px]"> GK : {rowData.diemThanhPhan}</div>
          <span className="text-red-400"> ( 20% )</span>
        </div>
        <div className="font-semibold text-gray-700 pl-4 flex">
          <div className="w-[90px]"> BTL : {rowData.diemThanhPhan}</div>
          <span className="text-red-400"> ( 20% )</span>
        </div>
        <div className="font-semibold text-gray-700 pl-4 flex">
          <div className="w-[90px]">CK :{rowData.diemThi}</div>
          <span className="text-red-400"> ( 50% )</span>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8 px-20">
      <h1 className="w-full mx-auto text-3xl text-red-500 font-bold py-6 uppercase tracking-wide text-center">
        Bảng điểm Sinh viên
      </h1>
      <div className="flex justify-center flex-col">
        <SemesterScores />
        <SemesterScores />;
        <SemesterScores />;
      </div>
    </div>
  );
}

export default StudentRecord;
