"use client";

import { useRouter } from "next/navigation"; // Sử dụng 'next/navigation' thay vì 'next/router'

interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
  teacher: string;
  class: string;
}

const CourseCard = ({ course }: { course: Course }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/course/${course.id}`); // Chuyển đến trang mới
  };

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg cursor-pointer h-[300px] border"
      onClick={handleNavigation}
    >
      {/* Căn giữa hình ảnh */}
      <div className="flex justify-center items-center w-full h-[180px] bg-gray-100">
        <img
          className="object-fill max-h-full w-[400px]"
          src={course.image}
          alt={course.name}
        />
      </div>

      <div className="px-6 py-4 bg-white">
        <h3 className="font-bold text-xl mb-2 text-center">{course.name}</h3>

        <p className="text-gray-600 text-sm text-center">
          Giáo viên : {course.teacher}
        </p>
        <p className="text-gray-600 text-sm text-center">
          Lớp : {course.class}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
