import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import React, { useEffect, useState } from "react";

const App = () => {
  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    fetch("/companyData.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanyData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header data={companyData.main} />
      <About data={companyData.main} />
      {/* <Resume data={companyData.resume} /> */}
      <Portfolio data={companyData.portfolio} />
      {/* <Testimonials data={companyData.testimonials} /> */}
      {/* <Contact data={companyData.main} /> */}
      <Footer data={companyData.main} />
    </div>
  );
};

export default App;
