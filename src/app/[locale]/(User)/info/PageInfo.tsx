"use client";
import { getServerSession } from "next-auth";
import MenuPage from "@/components/Menu/Menu";
import { useState } from "react";
type UserData = {
  job: string;
  name: string;
  id: string;
  khoa: string;
  nganh: string;
  maClass: string;
  degree: string;
  birthday: string;
  gender: string;
  born: string;
  emailUniverity: string;
  contactEmail: string;
  phone: string;
  socialNetwork: string;
  address: string;
  nameParent1: string;
  phoneParent1: string;
  relationship1: string;
  nameParent2: string;
  phoneParent2: string;
  relationship2: string;
};
type InfoUserProps = {
  handleClickUpdate: () => void; // Kiểu của prop onClick
};
export default function ProfilePage({ handleClickUpdate }: InfoUserProps) {
  const [userData, setUserData] = useState<UserData>({
    job: "student",
    name: "Nguyễn A",
    id: "2211342",
    khoa: "Khoa học và Kỹ thuật Máy tính",
    nganh: "Khoa hoc máy tính",
    maClass: "MT22KH02",
    degree: "",
    birthday: "2004-01-01",
    gender: "Nam",
    born: "Đồng Tháp",
    emailUniverity: "hieu.hoangminh832004@hcmut.edu.vn",
    contactEmail: "abc@gmail.com",
    phone: "0978196355",
    socialNetwork: "facebook.com/anguyenpro",
    address: "Bình Dương",
    nameParent1: "Nguyễn Hoàng",
    relationship1: "father",
    phoneParent1: "0123458796",
    nameParent2: "Nguyễn Thị Hai",
    phoneParent2: "0987654312",
    relationship2: "mother",
  });
  const [type] = useState(userData.job);

  const typePerson = (type: any) => {
    return type === "student";
  };

  return (
    <div className="mt-4 pb-[100px]">
      {/* Tiêu đề phần Thông tin cá nhân hoặc Thông tin giảng viên */}
      <div className="w-full h-8 bg-[linear-gradient(to_bottom_right,_rgb(85,_85,_223),_rgba(0,_248,_255,_0.431372549))] bg-[#3282b8] text-white text-center flex justify-center items-center">
        {typePerson(type) ? "Thông tin cá nhân" : "Thông tin giảng viên"}
      </div>

      {/* Thông tin cá nhân */}
      <div>
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Họ và tên
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.name}</p>
        </div>

        {typePerson(type) && (
          <>
            <div className="flex items-center border  border-gray-300">
              <p className="w-2/5 pl-10 pr-2 border-r-[3px]  border-gray-300 py-2">
                Mã số sinh viên
              </p>
              <p className="w-3/5 pl-8 py-2">{userData.id}</p>
            </div>
            <div className="flex items-center border border-gray-300">
              <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
                Khoa
              </p>
              <p className="w-3/5 pl-8 py-2">{userData.khoa}</p>
            </div>
            <div className="flex items-center border border-gray-300">
              <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
                Ngành
              </p>
              <p className="w-3/5 pl-8 py-2">{userData.nganh}</p>
            </div>
            <div className="flex items-center border border-gray-300">
              <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
                Mã lớp
              </p>
              <p className="w-3/5 pl-8 py-2">{userData.maClass}</p>
            </div>
          </>
        )}

        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Ngày sinh
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.birthday}</p>
        </div>
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Giới tính
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.gender}</p>
        </div>
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Nơi sinh
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.born}</p>
        </div>
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Email Trường
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.emailUniverity}</p>
        </div>
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Email cá nhân
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.contactEmail}</p>
        </div>
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Số điện thoại
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.phone}</p>
        </div>
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Mạng xã hội
          </p>
          <a
            href={userData.socialNetwork}
            className="w-3/5 pl-8 py-2 text-blue-500 underline"
          >
            {userData.socialNetwork}
          </a>
        </div>
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Địa chỉ
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.address}</p>
        </div>

        {/* Tiêu đề phần Thông tin người thân */}
        <div className="w-full h-8 bg-[linear-gradient(to_bottom_right,_rgb(85,_85,_223),_rgba(0,_248,_255,_0.431372549))] bg-[#3282b8] text-white text-center flex justify-center items-center">
          Thông tin người thân
        </div>
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Mối quan hệ
          </p>
          <p className="w-3/5 pl-8 py-2">
            {userData.relationship1 == "mother" ? "Mẹ" : "Cha"}
          </p>
        </div>
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Tên người thân
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.nameParent1}</p>
        </div>

        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Số điện thoại người thân
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.phoneParent1}</p>
        </div>

        {/* Thông tin người thân 2 */}
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Mối quan hệ
          </p>
          <p className="w-3/5 pl-8 py-2">
            {userData.relationship2 == "mother" ? "Mẹ" : "Cha"}
          </p>
        </div>
        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Tên người thân
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.nameParent2}</p>
        </div>

        <div className="flex items-center border border-gray-300">
          <p className="w-2/5 pl-10 pr-2 border-r-[3px] border-gray-300 py-2">
            Số điện thoại người thân
          </p>
          <p className="w-3/5 pl-8 py-2">{userData.phoneParent2}</p>
        </div>

        {/* Cập nhật */}
        <div
          className="mt-4 w-32 h-9 bg-[linear-gradient(to_bottom_right,_rgb(85,_85,_223),_rgba(255,_0,_0,_0.431372549))] bg-[#d7a5a5] text-white flex items-center justify-center cursor-pointer hover:opacity-70 float-right"
          onClick={handleClickUpdate}
        >
          Cập nhật
        </div>
      </div>
    </div>
  );
}
