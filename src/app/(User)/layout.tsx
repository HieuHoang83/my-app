import { PrimeReactProvider } from "primereact/api";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <> {children}</>;
}
//http://localhost:3000/auth/login
//folder api->auth->[...nextauth]->file
