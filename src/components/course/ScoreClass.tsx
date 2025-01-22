"use client";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

// Định nghĩa giao diện dữ liệu Course
interface Course {
  hoTen: string;
  maSv: string;
  diemThanhPhan: number;
  diemThi: number;
  diemGk: number;

  tongKet: number;
  diemBTL: number;
}

// Component hiển thị bảng điểm
export default function ScoreClass() {
  // Dữ liệu mẫu của sinh viên
  const courses: Course[] = [
    {
      hoTen: "Nguyễn Văn A",
      maSv: "SV001",
      diemThanhPhan: 8.0,
      diemGk: 9,
      diemThi: 8.5,
      tongKet: 8.3,
      diemBTL: 7.5,
    },
    {
      hoTen: "Trần Thị B",
      maSv: "SV002",
      diemThanhPhan: 7.0,
      diemGk: 9,
      diemThi: 8.0,
      tongKet: 7.8,
      diemBTL: 8.0,
    },
    {
      hoTen: "Lê Văn C",
      maSv: "SV003",
      diemThanhPhan: 6.5,
      diemGk: 9,

      diemThi: 7.5,
      tongKet: 7.0,
      diemBTL: 7.8,
    },
  ];

  return (
    <main className="p-8 container mx-auto ">
      <div className="p-4">
        <DataTable
          value={courses}
          showGridlines
          className="text-lg table-auto w-[900px] mx-auto"
        >
          {/* Họ và Tên */}
          <Column
            field="hoTen"
            header="Họ và Tên"
            headerStyle={{
              backgroundImage:
                "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
              backgroundColor: "#3282b8",
              color: "white",
              fontWeight: "bold",
            }}
            className="pl-4 text-center font-semibold"
          ></Column>

          {/* Mã Sinh Viên */}
          <Column
            field="maSv"
            header="Mã SV"
            headerStyle={{
              backgroundImage:
                "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
              backgroundColor: "#3282b8",
              color: "white",
              fontWeight: "bold",
            }}
            className="pl-4 text-center font-semibold"
          ></Column>

          {/* Điểm Thành Phần */}
          <Column
            field="diemThanhPhan"
            header="Điểm Thành Phần"
            headerStyle={{
              backgroundImage:
                "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
              backgroundColor: "#3282b8",
              color: "white",
              fontWeight: "bold",
            }}
            className="pl-4 text-center font-semibold"
          ></Column>
          <Column
            field="diemBTL"
            header="Điểm BTL"
            headerStyle={{
              backgroundImage:
                "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
              backgroundColor: "#3282b8",
              color: "white",
              fontWeight: "bold",
            }}
            className="pl-4 text-center font-semibold"
          ></Column>
          <Column
            field="diemGk"
            header="Điểm GK"
            headerStyle={{
              backgroundImage:
                "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
              backgroundColor: "#3282b8",
              color: "white",
              fontWeight: "bold",
            }}
            className="pl-4 text-center font-semibold"
          ></Column>
          {/* Điểm Thi */}
          <Column
            field="diemThi"
            header="Điểm Thi"
            headerStyle={{
              backgroundImage:
                "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
              backgroundColor: "#3282b8",
              color: "white",
              fontWeight: "bold",
            }}
            className="pl-4 text-center font-semibold"
          ></Column>

          {/* Tổng Kết */}
          <Column
            field="tongKet"
            header="Tổng Kết"
            headerStyle={{
              backgroundImage:
                "linear-gradient(to bottom right, rgb(85, 85, 223), rgba(0, 248, 255, 0.431372549))",
              backgroundColor: "#3282b8",
              color: "white",
              fontWeight: "bold",
            }}
            className="pl-4 text-center font-semibold"
          ></Column>

          {/* Điểm BTL */}
        </DataTable>
      </div>
    </main>
  );
}
