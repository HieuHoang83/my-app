"use client";
import { useState } from "react";
import CourseCard from "@/components/course/CourseList";

interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
  teacher: string;
  class: string;
}

interface Semester {
  id: number;
  name: string;
  courses: Course[];
}

// Dữ liệu các khóa học theo từng kỳ (mỗi kỳ ít nhất 12 khóa học)
const semesters: Semester[] = [
  {
    id: 1,
    name: "221",
    courses: [
      {
        id: 1,
        name: "Khóa học JavaScript",
        description: "Tìm hiểu về JavaScript cơ bản",
        image:
          "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
        teacher: "Giáo viên A",
        class: "Lớp 1",
      },
      {
        id: 2,
        name: "Khóa học React",
        description: "Học React từ cơ bản đến nâng cao",
        image:
          "https://topdev.vn/blog/wp-content/uploads/2023/12/nen-hoc-c-hay-c-plus-4.jpg",
        teacher: "Giáo viên B",
        class: "Lớp 2",
      },
      {
        id: 3,
        name: "Khóa học Python",
        description: "Khám phá Python và các ứng dụng của nó",
        image:
          "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
        teacher: "Giáo viên C",
        class: "Lớp 3",
      },
      {
        id: 4,
        name: "Khóa học Node.js",
        description: "Tạo ứng dụng với Node.js",
        image:
          "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
        teacher: "Giáo viên D",
        class: "Lớp 1",
      },
      {
        id: 5,
        name: "Khóa học Next.js",
        description: "Tìm hiểu về Next.js",
        image:
          "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
        teacher: "Giáo viên E",
        class: "Lớp 2",
      },
      {
        id: 6,
        name: "Khóa học SQL",
        description: "Làm việc với cơ sở dữ liệu SQL",
        image:
          "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
        teacher: "Giáo viên F",
        class: "Lớp 3",
      },
      {
        id: 7,
        name: "Khóa học MongoDB",
        description: "Học MongoDB và ứng dụng",
        image:
          "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
        teacher: "Giáo viên G",
        class: "Lớp 1",
      },
      {
        id: 8,
        name: "Khóa học Angular",
        description: "Tìm hiểu về Angular framework",
        image:
          "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
        teacher: "Giáo viên H",
        class: "Lớp 2",
      },
      {
        id: 9,
        name: "Khóa học Vue.js",
        description: "Học Vue.js từ cơ bản đến nâng cao",
        image:
          "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
        teacher: "Giáo viên I",
        class: "Lớp 3",
      },
      {
        id: 10,
        name: "Khóa học TypeScript",
        description: "Làm việc với TypeScript",
        image:
          "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
        teacher: "Giáo viên J",
        class: "Lớp 1",
      },
      {
        id: 11,
        name: "Khóa học HTML & CSS",
        description: "Tìm hiểu về HTML và CSS",
        image:
          "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
        teacher: "Giáo viên K",
        class: "Lớp 2",
      },
      {
        id: 12,
        name: "Khóa học Git & GitHub",
        description: "Quản lý mã nguồn với Git",
        image:
          "https://r2s.edu.vn/wp-content/uploads/2022/06/khoa-hoc-java-full-stack-_-Hanh-trinh-toi-IT-Fresher-2.png",
        teacher: "Giáo viên L",
        class: "Lớp 3",
      },
    ],
  },
];

export default function Page() {
  const [selectedSemester, setSelectedSemester] = useState(semesters[0]);

  // Hàm xử lý thay đổi kỳ học khi người dùng chọn
  const handleSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    const selected = semesters.find((semester) => semester.id === selectedId);
    if (selected) {
      setSelectedSemester(selected);
    }
  };

  return (
    <main className=" container mx-auto mt-10 mb-20 ">
      {/* Tiêu đề trang */}
      <h1 className="text-3xl font-bold text-center mb-8">Danh sách môn học</h1>

      {/* Chọn kỳ học */}
      <div className="flex flex-row items-center mx-60 ">
        <h2 className="text-xl mr-2">Chọn kỳ học :</h2>
        <select
          value={selectedSemester.id}
          onChange={handleSemesterChange}
          className="bg-gray-200 py-2 pl-1 pr-2  rounded-lg text-start focus-visible:outline-none cursor-pointer"
        >
          {semesters.map((semester) => (
            <option key={semester.id} value={semester.id}>
              {semester.name}
            </option>
          ))}
        </select>
      </div>

      {/* Hiển thị danh sách khóa học */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-60 mt-10">
        {selectedSemester.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}
