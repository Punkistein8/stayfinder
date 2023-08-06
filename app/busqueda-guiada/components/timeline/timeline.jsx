import { useState } from "react";
import "./style.css";


export const Timeline = ({ className }) => {

  const [actualEllipse, setActualEllipse] = useState()

  actualEllipse ? actualEllipse.target.classList.add('activeEllipse') : null

  return (
    <div className={`component ${className}`}>
      <div className="overlap-group">
        <img className="line" alt="Line" />
        <div id="ellipse0" className="ellipse" onClick={setActualEllipse} />
        <div id="ellipse1" className="ellipse-1" onClick={setActualEllipse} />
        <div id="ellipse2" className="ellipse-2" onClick={setActualEllipse} />
        <div id="ellipse3" className="ellipse-3" onClick={setActualEllipse} />
        <div id="ellipse4" className="ellipse-4" onClick={setActualEllipse} />
      </div>
    </div>
  );
};
