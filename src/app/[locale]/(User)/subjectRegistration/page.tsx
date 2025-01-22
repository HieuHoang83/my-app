"use client";
import React, { useState } from "react";

type Subject = {
  id: number;
  name: string;
  teacher: string;
  credits: number;
};

type RegistrationPeriod = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  subjects: Subject[];
};

const SubjectRegistration: React.FC = () => {
  // Dữ liệu danh sách môn học
  const subjects: Subject[] = [
    { id: 1, name: "Toán", teacher: "Nguyễn Văn A", credits: 3 },
    { id: 2, name: "Văn", teacher: "Trần Thị B", credits: 2 },
    { id: 3, name: "Lý", teacher: "Phạm Văn C", credits: 4 },
    { id: 4, name: "Hóa", teacher: "Lê Thị D", credits: 3 },
    { id: 5, name: "Anh Văn", teacher: "Nguyễn Thị E", credits: 2 },
  ];

  // State lưu trữ danh sách môn học đã đăng ký
  const [registeredSubjects, setRegisteredSubjects] = useState<Subject[]>([]);

  // Hàm xử lý đăng ký môn học
  const handleRegister = (subject: Subject) => {
    if (!registeredSubjects.find((s) => s.id === subject.id)) {
      setRegisteredSubjects([...registeredSubjects, subject]);
    } else {
      alert(`Bạn đã đăng ký môn "${subject.name}" rồi!`);
    }
  };

  // Hàm xử lý hủy đăng ký môn học
  const handleUnregister = (subjectId: number) => {
    setRegisteredSubjects(registeredSubjects.filter((s) => s.id !== subjectId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Đăng Ký Môn Học
      </h1>

      {/* Danh sách môn học */}
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        Danh Sách Môn Học
      </h2>
      <table className="table-auto w-full border border-gray-300 shadow-lg mb-6">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Tên Môn Học</th>
            <th className="px-4 py-2 border">Giảng Viên</th>
            <th className="px-4 py-2 border">Số Tín Chỉ</th>
            <th className="px-4 py-2 border">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{subject.id}</td>
              <td className="px-4 py-2 border">{subject.name}</td>
              <td className="px-4 py-2 border">{subject.teacher}</td>
              <td className="px-4 py-2 border">{subject.credits}</td>
              <td className="px-4 py-2 border">
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => handleRegister(subject)}
                >
                  Đăng Ký
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Danh sách môn học đã đăng ký */}
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        Môn Học Đã Đăng Ký
      </h2>
      {registeredSubjects.length > 0 ? (
        <table className="table-auto w-full border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Tên Môn Học</th>
              <th className="px-4 py-2 border">Giảng Viên</th>
              <th className="px-4 py-2 border">Số Tín Chỉ</th>
              <th className="px-4 py-2 border">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {registeredSubjects.map((subject) => (
              <tr key={subject.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{subject.id}</td>
                <td className="px-4 py-2 border">{subject.name}</td>
                <td className="px-4 py-2 border">{subject.teacher}</td>
                <td className="px-4 py-2 border">{subject.credits}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleUnregister(subject.id)}
                  >
                    Hủy Đăng Ký
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">Bạn chưa đăng ký môn học nào.</p>
      )}
    </div>
  );
};

export default SubjectRegistration;
