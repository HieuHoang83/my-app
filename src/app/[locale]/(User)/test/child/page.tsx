import Link from "next/link";

function Test() {
  return (
    <div className="h-[300px] w-[300px] bg-gray-300 flex items-center justify-center ">
      children B
      <Link className="bg-blue-300 block" href="/test">
        Click
      </Link>
    </div>
  );
}

export default Test;
