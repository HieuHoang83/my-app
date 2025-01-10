import Themefull from "@/components/Theme/Theme";
import NextAuthWrapper from "@/library/nextauth.provider";
import ThemeProvider from "@/library/ThemeProvider";
import NProgressWrapper from "@/library/nextprogressBar.wrapper";
import { NextIntlClientProvider } from "next-intl";
import logo from "./favicon.ico";
import { getMessages } from "next-intl/server";
import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import "primeicons/primeicons.css";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NProgressWrapper>
          <NextIntlClientProvider messages={messages}>
            <NextAuthWrapper>
              <ThemeProvider>
                <Themefull>{children}</Themefull>
              </ThemeProvider>
            </NextAuthWrapper>
          </NextIntlClientProvider>
        </NProgressWrapper>
      </body>
    </html>
  );
}
