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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      
        <Provider store={store}>
          <Header/>
          {children}
       <Footer/>
        </Provider>
      </body>
    </html>
  );
}
