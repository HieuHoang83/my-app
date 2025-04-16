"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Link from "next/link";

type RegistrationPeriod = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
};

const RegistrationPeriods: React.FC = () => {
  // Dữ liệu danh sách đợt đăng ký
  const registrationPeriods: RegistrationPeriod[] = [
    {
      id: 1,
      name: "Đợt Đăng Ký Học Kỳ 1",
      startDate: "2025-01-01",
      endDate: "2025-02-15",
    },
    {
      id: 2,
      name: "Đợt Đăng Ký Học Kỳ 2",
      startDate: "2025-01-01",
      endDate: "2025-01-15",
    },
    {
      id: 3,
      name: "Đợt Đăng Ký Học Kỳ Hè",
      startDate: "2025-08-01",
      endDate: "2025-08-10",
    },
    {
      id: 4,
      name: "Đợt Đăng Ký Học Kỳ 3",
      startDate: "2025-11-01",
      endDate: "2025-11-15",
    },
    {
      id: 5,
      name: "Đợt Đăng Ký Học Kỳ 4",
      startDate: "2026-01-01",
      endDate: "2026-01-15",
    },
    {
      id: 6,
      name: "Đợt Đăng Ký Học Kỳ 5",
      startDate: "2026-05-01",
      endDate: "2026-05-15",
    },
    {
      id: 7,
      name: "Đợt Đăng Ký Học Kỳ 6",
      startDate: "2026-09-01",
      endDate: "2026-09-15",
    },
    {
      id: 8,
      name: "Đợt Đăng Ký Học Kỳ 7",
      startDate: "2026-12-01",
      endDate: "2026-12-15",
    },
    {
      id: 9,
      name: "Đợt Đăng Ký Học Kỳ 8",
      startDate: "2027-02-01",
      endDate: "2027-02-15",
    },
    {
      id: 10,
      name: "Đợt Đăng Ký Học Kỳ 9",
      startDate: "2027-06-01",
      endDate: "2027-06-15",
    },
  ];

  // Hàm kiểm tra trạng thái
  const getRegistrationStatus = (startDate: string, endDate: string) => {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (currentDate < start) {
      return (
        <span style={{ color: "gray", fontStyle: "italic" }}>
          Chưa Mở
        </span>
      );
    } else if (currentDate <= end) {
      return (
        <Link
          href="/subjectRegistration/1"
          className="inline-block font-semibold bg-green-500 text-white px-4 py-2 rounded shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-green-600 "
        >
          Đăng ký
        </Link>
      );
    } else {
      return (
        <span style={{ color: "red", fontWeight: "bold", }}>
          Hết Hạn
        </span>
      );
    }
  };

  // Render nút "Xem Chi Tiết"
  const actionBodyTemplate = (rowData: RegistrationPeriod) => {
    return (
      <Button
        label="Xem Chi Tiết"
        icon="pi pi-search"
        className="p-button-rounded p-button-success"
      />
    );
  };
  const RegistrationTable = () => {
    const registrationPeriods = [
      {
        id: 1,
        startDate: "09/01/2025 10:00",
        endDate: "15/01/2025 15:00",
      },
      // Bạn có thể thêm nhiều dữ liệu hơn ở đây
    ];

    return (
      <div className="container mx-auto mt-20 max-w-[1200px]">
        <DataTable
          value={registrationPeriods}
          paginator
          rows={5}
          className="mb-4"
          responsiveLayout="scroll"
        >
          <Column field="id" header="#" className="text-center" />
          <Column field="startDate" header="Từ ngày" />
          <Column field="endDate" header="Đến ngày" />
        </DataTable>
      </div>
    );
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Danh Sách Các Đợt Đăng Ký
      </h1>

      {/* Bảng Đợt Đăng Ký */}
      <DataTable
        value={registrationPeriods}
        paginator
        rows={5}
        className="mb-4 mt-20 max-w-[1200px] mx-1 sm:mx-auto text-[10px] sm:text-xs md:text-[18px] text-nowrap "
      >
        <Column
          field="name"
          header="Tên Đợt Đăng Ký"
          headerStyle={{

          }}
          className="w-[25%]  text-nowrap text-start"
        ></Column>
        <Column
          field="startDate"
          header="Ngày Bắt Đầu"
          headerStyle={{
            justifyItems: "center",
          }}
          className="w-[25%] text-center"
        ></Column>
        <Column
          field="endDate"
          header="Ngày Kết Thúc"
          headerStyle={{
            justifyItems: "center",
          }}
          className="w-[25%] text-center"
        ></Column>
        <Column
          body={(rowData) =>
            getRegistrationStatus(rowData.startDate, rowData.endDate)
          }
          header="Trạng Thái"
          headerStyle={{
            justifyItems: "center",
          }}
          className="w-[20%] text-center text-[10px] sm:text-xs md:text-[18px]"
        ></Column>
      </DataTable>
    </div >
  );
};

export default RegistrationPeriods;
