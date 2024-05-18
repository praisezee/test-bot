/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";


const MainContext = createContext({})

export const MainProvider = ( { children } ) =>
{
  const [userId,setUserId] = useState('')
  const [counter, setCounter] = useState([]);
  const [showNumber, setShowNumber] = useState(false);
  const [ position, setPosition ] = useState( { top: '50%', left: '50%' } );
  

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
    <MainContext.Provider value={ {counter,showNumber,position,handleClick,userId} }>
      {children}
    </MainContext.Provider>
  )
};

export default MainContext;