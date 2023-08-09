import "./style.css";


export const Timeline = ({ className, actualQuestion }) => {

  return (
    <div className={`component ${className}`}>
      <div className="overlap-group">
        <img className="line" alt="Line" />
        <div id="ellipse0" className={`ellipse ${actualQuestion == 0 && 'activeEllipse'}`} />
        <div id="ellipse1" className={`ellipse-1 ${actualQuestion == 1 && 'activeEllipse'}`} />
        <div id="ellipse2" className={`ellipse-2 ${actualQuestion == 2 && 'activeEllipse'}`} />
        <div id="ellipse3" className={`ellipse-3 ${actualQuestion == 3 && 'activeEllipse'}`} />
      </div>
    </div>
  );
};
