// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { InputMask } from 'primereact/inputmask';
// import { Menu } from 'primereact/menu';
// import { Button } from 'primereact/button';

// import Draggable from 'react-draggable'; // The default

// //React-Draggable
// import { MouseEvent } from 'react';
// // Remove the duplicate import statement for Draggable
// // import Draggable from 'react-draggable';

// function App() {
//   const eventLogger = (e: MouseEvent, data: Object) => {
//     console.log('Event: ', e);
//     console.log('Data: ', data);
//   };

//   return (
//     <Draggable
//       handle=".handle"
//       defaultPosition={{ x: 0, y: 0 }}
//       position={null}
//       grid={[25, 25]}
//       scale={1}
//       onStart={eventLogger}
//       onDrag={eventLogger}
//       onStop={eventLogger}
//     >
//       <div>
//         <div className="handle">Drag from here</div>
//         <div>This readme is really dragging on...</div>
//       </div>
//     </Draggable>
//   );
// }

// export default App



//
// import React, { useState } from 'react';
// import { Stage, Layer, Rect, Text } from 'react-konva';
// import Konva from 'konva';

// const ColoredRect = () => {
//   const [color, setColor] = useState('green');

//   const handleClick = () => {
//     setColor(Konva.Util.getRandomColor());
//   };

//   return (
//     <Rect
//       x={20}
//       y={20}
//       width={50}
//       height={50}
//       fill={color}
//       shadowBlur={5}
//       onClick={handleClick}
//     />
//   );
// };


// function App() {
//   return (
//     <Stage width={window.innerWidth} height={window.innerHeight}>
//       <Layer>
//         <Text text="Try click on rect" />
//         <ColoredRect />
//       </Layer>
//     </Stage>
//   );
// }


// export default App;


import image from './assets/plan.jpg';
import styled from 'styled-components';
import ElementComponent from './ElementComponent';
import { useEffect, useState } from 'react';

const Plan = styled.div`
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid black;
`;

function App() {

  const [file, setFile] = useState(null);
  const [background, setBackground] = useState<string>("");

  useEffect(() => {
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setBackground(imageURL);
    }
    else {
      setBackground("");
    }
  }, [file]);

  const handleImage = () => {
    console.log("ok");
  };

  const handleFileChange = (e) => {
    console.log(e)
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile);
  };

  return (
    <div>
      <form action="">
        <input type="file" name="avatar" accept="image/png, image/jpeg" onChange={handleFileChange} />
        <button onClick={() => setFile('')}>clear</button>
      </form>
      <Plan style={{ backgroundImage: `url(${background})` }} onClick={handleImage} >
        <ElementComponent />
      </Plan>
    </div>
  );
}

export default App;