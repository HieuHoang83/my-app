import Question from "@/components/viewQuestion/viewQuestion";

export default function QuizPage() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <Question
        question="Trong bối cảnh kinh tế toàn cầu hiện nay, việc các quốc gia đẩy mạnh phát triển năng lượng tái tạo có ý nghĩa như thế nào đối với mục tiêu giảm thiểu tác động của biến đổi khí hậu và đảm bảo an ninh năng lượng lâu dài?"
        options={[
          "Việc phát triển năng lượng tái tạo giúp giảm sự phụ thuộc vào nhiên liệu hóa thạch, từ đó hạn chế phát thải khí nhà kính và góp phần vào mục tiêu phát triển bền vững",
          "Đẩy mạnh năng lượng tái tạo sẽ làm tăng chi phí sản xuất điện",
          "Phát triển năng lượng tái tạo là cần thiết, nhưng không đóng vai trò quan trọng bằng việc tìm kiếm các mỏ dầu khí mới để đảm bảo trữ lượng năng lượng dài hạn",
          "Tất cả đều đúng",
        ]}
      />
    </div>
  );
}
