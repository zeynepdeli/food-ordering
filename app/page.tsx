import About from "@/app/about/page";
import Campaigns from "@/app/container/Campaings";
import Carousel from "@/app/container/carousel";
import Footer from "@/app/container/footer";
import Header from "@/app/container/header/page";
import Reservation from "@/app/container/reservation";
import Customers from "@/app/components/customers";
import MenuWrapper from "@/app/products/menuWrapper";
import Image from "next/image";
import Product from "./product/page";

export default function Home() {
  return (
    <>
    
     <Carousel/>
     <Campaigns/>
     <MenuWrapper/>
     <About/>
    <Customers />
    <Reservation/>
  
     </>
  );
}
