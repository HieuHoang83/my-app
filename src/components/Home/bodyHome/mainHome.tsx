"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/image/anhUniversity.webp";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
interface Event {
  id: number; // ID duy nhất của sự kiện
  title: string; // Tiêu đề sự kiện
  description: string; // Mô tả chi tiết về sự kiện
  imgSrc: string; // URL của hình ảnh minh họa
  link: string; // Liên kết đến trang chi tiết sự kiện
}
function MainHome() {
  const t = useTranslations("HomePage");
  const events: Event[] = [
    {
      id: 1,
      title: "Sự kiện Xuân Tình Nguyện",
      description:
        "Sự kiện Xuân Tình Nguyện là một chương trình thiện nguyện lớn với sự tham gia của hàng trăm sinh viên, mang đến niềm vui và hỗ trợ cho các hoàn cảnh khó khăn trong dịp Tết Nguyên Đán.",
      imgSrc:
        "https://images2.thanhnien.vn/528068263637045248/2024/12/22/photo-1734870868663-1734870869132938280350.jpeg",
      link: "#",
    },
    {
      id: 2,
      title: "Ngày hội văn hóa quốc tế",
      description:
        "Một ngày hội đặc sắc với nhiều hoạt động văn hóa quốc tế, từ ẩm thực, âm nhạc, đến các trò chơi dân gian đến từ các quốc gia khác nhau.",
      imgSrc:
        "https://ueh.edu.vn/images/upload/editer/UEH%20International%20Day%202022%20S%C3%A2n%20ch%C6%A1i%20giao%20l%C6%B0u%20v%C4%83n%20h%C3%B3a%20qu%E1%BB%91c%20t%E1%BA%BF%20d%C3%A0nh%20cho%20sinh%20vi%C3%AAn%20UEH%20(9).jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Workshop Công nghệ 4.0",
      description:
        "Chuỗi workshop về các công nghệ hiện đại như AI, blockchain, và IoT, được dẫn dắt bởi các chuyên gia hàng đầu.",
      imgSrc:
        "https://hanoi-school.fpt.edu.vn/wp-content/uploads/post-fb-bi-quyet-lam-chu-cn-1024x768.png",
      link: "#",
    },
    {
      id: 4,
      title: "Chương trình Hiến máu nhân đạo",
      description:
        "Hoạt động ý nghĩa mang lại cơ hội cứu sống hàng nghìn bệnh nhân thông qua việc hiến máu tình nguyện.",
      imgSrc: "https://careplusvn.com/Uploads/t/bl/blood-donation_0003166.png",
      link: "#",
    },
    {
      id: 5,
      title: "Cuộc thi Tài năng trẻ 2025",
      description:
        "Một sân chơi cho các bạn sinh viên thể hiện tài năng ở nhiều lĩnh vực như âm nhạc, hội họa, và diễn xuất.",
      imgSrc:
        "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NM/tai-nag-tre.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Hội thảo Khởi nghiệp 2025",
      description:
        "Hội thảo tập trung vào các chủ đề khởi nghiệp, đổi mới sáng tạo, với sự tham gia của các diễn giả nổi tiếng.",
      imgSrc:
        "https://cdnmedia.baotintuc.vn/Upload/FgSTrC9t6bnBzZAM8aWPQ/files/2024/12/Kn.jpeg",
      link: "#",
    },
  ];
  const responsiveOptions = [
    {
      breakpoint: "1536px", // 1536>w>1024
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1024px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "640px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  // const [event, setEvent] = useState<Event[]>([]);
  // useEffect(() => {
  //   setEvent(events);
  // }, []);
  let Header = () => {
    return (
      <header>
        <Image
          src={logo} // Đảm bảo logo là đường dẫn hợp lệ
          alt="Trường Đại học ABC"
          className=" mx-auto mt-[70px] w-[100vw] xl:h-[calc(100vh-70px)] filter brightness-[80%]"
        />
      </header>
    );
  };
  const productTemplate = (product: Event) => {
    return (
      <div className="border-2  rounded-lg shadow-lg m-2 text-center py-2 px-2">
        <div className="mb-3">
          <img
            src={product.imgSrc}
            alt={product.title}
            className="w-full h-80 object-cover"
          />
        </div>
        <div>
          <p className="text-xl font-bold text-[#0f4c75] mt-2 line-clamp-1 text-center h-[30px]">
            {product.title}
          </p>

          <p className="text-gray-700 mt-2 line-clamp-2 text-justify h-[50px]">
            {product.description}
          </p>
          <a
            href="#"
            className="text-[#0f4c75] font-semibold mt-4 block hover:underline"
          >
            Xem thêm
          </a>
        </div>
      </div>
    );
  };

  let ListEvent = () => {
    return (
      <div className="card px-[10px] xl:px-[10%] mx-auto mt-12">
        <Carousel
          value={events}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className="custom-carousel gap-10"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
        />
      </div>
    );
  };
  let InfoUniversity = () => {
    return (
      <div className="bg-[#0f4c75] px-[20px] md:px-[40px] lg:px-[50px] xl:px-[60px] 2xl:px-[80px] py-5 md:py-6 xl:py-12 text-white shadow-lg text-justify">
        <p className="text-2xl text-white mb-6 leading-relaxed  text-indent-30 md:text-indent-50 ">
          Trường Đại học DEF là một tấm gương sáng trong hệ thống giáo dục tiên
          tiến, đứng đầu tại Việt Nam với bề dày lịch sử và uy tín trong việc
          đào tạo thế hệ kỹ sư, nhà khoa học và chuyên gia nghiên cứu hàng đầu.
          Đội ngũ giảng viên giàu kinh nghiệm và đầy đam mê, trường chú trọng
          vào một chương trình giáo dục chất lượng cao, pha trộn giữa lý thuyết
          sâu rộng và kỹ năng thực tiễn, bảo đảm rằng sinh viên sau khi tốt
          nghiệp có đủ năng lực để vượt qua những thách thức không ngừng của thế
          giới công nghệ tiên tiến.
        </p>

        <p className="text-2xl text-white mb-6 leading-relaxed  text-indent-30 md:text-indent-50">
          Với cơ sở vật chất hiện đại và môi trường học thuật năng động, Đại học
          DEF hiện đang điều hành 12 khoa cùng các trung tâm đào tạo, đào tạo
          đến 35 ngành bậc Đại học, 34 ngành bậc Thạc sỹ và 27 ngành bậc Tiến
          sỹ, với tổng số hơn 23.000 sinh viên, hơn 2.100 cán bộ giảng viên và
          gần 300 nhà nghiên cứu. Trường không chỉ góp phần vào sự phát triển
          của hệ thống giáo dục đại học Việt Nam mà còn là nơi đào tạo những nhà
          lãnh đạo tương lai, những nhà khoa học hàng đầu và các chuyên gia quản
          lý cấp cao, có ảnh hưởng rộng lớn cả trong và ngoài nước.
        </p>
      </div>
    );
  };

  return (
    <>
      <Header />
      <InfoUniversity />
      <ListEvent />
    </>
  );
}

export default MainHome;
