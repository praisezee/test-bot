import useMainContext from "../hooks/useMainContext";
import Button from "./Button";
import img from "../assets/Diss.jpg"

export function Counter() {
  const { fadingNumber, handleClick, user,
  diss} = useMainContext()

  return (
    <div className="h-100 py-5">
      <div className="d-flex flex-column justify-content-center align-items-center h-10 bg-custom text-light rounded-4 shadow-success container">
        <p className="h1 mb-0 fw-bold">{ user.tap }</p>
        <p className="text-gray fw-bold ">
          <img src={ img } alt="" className="coin" />
          <span className="ms-2">{diss} $DISS</span>
        </p>
      </div>
      <Button fadingNumber={fadingNumber} onClick={handleClick}/>
    </div>
  );
}
