"use client";
import { useState, ChangeEvent, FormEvent } from "react";

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
type UpdateInfoPage = {
  handleClickSave: () => void; // Kiểu của prop onClick
};
export default function UpdateInfoPage({ handleClickSave }: UpdateInfoPage) {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target; // e.target sẽ phù hợp cho cả input và select
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const typePerson = (type: string) => {
    return type === "student";
  };

  let InfoUser = () => {
    return (
      <>
        <div className="ml-10 my-5 text-2xl font-bold text-blue-500  ">
          * Thông tin cá nhân
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-2  px-10 ">
          {/* Họ và tên */}

          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold">Họ và tên :</p>
            <p>{userData.name}</p>
          </div>

          {/* Mã số sinh viên */}
          {typePerson(type) && (
            <div
              className="flex items-center mb-4 h-[60px] pr-10"
              style={{ backgroundColor: "rgb(243, 244, 246)" }}
            >
              <p className="w-[280px] pl-[30px] font-semibold">
                Mã số sinh viên :
              </p>
              <p>{userData.id}</p>
            </div>
          )}

          {/* Khoa */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Khoa
            </p>
            <p>{userData.khoa}</p>
          </div>

          {/* Ngành */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Ngành
            </p>
            <p>{userData.nganh}</p>
          </div>

          {/* Mã lớp */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Mã lớp
            </p>
            <p>{userData.maClass}</p>
          </div>

          {/* Email Trường */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Email Trường
            </p>
            <p>{userData.emailUniverity}</p>
          </div>

          {/* Giới tính */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Giới tính
            </p>
            <select
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              className="w-[200px] border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] pl-4 py-2 rounded-md shadow-sm"
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>

          {/* Ngày sinh */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Ngày sinh
            </p>
            <input
              type="date"
              name="birthday"
              value={userData.birthday}
              onChange={handleChange}
              className="w-[200px] pr-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] pl-4 py-2 rounded-md shadow-sm"
            />
          </div>
          {/* Số điện thoại */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Số điện thoại
            </p>
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="w-[200px]  border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] pl-4 py-2 rounded-md shadow-sm"
            />
          </div>
          {/* Email cá nhân */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Email cá nhân
            </p>
            <input
              type="email"
              name="contactEmail"
              value={userData.contactEmail}
              onChange={handleChange}
              className="w-[350px]  pl-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] shadow-sm"
              placeholder="Nhập email cá nhân"
            />
          </div>

          {/* Mạng xã hội */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Mạng xã hội
            </p>
            <input
              type="text"
              name="socialNetwork"
              value={userData.socialNetwork}
              onChange={handleChange}
              className="w-[350px]  border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] pl-4 py-2 rounded-md shadow-sm"
            />
          </div>

          {/* Địa chỉ */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Địa chỉ
            </p>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              className="w-[350px]  border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] pl-4 py-2 rounded-md shadow-sm"
            />
          </div>
        </div>
      </>
    );
  };
  let InfoDependent = () => {
    return (
      <>
        <div className="ml-10 my-5 text-2xl font-bold text-blue-500  ">
          * Thông tin người thân
        </div>

        <div className="grid grid-cols-3 gap-x-6 gap-y-2 mt-3 px-10">
          {/* Tên người thân */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold pr-10">
              Tên người thân
            </p>
            <input
              type="text"
              name="nameParent1"
              value={userData.nameParent1}
              onChange={handleChange}
              className="w-[350px] border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] pl-4 py-2 rounded-md shadow-sm"
            />
          </div>

          {/* Mối quan hệ */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Mối quan hệ
            </p>
            <select
              name="relationship1"
              value={userData.relationship1}
              onChange={handleChange}
              className=" w-[200px] pl-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] shadow-sm"
            >
              <option value="father">Bố</option>
              <option value="mother">Mẹ</option>
              <option value="other">Người giám hộ</option>
            </select>
          </div>

          {/* Số điện thoại người thân */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Số điện thoại
            </p>
            <input
              type="text"
              name="phoneParent1"
              value={userData.phoneParent1}
              onChange={handleChange}
              className="w-[350px] border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] pl-4 py-2 rounded-md shadow-sm"
            />
          </div>

          {/* Tên người thân */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold pr-10">
              Tên người thân
            </p>
            <input
              type="text"
              name="nameParent2"
              value={userData.nameParent2}
              onChange={handleChange}
              className="w-[350px] border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] pl-4 py-2 rounded-md shadow-sm"
            />
          </div>

          {/* Mối quan hệ */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Mối quan hệ
            </p>
            <select
              name="relationship1"
              value={userData.relationship2}
              onChange={handleChange}
              className=" w-[200px] pl-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] shadow-sm"
            >
              <option value="father">Bố</option>
              <option value="mother">Mẹ</option>
              <option value="other">Người giám hộ</option>
            </select>
          </div>

          {/* Số điện thoại người thân */}
          <div
            className="flex items-center mb-4 h-[60px] pr-10"
            style={{ backgroundColor: "rgb(243, 244, 246)" }}
          >
            <p className="w-[280px] pl-[30px] font-semibold font-semibold">
              Số điện thoại
            </p>
            <input
              type="text"
              name="phoneParent1"
              value={userData.phoneParent2}
              onChange={handleChange}
              className="w-[350px] border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff9000] pl-4 py-2 rounded-md shadow-sm"
            />
          </div>
        </div>
      </>
    );
  };
  let ButtonSubmit = () => {
    return (
      <div
        className="mt-4 w-32 h-9 bg-[linear-gradient(to_bottom_right,_rgb(85,_85,_223),_rgba(255,_0,_0,_0.431372549))] bg-[#d7a5a5] text-white flex items-center justify-center cursor-pointer hover:opacity-70 float-right mr-10 rounded-md"
        onClick={handleClickSave}
      >
        Cập nhật
      </div>
    );
  };
  return (
    <div className="mt-8">
      <main className="relative ">
        <h1 className="bg-white text-[#ff9000] text-[25px] h-[30px] flex items-center pl-[5px] absolute top-[-17px] left-[30px] font-['Roboto'] z-2 pr-1">
          Cập nhật thông tin liên lạc
        </h1>
        <div className="mt-5 border-2 border-[#2f303342] px-5 rounded-lg pt-5 h-[calc(100vh-200px)] text-xl ">
          <InfoUser />
          <InfoDependent />
          <ButtonSubmit />
        </div>
      </main>
    </div>
  );
}
