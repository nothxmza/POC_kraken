// import React, { useRef, useState, useEffect } from 'react';
// import { Stage, Layer, Rect, Group, Text, Transformer } from 'react-konva';

// const ElementComponent = () => {
//   const [listGroupShutter, setListGroupShutter] = React.useState<JSX.Element[]>([]);
//   const [listGroupLight, setListGroupLight] = React.useState<JSX.Element[]>([]);
//   const [selectedId, setSelectedId] = useState();
//   const [selectGroup, setSelectGroup] = useState();
//   const transformerRef = useRef();
//   const groupRefs = useRef({});

//   const [spaces, setSpaces] = useState([{
//     id: 1,
//     width: 500,
//     height: 500,
//     shutter: [{ id: 1, x: 0, y: 0, width: 100, height: 100 }, { id: 2, x: 200, y: 200, width: 100, height: 100 }],
//     light: [{ id: 1, x: 300, y: 300, width: 100, height: 100 }, { id: 2, x: 400, y: 400, width: 100, height: 100 }]
//     },{
//     id: 2,
//     width: 500,
//     height: 500,
//     shutter: [{ id: 1, x: 600, y: 0, width: 100, height: 100 }, { id: 2, x: 600, y: 300, width: 100, height: 100 }],
//     light: [{ id: 1, x: 800, y: 0, width: 100, height: 100 }, { id: 2, x: 800, y: 300, width: 100, height: 100 }]
//     }
// ]);
  
//   const stageWidth = innerWidth;
//   const stageHeight = 500;
//   const rectWidth = 100;
//   const rectHeight = 100;

//   const handleDragEnd = (e) => {
//     console.log(`New coordinates: x=${e.target.x()}, y=${e.target.y()}`);
//   };

//   const dragBoundFunc = (pos) => {
//     const x = Math.max(0, Math.min(stageWidth - rectWidth, pos.x));
//     const y = Math.max(0, Math.min(stageHeight - rectHeight, pos.y));
//     return { x, y };
//   };

//   const handleTransformEnd = (e, id) => {
//     const node = groupRefs.current[id];
//     const scaleX = node.scaleX();
//     const scaleY = node.scaleY();

//     node.scaleX(scaleX);
//     node.scaleY(scaleY);

//     console.log('Transform ended for', id);
//     console.log('Width:', scaleX * rectWidth, 'Height:',scaleY * rectHeight);
//   };

//   useEffect(() => {
//     if (selectedId && groupRefs.current[selectedId]) {
//       transformerRef.current.nodes([groupRefs.current[selectedId]]);
//       transformerRef.current.getLayer().batchDraw();
//     }
//   }, [selectedId]);



//   const handleClick = (e, id) => {
//     setSelectedId(id);
//     const group = groupRefs.current[id];
//     const x = group.x();
//     const y = group.y();
//     const width = group.scaleX();
//     const height = group.scaleY();
//     console.log(`Coordinates: x=${x}, y=${y} width=${width * rectWidth} height=${height * rectHeight} id=${id}`);

//   }

//   const InsertGroupShutter = () => {
//     const id = `shutter-${listGroupShutter.length}`;
//     setListGroupShutter((list) => [
//       ...list,
//       <Group
//         draggable
//         key={id}
//         ref={(ref) => (groupRefs.current[id] = ref)}
//         onDragEnd={handleDragEnd}
//         dragBoundFunc={dragBoundFunc}
//         onClick={(e) => handleClick(e,id)}
//         onTransformEnd={(e) => handleTransformEnd(e, id)}
//       >
//         <Rect width={rectWidth} height={rectHeight} fill="blue" />
//         <Text
//           text="Shutter"
//           fontSize={20}
//           fill="white"
//           width={rectWidth}
//           height={rectHeight}
//           align="center"
//           verticalAlign="middle"
//         />
//       </Group>,
//     ]);
//   };

  
//   const InsertGroupLight = () => {
//     const id = `light-${listGroupLight.length}`;
//     setListGroupLight((list) => [
//       ...list,
//       <Group
//         draggable
//         key={id}
//         ref={(ref) => (groupRefs.current[id] = ref)}
//         onDragEnd={handleDragEnd}
//         dragBoundFunc={dragBoundFunc}
//         onClick={(e) => handleClick(e,id)}
//         onTransformEnd={(e) => handleTransformEnd(e, id)}
//       >
//         <Rect width={rectWidth} height={rectHeight} fill="yellow" />
//         <Text
//           text="Light"
//           fontSize={20}
//           fill="black"
//           width={rectWidth}
//           height={rectHeight}
//           align="center"
//           verticalAlign="middle"
//         />
//       </Group>,
//     ]);
//   };

//   const checkDeselect = (e) => {
//     // deselect when clicked on empty area
//     const clickedOnEmpty = e.target === e.target.getStage();
//     console.log("clickedOnEmpty", clickedOnEmpty);
//     if (clickedOnEmpty) {
//         setSelectedId('');
//     }
//   };

//   return (
//     <>
//       <Stage width={stageWidth} height={stageHeight} onMouseDown={checkDeselect} onTouchStart={checkDeselect}>
//         <Layer>
//           {listGroupShutter}
//           {listGroupLight}
//           {selectedId && (
//           <Transformer ref={transformerRef} />
//           )}
//         </Layer>
//       </Stage>
//       <button onClick={InsertGroupShutter}>Ajouter un shutter</button>
//       <button onClick={InsertGroupLight}>Ajouter une light</button>
//     </>
//   );
// };

// export default ElementComponent;










import React, { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Rect, Group, Text, Transformer } from 'react-konva';


