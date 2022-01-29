import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css"
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="texttransform" element={<TextForm/>} />
        <Route path="texttransform/about" element={<Footer/>} />
      </Routes>
    </>
  );
} 