"use client";
import type { Metadata } from "next";
import 'swiper/css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import "./globals.css";
import Header from "./container/header/page";
import Footer from "./container/footer";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '@fortawesome/fontawesome-free/css/all.min.css';





export default function RootLayout({
  children,
  pageProps = {}, 
}: {
  children: ReactNode;
  pageProps: any; // Sayfa özelliklerini temsil eder, ihtiyaca göre türü ayarla
}) {
  const { session, ...restPageProps } = pageProps;

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Provider store={store}>
            <Header />
            {React.Children.map(children, (child) =>
              React.cloneElement(child as React.ReactElement, { ...restPageProps })
            )}
            <Footer />
            <ToastContainer/>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
