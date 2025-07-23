import "./App.css";
import BlogCard from "./components/BlogCard";
import "./assets/css/global.css";
import { useState } from "react";

//stylesheet
//inline style
//css module

//css in js (react styled components)

function App() {
  const [isBackgroundChanged, setIsBackgroundChanged] = useState(false);

  const handleBackgroundChange = () => {
    setIsBackgroundChanged(!isBackgroundChanged);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: `${isBackgroundChanged ? "blue" : "green"}`,
          gap: "20px",
          padding: "20px",
        }}
      >
        <BlogCard />
        <BlogCard padding={"20px"} />
      </div>
      <button onClick={() => handleBackgroundChange()}>change color</button>
    </>
  );
}

export default App;

//react styled components
