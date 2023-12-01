import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Knight from './Knight.tsx';
// import Square from './Square.tsx';
// import Board from './Board.tsx';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { observe } from './Game';

// const root = document.getElementById('root');

// const render = (knightPosition) => {
//   ReactDOM.createRoot(root).render(
//     <DndProvider backend={HTML5Backend}>
//       <Board knightPosition={knightPosition} />
//     </DndProvider>
//   );
// };

// observe(render);
