
'use client'
import { useState,useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Merquee from "./components/Merquee";
import BlogSection from "./components/BlogSection";
import Hireme from "./components/Hireme";
import ImageCard from "./components/RadiusCard";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[])
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = "";
    }
  },[isDarkMode])
  return (
   
  
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Service isDarkMode={isDarkMode} />
      <Hireme isDarkMode={isDarkMode}></Hireme>
      <Work isDarkMode={isDarkMode} />
      <Merquee isDarkMode={isDarkMode} ></Merquee>
      <BlogSection></BlogSection>
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode} />
  <ImageCard></ImageCard>
    </>
  );
}
