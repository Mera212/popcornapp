import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//import App from './App.jsx'
//import './index.css'
import StarRating from "./components/StarRating";
function Test() {
  const [movieRating, setMoviRating] = useState(0);
  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        onSetRating={setMoviRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okey", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={10}
      color="red"
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
