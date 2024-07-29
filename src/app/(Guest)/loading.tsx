import { ClipLoader } from "react-spinners";
function Loading() {
  return (
    <div className="flex h-[100vh] items-center">
      <ClipLoader className="mx-auto" color="#610909" loading size={30} />
    </div>
  );
}
export default Loading;
