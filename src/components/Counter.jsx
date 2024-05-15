import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState([]);
  const [showNumber, setShowNumber] = useState(false);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  const handleClick = () => {
    setCounter([...counter,1]);
    setShowNumber(true);

    // Generate random position
    const randomTop = Math.random() * 80 + 10 + '%';
    const randomLeft = Math.random() * 80 + 10 + '%';
    setPosition({ top: randomTop, left: randomLeft });

    setTimeout(() => {
      setShowNumber(false);
    }, 1000);
  };

  return (
    <div className="button-container">
      <button className="oblique-button" onClick={handleClick}>
        <img
          src="vite.svg"
          alt="Button Icon"
          className="button-image"
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
  );
}
