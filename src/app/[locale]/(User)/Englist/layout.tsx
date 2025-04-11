import { PrimeReactProvider } from "primereact/api";
import NavigateHome from "@/components/header/header";
import FooterComponent from "@/components/Footer/footer";
export const metadata = {
  title: "COURSE PAGE",
  description: "course page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
