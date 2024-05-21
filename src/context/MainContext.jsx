/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const MainContext = createContext({})

export const MainProvider = ( { children } ) =>
{
  const navigate = useNavigate()
  const [user,setUser] = useState({})
  const [ counter, setCounter ] = useState( 1 );
  const [ value, setValue ] = useState( 0 )
  const [diss,setDiss] =useState(null)
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
    setDiss(value/1000)
  }, [ value ] )
  
  useEffect( () =>
  {
    try {
      const app = window.Telegram?.WebApp;
    console.log( app );
      console.log( app.initDataUnsafe );
      /* app.CloudStorage.getItem( app.initDataUnsafe.user.id, ( data ) =>
    {
      if ( data ) {
        const retrivedData = JSON.parse( data )
          setUser( retrivedData )
          setCounter(retrivedData?.counter || 1)
      } else {
        console.error( "No data Found" )
        navigate('/create')
      }

    }) */
    setUser( { ...app.initDataUnsafe.user, tap: 0 } )
    setDiss(value/100)
    } catch (error) {
      console.error(error.message)
    }
  },[])



  return (
    <MainContext.Provider value={ { counter, fadingNumber, handleClick, user,diss } }>
      {children}
    </MainContext.Provider>
  )
};

export default MainContext;