const Shutters = ({shutters}) => {

    const handleClick = (e) => {
        const group = e.target.getParent();
        const x = group.x();
        const y = group.y();
        const id = group.index;
        console.log(`Coordinates: ${x}, ${y}, id=${id}`);
    }

    return (
        shutters.map((shutter) => (
            <Group key={shutter.id} x={shutter.x} y={shutter.y} onClick={(e) => handleClick(e)}>
                <Rect width={shutter.width} height={shutter.height} fill="blue" />
                <Text
                    text="Shutter"
                    fontSize={20}
                    fill="white"
                    width={shutter.width}
                    height={shutter.height}
                    align="center"
                    verticalAlign="middle"
                />
            </Group>
        ))
    )

}

const Lights = ({lights}) => {
    const handleClick = (e) => {
        const group = e.target.getParent();
        const x = group.x();
        const y = group.y();
        const id = group.index;
        console.log(`Coordinates: ${x}, ${y}, id=${id}`);
    }
    return (

        lights.map((light) => (
            <Group key={light.id} x={light.x} y={light.y} onClick={(e) => handleClick(e)}>
                <Rect width={light.width} height={light.height} fill="yellow" />
                <Text
                    text="Light"
                    fontSize={20}
                    fill="black"
                    width={light.width}
                    height={light.height}
                    align="center"
                    verticalAlign="middle"
                />
            </Group>
        ))
    )

}



const ElementComponent = () => {
  const [selectedId, setSelectedId] = useState();

const [zones, setZones] = useState([{
    id: 1,
    x: 0,
    y: 0,
    width: 500,
    height: 500,
    color: 'red',
    shutter: [{ id: 1, x: 0, y: 0, width: 100, height: 100 }, { id: 2, x: 200, y: 200, width: 100, height: 100 }],
    light: [{ id: 1, x: 300, y: 300, width: 100, height: 100 }, { id: 2, x: 400, y: 400, width: 100, height: 100 }]
}]);
const [createMode, setCreateMode] = useState(false);
const [idCreated, setIdCreated] = useState();
const [listGroupLight, setListGroupLight] = React.useState<JSX.Element[]>([]);
const [positionlight, setPositionLight] = useState([{ id:0, x: 0, y: 0 }]);
  
  const stageWidth = innerWidth;
  const stageHeight = 500;
  const rectWidth = 100;
  const rectHeight = 100;

  const handleDragEnd = (e) => {
    let x = e.target.x();
    let y = e.target.y();
        console.log(`New coordinates: x=${x}, y=${y} id=${e.target.index}`);

        setPositionLight((prevPositions) => {
          const existingPosition = prevPositions.find(pos => pos.id === e.target.index);
          if (existingPosition) {
            // Update existing position
            return prevPositions.map((pos) =>
              pos.id === e.target.index ? { ...pos, x: x, y: y } : pos
            );
          } else {
            // Add new position
            return [...prevPositions, { id: e.target.index, x: x, y: y }];
          }
        });
      };
    
      const dragBoundFunc = (pos) => {
        const x = Math.max(0, Math.min(stageWidth - rectWidth, pos.x));
        const y = Math.max(0, Math.min(stageHeight - rectHeight, pos.y));
        return { x, y };
      };
    

  const createGroupLight = () => {

    let id = listGroupLight.length;
        setListGroupLight((list) => [
          ...list,
          <Group
            draggable
            key={id}
            onDragEnd={handleDragEnd}
            dragBoundFunc={dragBoundFunc}
          >
            <Rect width={rectWidth} height={rectHeight} fill="yellow" />
            <Text
              text="Light"
              fontSize={20}
              fill="black"
              width={rectWidth}
              height={rectHeight}
              align="center"
              verticalAlign="middle"
            />
          </Group>,
        ]);
      };

const handleCreateZone = () => {
    setCreateMode(true);
    setIdCreated(zones.length + 1);
    let x = zones[zones.length - 1].x + 500;
    const newZone = {
        id: zones.length + 1,
        x: x,
        y: 0,
        width: 500,
        height: 500,
        color: 'red',
        shutter: [],
        light: []
    }
    setZones([...zones, newZone]);
    localStorage.setItem('zones', JSON.stringify(zones));
}

const handleValider = () => {
    setCreateMode(false);
    const light = positionlight.map((pos) => {
        console.log(pos);
        return {
            id: pos.id,
            x: pos.x,
            y: pos.y,
            width: 100,
            height: 100
        };
    });

    if(light.length > 0) {
        zones[zones.length - 1].light = light;
    }
    setListGroupLight([]);
}
console.log(zones);

const zonesList = JSON.parse(localStorage.getItem('zones') || '[]');
console.log(zonesList);
  return (
    <>
      <Stage width={stageWidth} height={stageHeight}>
            {zones &&  zones.map((zone) => (
                <Layer key={zone.id}>
                    <Rect
                    x={zone.x}
                    y={zone.y}
                    width={zone.width}
                    height={zone.height}
                    fill={zone.color}
                    opacity={0.2}
                    stroke={'black'}
                    />
                    <Shutters shutters={zone.shutter} />
                    <Lights lights={zone.light} />
                </Layer>
            ))}
            {createMode && (
                <Layer>
                    {listGroupLight}
                </Layer>
            )}
      </Stage>
      <button onClick={() => handleCreateZone()}>Ajouter une zone</button>
      <button onClick={createGroupLight}>Ajouter une light</button>
      <button onClick={() => handleValider()}>Valider</button>
    </>
  );
};

export default ElementComponent;






 //gere les zones dans chaque zone cree des groupes de shutter et light et ensuite pouvoir les repositioner directement

