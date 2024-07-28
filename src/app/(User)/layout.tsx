import { PrimeReactProvider } from "primereact/api";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrimeReactProvider value={{ unstyled: true }}>
      {children}
    </PrimeReactProvider>
  );
}
//http://localhost:3000/auth/login
//folder api->auth->[...nextauth]->file
