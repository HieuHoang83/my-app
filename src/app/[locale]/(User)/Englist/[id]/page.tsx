"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

interface Vocabulary {
  id: string;
  word: string;
  meaning: string;
  note?: string;
  img?: string;
  reading?: string;
  example?: string;
  createdAt: string;
}

export default function VocabularyListPage() {
  const [words, setWords] = useState<Vocabulary[]>([]);
  const [incorrectWords, setIncorrectWords] = useState<Vocabulary[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [learningPhase, setLearningPhase] = useState<
    "list" | "learning" | "review"
  >("list");
  const [editWordIndex, setEditWordIndex] = useState<number | null>(null);

  const [editingWord, setEditingWord] = useState<Vocabulary | null>(null);
  const [newWord, setNewWord] = useState("");
  const [newMeaning, setNewMeaning] = useState("");
  const [newNote, setNewNote] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newReading, setNewReading] = useState("");
  const [newExample, setNewExample] = useState("");

  const [newWordInput, setNewWordInput] = useState("");
  const [newMeaningInput, setNewMeaningInput] = useState("");
  const [newNoteInput, setNewNoteInput] = useState("");
  const [newImgInput, setNewImgInput] = useState("");
  const [newReadingInput, setNewReadingInput] = useState("");
  const [newExampleInput, setNewExampleInput] = useState("");

  const [isAddOneWork, setIsAddOneWork] = useState(false);
  const [isAddMultipleWork, setIsAddMultipleWork] = useState(false);
  const { id } = useParams();
  const [newWords, setNewWords] = useState([
    { word: "", meaning: "", note: "", img: "" },
  ]);
  const isToday = (dateString: any) => {
    const date = new Date(dateString).toISOString().split("T")[0]; // Lấy phần YYYY-MM-DD
    const today = new Date().toISOString().split("T")[0]; // Ngày hôm nay YYYY-MM-DD
    return date === today;
  };

  useEffect(() => {
    if (!id) return;

    const fetchWords = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/v1/vocabulary/list/${id}`
        );
        const data = await res.json();
        setWords(Array.isArray(data?.data) ? data.data : []);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        setWords([]);
      }
    };

    fetchWords();
  }, [id]);

  // 📝 Chỉnh sửa từ vựng
  const handleEdit = (word: Vocabulary, index: number) => {
    if (editingWord?.id !== word.id) {
      setEditingWord(word);
      setNewWord(word.word);
      setNewMeaning(word.meaning);
      setNewNote(word.note || "");
      setNewImg(word.img || "");
      setNewReading(word.reading || "");
      setNewExample(word.example || "");
      setEditWordIndex(index);
    } else {
      setEditingWord(null);
      setEditWordIndex(null);
    }
  };
  const handleInputChange = (
    index: number,
    field: "word" | "meaning" | "note" | "img",
    value: string
  ) => {
    const updatedWords = [...newWords];
    updatedWords[index] = { ...updatedWords[index], [field]: value };
    setNewWords(updatedWords);
  };
  const handleAddRow = () => {
    setNewWords([...newWords, { word: "", meaning: "", note: "", img: "" }]);
  };
  const handleDeleteRow = (index: number) => {
    if (newWords.length === 1) return; // Giữ ít nhất một dòng để nhập liệu
    const updatedWords = newWords.filter((_, i) => i !== index);
    setNewWords(updatedWords);
  };
  // thêm 1 tu vung
  const handleAddWord = async () => {
    if (!newWordInput.trim() || !newMeaningInput.trim()) return;

    try {
      const res = await fetch(`http://localhost:8000/api/v1/vocabulary`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          word: newWordInput,
          meaning: newMeaningInput,
          note: newNoteInput,
          reading: newReadingInput,
          img: newImgInput,
          example: newExampleInput,
          listId: id, // Gửi kèm listId để biết từ này thuộc danh sách nào
        }),
      });

      if (res.ok) {
        const newWord = await res.json();
        setWords([newWord.data, ...words]); // Cập nhật UI
        setNewWordInput("");
        setNewMeaningInput("");
        setNewNoteInput("");
        setNewImgInput("");
        setNewReadingInput("");
        setNewExampleInput("");
        setIsAddOneWork(false);
      }
    } catch (error) {
      console.error("Lỗi khi thêm từ vựng:", error);
    }
  };
  // thêm list từ vựng
  const handleAddMultipleWords = async () => {
    const wordsToAdd = newWords.filter(
      (w) => w.word.trim() && w.meaning.trim()
    ); // Lọc bỏ dòng trống
    if (wordsToAdd.length === 0) return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/vocabulary/add-multiple`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            words: wordsToAdd,
            listId: id,
          }),
        }
      );
      if (res.ok) {
        const newWordsFromServer = await res.json();
        setWords([...newWordsFromServer.data]); // Cập nhật UI
        setNewWords([{ word: "", meaning: "", note: "", img: "" }]); // Reset bảng
        setIsAddMultipleWork(false);
      }
    } catch (error) {
      console.error("Lỗi khi thêm nhiều từ vựng:", error);
    }
  };
  // 💾 Lưu từ vựng sau khi chỉnh sửa
  const handleSave = async () => {
    if (!editingWord) return;
    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/vocabulary/${editingWord.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            word: newWord,
            meaning: newMeaning,
            note: newNote,
            img: newImg,
            reading: newReading,
            example: newExample,
          }),
        }
      );

      if (res.ok) {
        setWords((prevWords) =>
          prevWords.map((w) =>
            w.id === editingWord.id
              ? {
                  ...w,
                  word: newWord,
                  meaning: newMeaning,
                  note: newNote,
                  example: newExample,
                  img: newImg,
                  reading: newReading,
                }
              : w
          )
        );
        setEditingWord(null);
        setEditWordIndex(null);
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật từ vựng:", error);
    }
  };

  // ❌ Xóa từ vựng
  const handleDelete = async (wordId: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa từ vựng này?")) return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/vocabulary/${wordId}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setWords((prevWords) => prevWords.filter((word) => word.id !== wordId));
      }
    } catch (error) {
      console.error("Lỗi khi xóa từ vựng:", error);
    }
  };

  // Xử lý chuyển sang từ tiếp theo trong chế độ học
  const handleNext = (remembered: boolean) => {
    if (!remembered) {
      setIncorrectWords((prev) => [...prev, words[currentIndex]]);
    }
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    } else {
      setLearningPhase("review");
    }
  };

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center bg-gray-100  ">
      {learningPhase === "list" && (
        <>
          <h2 className="text-2xl font-bold mb-6 mt-5">
            Danh sách <span className="text-red-500"> {words.length} </span> từ
            vựng
          </h2>

          {isAddOneWork && (
            <div className="mt-6 p-4 bg-gray-200 rounded-lg max-w-[70vw]">
              <h3 className="text-lg font-bold mb-2">Thêm từ vựng mới</h3>
              <input
                type="text"
                value={newWordInput}
                onChange={(e) => setNewWordInput(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Nhập từ vựng..."
              />
              <input
                type="text"
                value={newMeaningInput}
                onChange={(e) => setNewMeaningInput(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Nhập nghĩa..."
              />
              <input
                type="text"
                value={newReadingInput}
                onChange={(e) => setNewReadingInput(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Nhập phát âm"
              />

              <input
                type="text"
                value={newExampleInput}
                onChange={(e) => setNewExampleInput(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Nhập ví dụ ..."
              />
              <input
                type="text"
                value={newNoteInput}
                onChange={(e) => setNewNoteInput(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Nhập ghi chú..."
              />
              <input
                type="text"
                value={newImgInput}
                onChange={(e) => setNewImgInput(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Nhập link ảnh ..."
              />
              <button
                onClick={handleAddWord}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded mr-10"
              >
                ➕ Lưu
              </button>
            </div>
          )}

          {isAddMultipleWork && (
            <div className="mt-6 p-4 bg-gray-200 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Thêm nhiều từ vựng</h3>

              {/* Bảng nhập từ vựng */}
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="border p-2">Từ vựng</th>
                    <th className="border p-2">Nghĩa</th>
                    <th className="border p-2">Ghi chú</th>
                    <th className="border p-2">Link Img</th>
                    <th className="border p-2">❌</th>
                  </tr>
                </thead>
                <tbody>
                  {newWords.map((word, index) => (
                    <tr key={index} className="bg-white">
                      <td className="border p-2">
                        <input
                          type="text"
                          value={word.word}
                          onChange={(e) =>
                            handleInputChange(index, "word", e.target.value)
                          }
                          className="w-full p-2 border rounded"
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="text"
                          value={word.meaning}
                          onChange={(e) =>
                            handleInputChange(index, "meaning", e.target.value)
                          }
                          className="w-full p-2 border rounded"
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="text"
                          value={word.img}
                          onChange={(e) =>
                            handleInputChange(index, "img", e.target.value)
                          }
                          className="w-full p-2 border rounded"
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="text"
                          value={word.note}
                          onChange={(e) =>
                            handleInputChange(index, "note", e.target.value)
                          }
                          className="w-full p-2 border rounded"
                        />
                      </td>
                      <td className="border p-2 text-center">
                        {newWords.length > 1 && (
                          <button
                            onClick={() => handleDeleteRow(index)}
                            className="bg-gray-300 hover:bg-gray-200  text-white px-2 py-1 rounded"
                          >
                            ❌
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Nút thêm dòng */}
              <button
                onClick={handleAddRow}
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
              >
                ➕ Thêm dòng
              </button>

              {/* Nút thêm tất cả */}
              <button
                onClick={handleAddMultipleWords}
                className="mt-2 ml-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                ✅ Thêm tất cả
              </button>
            </div>
          )}
          <div className="w-full max-w-4xl bg-white p-12 rounded-lg shadow-lg border mt-5">
            <button
              onClick={() => setLearningPhase("learning")}
              className="mt-2 mb-4 bg-blue-500 text-white px-4 py-2 rounded mr-10"
            >
              Bắt đầu học
            </button>
            <button
              onClick={() => setIsAddOneWork(!isAddOneWork)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded mr-10"
            >
              ➕ Thêm từ
            </button>
            {/* <button
              onClick={() => setIsAddMultipleWork(!isAddMultipleWork)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              ➕ Thêm nhieu từ
            </button> */}

            <ul className="space-y-4">
              {words.map((word, index) => (
                <li
                  key={word.id}
                  className="px-4 py-2 bg-gray-100 rounded-lg shadow"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1 relative">
                      {isToday(word.createdAt) && (
                        <p className="absolute left-[-55px] top-3 text-xl">
                          {" "}
                          ⭐{" "}
                        </p>
                      )}
                      <p className="text-xl font-semibold">
                        {word.word.split("/n").map((line, index) => (
                          <span key={index}>
                            {line.split(/(\(.*?\))/g).map((part, i) =>
                              part.match(/^\(.*\)$/) ? ( // Kiểm tra nếu phần này là nội dung trong ngoặc đơn
                                <span key={i} className="text-red-800 px-1 ">
                                  {part}
                                </span>
                              ) : (
                                part
                              )
                            )}
                            <br /> {/* Đảm bảo xuống dòng khi gặp \n */}
                          </span>
                        ))}
                      </p>
                      <div>
                        <p className="text-xl font-semibold text-gray-500 mt-1">
                          {word.meaning.split("/n").map((line, index) => (
                            <span key={index}>
                              {line.split(/(\(.*?\))/g).map((part, i) =>
                                part.match(/^\(.*\)$/) ? ( // Kiểm tra nếu phần này là nội dung trong ngoặc đơn
                                  <span key={i} className="text-red-800 px-1 ">
                                    {part}
                                  </span>
                                ) : (
                                  part
                                )
                              )}
                              <br /> {/* Đảm bảo xuống dòng khi gặp \n */}
                            </span>
                          ))}
                        </p>

                        {word.reading && (
                          <p className="text-md text-red-500 mt-1">
                            <strong> Phát âm : </strong>

                            {word.reading.split("/n").map((line, index) => (
                              <span key={index}>
                                {line}
                                <br />
                              </span>
                            ))}
                          </p>
                        )}
                      </div>

                      {word.example && (
                        <p className="text-xl font-semibold text-gray-500 mt-2 py-2  block border-t-[3px] border-dashed border-black">
                          {word.example.split("/n").map((line, index) => (
                            <span key={index}>
                              {line.split(/\((.*?)\)/g).map((part, i) =>
                                i % 2 === 1 ? ( // Nội dung nằm trong ngoặc sẽ có chỉ số lẻ do split giữ lại nhóm (.*?)
                                  <span key={i} className="text-red-800 px-1">
                                    {part}
                                  </span>
                                ) : (
                                  part
                                )
                              )}
                              <br /> {/* Đảm bảo xuống dòng khi gặp \n */}
                            </span>
                          ))}
                        </p>
                      )}
                      {word.note && (
                        <p className="text-lg text-red-500 my-1 block border-t-[3px] border-dashed border-black pt-2">
                          <strong> Ghi chú : </strong>

                          {word.note.split("/n").map((line, index) => (
                            <span key={index}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      )}
                    </div>

                    <div className=" m-5 flex gap-2 h-[50px] items-center">
                      <button
                        onClick={() => handleEdit(word, index)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => handleDelete(word.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>

                  {editingWord && editWordIndex === index && (
                    <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                      <h3 className="text-lg font-bold mb-2">
                        Chỉnh sửa từ vựng
                      </h3>
                      <input
                        value={newWord}
                        onChange={(e) => setNewWord(e.target.value)}
                        className="w-full p-2 mb-2 border rounded"
                        placeholder="Nhập từ vựng..."
                      />
                      <input
                        value={newMeaning}
                        onChange={(e) => setNewMeaning(e.target.value)}
                        className="w-full p-2 mb-2 border rounded"
                        placeholder="Nhập nghĩa..."
                      />

                      <input
                        value={newReading}
                        onChange={(e) => setNewReading(e.target.value)}
                        className="w-full p-2 mb-2 border rounded"
                        placeholder="Phát âm..."
                      />

                      <input
                        value={newExample}
                        onChange={(e) => setNewExample(e.target.value)}
                        className="w-full p-2 mb-2 border rounded"
                        placeholder="Example..."
                      />
                      <input
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        className="w-full p-2 mb-2 border rounded"
                        placeholder="Note..."
                      />
                      <input
                        value={newImg}
                        onChange={(e) => setNewImg(e.target.value)}
                        className="w-full p-2 mb-2 border rounded"
                        placeholder="Link Img..."
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleSave}
                          className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                          Lưu
                        </button>
                        <button
                          onClick={() => setEditingWord(null)}
                          className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                          Hủy
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      {learningPhase === "learning" && words.length > 0 && (
        <div className="w-full bg-gray-100 p-6 rounded-lg flex  justify-center items-center ">
          <div className="ml-36 mr-20 relative w-[600px] h-[500px] perspective flex flex-col items-center justify-center">
            <div
              className={` cursor-pointer w-full h-full transition-transform duration-500 preserve-3d ${
                flipped ? "rotate-y-180" : ""
              }`}
              onClick={() => setFlipped(!flipped)}
            >
              {/* Mặt trước */}
              <div className="absolute w-full h-full flex-col bg-blue-500 text-white flex items-center justify-center rounded-lg backface-hidden px-16">
                <p className="text-3xl font-bold">
                  {words[currentIndex].word.split("/n").map((line, index) => (
                    <span className="my-2 block" key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                {words[currentIndex].example && (
                  <p className="text-2xl font-semibold text-black mt-2 py-2  block border-t-[3px] border-dashed border-black">
                    {words[currentIndex].example
                      .split("/n")
                      .map((line, index) => (
                        <span key={index}>
                          {line.split(/\((.*?)\)/g).map((part, i) =>
                            i % 2 === 1 ? ( // Nội dung nằm trong ngoặc sẽ có chỉ số lẻ do split giữ lại nhóm (.*?)
                              <span key={i} className="text-red-800 px-1">
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          )}
                          <br /> {/* Đảm bảo xuống dòng khi gặp \n */}
                        </span>
                      ))}
                  </p>
                )}
              </div>

              {/* Mặt sau */}
              <div className="absolute w-full h-full bg-gray-200 text-black flex flex-col px-10 items-start justify-center rounded-lg rotate-y-180 backface-hidden">
                <div className="text-2xl flex">
                  <strong className="text-red-500 block mr-1">Nghĩa </strong>:
                  <p className="text-xl font-semibold text-gray-500 mt-1 ml-1">
                    {words[currentIndex].meaning
                      .split("/n")
                      .map((line, index) => (
                        <span key={index}>
                          {line.split(/(\(.*?\))/g).map((part, i) =>
                            part.match(/^\(.*\)$/) ? ( // Kiểm tra nếu phần này là nội dung trong ngoặc đơn
                              <span key={i} className="text-red-800 px-1 ">
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          )}
                          <br /> {/* Đảm bảo xuống dòng khi gặp \n */}
                        </span>
                      ))}
                  </p>
                </div>
                {words[currentIndex].note && (
                  <div className="text-2xl flex mt-4">
                    <strong className="text-red-500 block mr-1 whitespace-nowrap">
                      Chú ý
                    </strong>
                    :
                    <span className="block ml-2">
                      {words[currentIndex].note
                        .split("/n")
                        .map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))}
                    </span>
                  </div>
                )}
                {words[currentIndex].reading && (
                  <div className="text-2xl flex mt-4">
                    <strong className="text-red-500 block mr-1 whitespace-nowrap">
                      Phát âm
                    </strong>
                    :
                    <span className="block ml-2">
                      {words[currentIndex].reading
                        .split("/n")
                        .map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => handleNext(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Chưa nhớ
              </button>
              <button
                onClick={() => handleNext(true)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Nhớ rồi
              </button>
            </div>
          </div>
          {/* Thêm khung hình ảnh */}
          {words[currentIndex].img && (
            <div className=" w-[500px] h-[400px] border-4 border-gray-300 rounded-lg overflow-hidden mb-20">
              <img
                src={words[currentIndex].img} // Giả sử bạn có một trường "image" trong từ điển
                alt="Hình ảnh từ vựng"
                className="w-full h-full object-fill"
              />
            </div>
          )}
        </div>
      )}
      {learningPhase === "review" && (
        <div className="w-full   p-6 rounded-lg  flex flex-col items-center">
          <p className="text-lg font-semibold">Bạn đã hoàn thành bài học!</p>
          <p className="text-gray-600  text-lg ">
            Từ chưa thuộc:{" "}
            <span className="text-red-500 font-semibold">
              {incorrectWords.length}
            </span>
          </p>
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => {
                setCurrentIndex(0);
                setFlipped(false);
                setLearningPhase("list");
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Quay lại danh sách
            </button>
            {incorrectWords.length > 0 && (
              <button
                onClick={() => {
                  setWords(incorrectWords);
                  setIncorrectWords([]);
                  setCurrentIndex(0);
                  setLearningPhase("learning");
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Học lại từ quên
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
