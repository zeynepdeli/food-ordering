import React from "react";
import Title from "../title";
import CustomerItem from "./customerItem";

const Customers = () => {
  return (
    <div className="container mx-auto my-20">
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
      <div className="flex gap-x-10">
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
      </div>
    </div>
  );
};

export default Customers;