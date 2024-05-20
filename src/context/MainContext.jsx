/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";


const MainContext = createContext({})

export const MainProvider = ( { children } ) =>
{
  const [user,setUser] = useState({})
  const [ counter, setCounter ] = useState( 1 );
  const [value,setValue] = useState(0)
  const [fadingNumber,setFadingNumber] = useState([])
  

  const handleClick = (e) =>
  {
    const btnRec = e.currentTarget.getBoundingClientRect()
    const newNumber = {
      id: value,
      value: counter,
      x: e.clientX - btnRec.left,
      y: e.clientY - btnRec.top
    };
    setValue( value + counter )

    setFadingNumber([...fadingNumber,newNumber])

    setTimeout( () =>
    {
      setFadingNumber(numbs => numbs.filter(num => num.id !== newNumber.id))
    }, 3000);
  };

  useEffect( () =>
  {
    setUser( { ...user, tap: value } )
  }, [ value ] )
  
  useEffect( () =>
  {
    const app = window.Telegram?.WebApp;
    console.log( app );
    console.log(app.initDataUnsafe)
    setUser(app.initDataUnsafe)
  },[])



  return (
    <MainContext.Provider value={ { counter, fadingNumber, handleClick, user } }>
      {children}
    </MainContext.Provider>
  )
};

export default MainContext;