import { PrimeReactProvider } from "primereact/api";
import NavigateHome from "@/components/header/header";
export const metadata = {
  title: "User Profile",
  description: "User Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-[80px]">
        <NavigateHome />
      </div>
      {children}
    </>
  );
}
