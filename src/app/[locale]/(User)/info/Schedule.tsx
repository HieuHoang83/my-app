import { useState, useEffect } from "react";

// Dữ liệu mẫu
const scheduleData = [
  {
    id: 1,
    subject: "Lập trình Web",
    teacher: "Giáo viên A",
    time: "9:00 - 11:00",
    days: [2, 4], // Thứ 2, Thứ 4
  },
  {
    id: 2,
    subject: "Toán rời rạc",
    teacher: "Giáo viên B",
    time: "13:00 - 15:00",
    days: [3, 5], // Thứ 3, Thứ 5
  },
  {
    id: 3,
    subject: "Cấu trúc dữ liệu",
    teacher: "Giáo viên C",
    time: "14:00 - 16:00",
    days: [1, 3], // Thứ 2, Thứ 4
  },
];
function Calendar() {
  const [month, setMonth] = useState<number>(new Date().getMonth()); // Lấy tháng hiện tại

  // Tạo lịch cho tháng hiện tại
  const generateCalendar = () => {
    const daysInMonth = new Date(2025, month + 1, 0).getDate(); // Số ngày trong tháng
    const calendar = Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const dayOfWeek = new Date(2025, month, day).getDay(); // 0: Chủ nhật, 1: Thứ 2, ...
      return {
        day,
        dayOfWeek,
        events: scheduleData.filter((event) => event.days.includes(dayOfWeek)),
      };
    });
    return calendar;
  };

  return (
    <div className="p-4 mt-20">
      <h1 className="text-3xl font-semibold text-center mb-4">
        Lịch học tháng {month + 1}
      </h1>

      <div className="flex justify-between mb-4">
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => setMonth((prev) => (prev === 0 ? 11 : prev - 1))}
        >
          Tháng trước
        </button>
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => setMonth((prev) => (prev === 11 ? 0 : prev + 1))}
        >
          Tháng sau
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((day, index) => (
          <div key={index} className="text-center font-bold">
            {day}
          </div>
        ))}

        {generateCalendar().map((day, index) => (
          <div key={index} className="border p-2">
            <div className="text-center font-semibold">{day.day}</div>
            {day.events.map((event) => (
              <div key={event.id} className="bg-blue-100 p-2 mt-1 text-sm">
                <h4 className="font-medium">{event.subject}</h4>
                <p>{event.teacher}</p>
                <p>{event.time}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Calendar;
