import React from "react";
import PetCard from "./PetCard";

const PetList = () => {
  const pets = [
    {
      name: "Susi",
      breed: "Labrador",
      age: "2 years",
      gender: "Female",
      location: "Kollam",
      price: 10000,
      oldPrice: 20000,
      img: "https://placedog.net/200/200?id=1",
    },
    {
      name: "Bruno",
      breed: "Labrador",
      age: "2 years",
      gender: "Male",
      location: "Ernakulam",
      price: 10000,
      oldPrice: 20000,
      img: "https://placedog.net/200/200?id=2",
    },
    {
      name: "Lucky",
      breed: "Labrador",
      age: "2 years",
      gender: "Female",
      location: "Trivandrum",
      price: 10000,
      oldPrice: 20000,
      img: "https://placedog.net/200/200?id=3",
    },
    {
      name: "Charlie",
      breed: "Labrador",
      age: "2 months",
      gender: "Male",
      location: "Pathanamthitta",
      price: 5000,
      oldPrice: 10000,
      img: "https://placedog.net/200/200?id=4",
    },
  ];

  return (
    <div className="flex-1 p-4">
      {pets.map((pet, index) => (
        <PetCard key={index} {...pet} />
      ))}
    </div>
  );
};

export default PetList;
