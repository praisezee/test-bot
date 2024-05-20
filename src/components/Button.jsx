/* eslint-disable react/prop-types */
import img from "../assets/diss_bg_0.png"

const Button = ({onClick,fadingNumber}) => {
  return (
    <div className='button-container'>
      <div className="btn-holder">
        <button className="custom-button" onClick={ onClick }>
          <img src={ img } className="button-image" alt="" />
          { fadingNumber.map( num => (
            <span className="floating-number" key={ num.id } style={{ left:`${num.x}px`, top: `${num.y}px` }}>
              +{num.value}
            </span>
          ))}
        </button>
      </div>
    </div>
  )
}

export default Button
