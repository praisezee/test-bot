import useMainContext from "../hooks/useMainContext";
import ThreeDButton from "./Button";

export function Counter() {
  const {counter,showNumber,position,handleClick,userId} = useMainContext()

  return (
    <>
    {/* <div className="button-container">
      <p>{ userId }</p>
      <div className="button-holder">
        <button className="oblique-button" onClick={handleClick}>
        <img
          src={img}
          alt="Button Icon"
            className="button-image"
            draggable={ false }
            
        />
        { showNumber && counter.map( count => (
          <span
            className="counter-display"
            style={ { top: position.top, left: position.left } }
            key={counter.indexOf(count)}
          >
            { count }
          </span>
        ) ) }
      </button>
      </div>
    </div> */}
    
      <ThreeDButton />
    </>
  );
}
