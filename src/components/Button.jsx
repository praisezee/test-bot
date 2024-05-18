/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';


const ButtonMesh = ( { onClick, showNumber, count, position, numberRef } ) =>
{
  const texture = useTexture('./diss_bg_0.png');
  return (
    <mesh onClick={onClick} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 0.5]} />
      <meshStandardMaterial map={texture} />
      {showNumber && (
        <Html position={[position.x, position.y, 0.26]}>
          <div
            ref={numberRef}
            style={{
              color: 'white',
              fontSize: '20px',
              transition: 'opacity 1s',
            }}
          >
            {count}
          </div>
        </Html>
      )}
    </mesh>
  );
};

const ThreeDButton = () => {
  const [count, setCount] = useState(0);
  const [showNumber, setShowNumber] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const numberRef = useRef();

  const handleClick = () => {
    setCount(count + 1);
    setPosition({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
    });
    setShowNumber(true);

    setTimeout(() => {
      setShowNumber(false);
    }, 1000);
  };

  useEffect(() => {
    if (numberRef.current) {
      numberRef.current.style.opacity = 1;
      setTimeout(() => {
        if (numberRef.current) numberRef.current.style.opacity = 0;
      }, 1000);
    }
  }, [showNumber]);

  return (
    <div className="three-d-button">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ButtonMesh
          onClick={handleClick}
          showNumber={showNumber}
          count={count}
          position={position}
          numberRef={numberRef}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDButton;