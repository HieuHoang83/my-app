import React from "react";

export default function AgricultureIntro() {
  return (
    <div className="min-h-screen bg-green-50 p-6 flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Nông Nghiệp Hiện Đại
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Nông nghiệp đóng vai trò quan trọng trong nền kinh tế và đời sống con
          người. Với sự phát triển của công nghệ, các phương pháp canh tác hiện
          đại đã giúp nâng cao năng suất và bảo vệ môi trường.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-green-800">Công nghệ</h2>
            <p className="text-gray-600">
              Sử dụng công nghệ tiên tiến như AI, IoT và tự động hóa trong nông
              nghiệp.
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-green-800">Bền vững</h2>
            <p className="text-gray-600">
              Các mô hình nông nghiệp hữu cơ, tuần hoàn giúp bảo vệ tài nguyên
              thiên nhiên.
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-green-800">Chăn nuôi</h2>
            <p className="text-gray-600">
              Áp dụng phương pháp chăn nuôi thông minh giúp cải thiện chất lượng
              và giảm thiểu dịch bệnh.
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-green-800">
              Kinh tế nông nghiệp
            </h2>
            <p className="text-gray-600">
              Phát triển chuỗi cung ứng, thương mại điện tử và xuất khẩu nông
              sản bền vững.
            </p>
          </div>
        </div>
        <p className="text-gray-700 text-lg mt-6">
          Ngoài ra, việc đào tạo và hỗ trợ nông dân tiếp cận công nghệ mới cũng
          là yếu tố quan trọng giúp nâng cao hiệu quả sản xuất và nâng cao chất
          lượng cuộc sống.
        </p>
      </div>
    </div>
  );
}
