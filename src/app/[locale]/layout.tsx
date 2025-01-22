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
import Head from "next/head";

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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
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
