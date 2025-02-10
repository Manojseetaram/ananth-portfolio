import React from "react";
import ImageCard from "./components/ImageCard"; // Importing the component
import { assets } from "@/assets/assets";
import Image from "next/image";

const App = () => {
  return (
    <div className="flex gap-6 p-6 bg-gray-100 justify-center">
      <ImageCard Image={assets.profile_img} label="UI/UX Design" />
      <ImageCard image="https://via.placeholder.com/300" label="App Design" />
      <ImageCard image="https://via.placeholder.com/300" label="App Design" />
    </div>
  );
};

export default App;
