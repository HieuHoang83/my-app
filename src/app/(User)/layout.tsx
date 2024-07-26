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
