"use client";

import { useRouter } from "next/navigation"; // Sử dụng 'next/navigation' thay vì 'next/router'

import { useEffect, useState } from "react";

interface VocabularyList {
  id: string;
  name: string;
  createdAt: string;
  important: boolean;
}

export default function VocabularyListsPage() {
  const [lists, setLists] = useState<VocabularyList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newName, setNewName] = useState<string>("");
  const [newImportant, setNewImportant] = useState<boolean>(false);

  const router = useRouter();
  const [newListName, setNewListName] = useState<string>("");
  const [newListImportant, setNewListImportant] = useState<boolean>(false);

  // Gọi API lấy danh sách từ vựng
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/v1/vocabulary/list");
        if (!res.ok) throw new Error("Lỗi khi gọi API");

        const result = await res.json();
        const data = result.data;

        if (Array.isArray(data)) {
          setLists(data);
        } else {
          setLists([]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách từ vựng:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Cập nhật tên danh sách
  const handleRename = async (id: string) => {
    if (!newName.trim()) return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/vocabulary/list/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: newName, important: newImportant }),
        }
      );

      if (!res.ok) throw new Error("Lỗi khi cập nhật");
      const result = await res.json();
      const data = result.data;
      console.log(data);
      if (Array.isArray(data)) {
        setLists(data);
        setEditingId(null);
      } else {
        setLists([]);
      }
      // Cập nhật danh sách trong UI

      // Thoát chế độ chỉnh sửa
    } catch (error) {
      console.error("Lỗi khi đổi tên danh sách:", error);
    }
  };
  const handleDelete = async (id: string) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa danh sách này không?"))
      return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/vocabulary/list/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Lỗi khi xóa");

      // Cập nhật UI sau khi xóa
      setLists((prev) => prev.filter((list) => list.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa danh sách:", error);
    }
  };
  const handleAddList = async () => {
    if (!newListName.trim()) return alert("Vui lòng nhập tên danh sách!");

    try {
      const res = await fetch("http://localhost:8000/api/v1/vocabulary/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newListName,
          important: newListImportant,
        }),
      });

      if (!res.ok) throw new Error("Lỗi khi thêm danh sách mới");

      const result = await res.json();
      setLists([result.data, ...lists]); // Cập nhật danh sách mới lên UI
      setNewListName(""); // Xóa input sau khi thêm thành công
    } catch (error) {
      console.error("Lỗi khi thêm danh sách:", error);
    }
  };
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📚 Danh Sách Từ Vựng
      </h1>
      <div className="mb-6 flex gap-2 relative">
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          className="flex-1 border p-2 rounded-md"
          placeholder="Nhập tên danh sách mới..."
        />
        <div className="flex items-center  text-sm font-semibold ">
          <input
            type="checkbox"
            checked={newListImportant}
            onChange={(e) => setNewListImportant(e.target.checked)}
            className="ml-2 size-5 mr-2"
          />
        </div>

        <button
          onClick={handleAddList}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          ➕ Thêm danh sách
        </button>
      </div>
      {loading ? (
        <p className="text-center">Đang tải...</p>
      ) : lists.length === 0 ? (
        <p className="text-center">Không có danh sách nào.</p>
      ) : (
        <div className="grid gap-4 relative">
          {lists.map((list) => (
            <div
              key={list.id}
              className=" bg-white shadow-md rounded-lg flex justify-between items-center  hover:shadow-lg hover:bg-gray-100
              transition-all relative group min-h-20"
            >
              {editingId === list.id ? (
                <div className="flex items-center w-full h-full mr-5">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="border p-2 rounded-md ml-5 w-[85%]"
                    autoFocus
                  />
                  <input
                    type="checkbox"
                    checked={newImportant}
                    onChange={(e) => setNewImportant(e.target.checked)}
                    className="ml-2 size-5 mr-5"
                  />
                </div>
              ) : (
                <div
                  onClick={() => {
                    router.push(`/Englist/${list.id}`);
                  }}
                  className="p-4 w-full h-full cursor-pointer border-[1px] border-gray-200 rounded-lg
                  hover:bg-gray-100
                  hover:shadow-lg"
                >
                  <p className="text-lg font-semibold">{list.name}</p>
                  <p className="text-sm text-gray-500">
                    🕒 Tạo lúc: {new Date(list.createdAt).toLocaleString()}
                  </p>
                </div>
              )}

              <div className="absolute z-20 right-4 top-4 flex items-center">
                {editingId === list.id ? (
                  <button
                    onClick={() => handleRename(list.id)}
                    className="ml-2 px-3 py-2 bg-green-500 text-white rounded-md mt-1"
                  >
                    Lưu
                  </button>
                ) : (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Ngăn không mở trang chi tiết khi bấm nút
                        setEditingId(list.id);
                        setNewName(list.name);
                        setNewImportant(list.important); // Lưu trạng thái quan trọng hiện tại
                      }}
                      className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md"
                    >
                      ✏️ Đổi tên
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(list.id);
                      }}
                      className="ml-2 px-3 py-2 bg-red-500 text-white rounded-md"
                    >
                      🗑 Xóa
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
