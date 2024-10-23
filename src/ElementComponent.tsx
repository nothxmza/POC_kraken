

//TRANSOFRMER + SHUTTER + LIGHT


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
import { Stage, Layer, Rect, Group, Text, Transformer, Line } from 'react-konva';


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
                    text={`Shutter ${shutter.id}`}
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
                    text={`Light ${light.id}`}
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


//ZONES + SHUTTERS + LIGHTS + localStorage + CREATION ZONE DYNAMIQUE

const ElementComponent = () => {
  const [zones, setZones] = useState(JSON.parse(localStorage.getItem('zones')) || []);
  const [createMode, setCreateMode] = useState(false);
  const [idCreated, setIdCreated] = useState();
  const [listGroupLight, setListGroupLight] = useState<JSX.Element[]>([]);
  const [listGroupShutter, setListGroupShutter] = useState<JSX.Element[]>([]);
  const [positionLight, setPositionLight] = useState([]);
  const [positionShutter, setPositionShutter] = useState([]);
  const [newZone, setNewZone] = useState(null);
  const [startCoords, setStartCoords] = useState({ x: 0, y: 0 });
  const [lock, setLock] = useState(true);
  const [spaceName, setSpaceName] = useState('');

  const stageWidth = window.innerWidth;
  const stageHeight = 500;
  const rectWidth = 100;
  const rectHeight = 30;

  // Store zones in localStorage
  useEffect(() => {
    localStorage.setItem('zones', JSON.stringify(zones));
  }, [zones]);

  const handleDragEnd = (e) => {
    let device = e.target.attrs.id.split('-')[0];
    let x = e.target.x();
    let y = e.target.y();
    console.log(`New coordinates: x=${x}, y=${y} device=${device}`);

    if(device === 'light') {
      setPositionLight((prevPositions) => {
        const existingPosition = prevPositions.find((pos) => pos.id === e.target.index);
        if (existingPosition) {
          return prevPositions.map((pos) =>
            pos.id === e.target.index ? { ...pos, x: x, y: y } : pos
          );
        } else {
          return [...prevPositions, { id: e.target.index, x: x, y: y }];
        }
       });
      } else {
        setPositionShutter((prevPositions) => {
          const existingPosition = prevPositions.find((pos) => pos.id === e.target.index);
          if (existingPosition) {
            return prevPositions.map((pos) =>
              pos.id === e.target.index ? { ...pos, x: x, y: y } : pos
            );
          } else {
            return [...prevPositions, { id: e.target.index, x: x, y: y }];
          }
        });
      }
  };

  const dragBoundFunc = (pos) => {
    const x = Math.max(0, Math.min(stageWidth - rectWidth, pos.x));
    const y = Math.max(0, Math.min(stageHeight - rectHeight, pos.y));
    return { x, y };
  };

  const createGroupLight = () => {
    let id = `light-${listGroupLight.length}`;
    setListGroupLight((list) => [
      ...list,
      <Group draggable key={id} onDragEnd={handleDragEnd} dragBoundFunc={dragBoundFunc} id={id}>
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

  const createGroupShutter = () => {
    let id = `shutter-${listGroupShutter.length}`;
    setListGroupShutter((list) => [
      ...list,
      <Group draggable key={id} onDragEnd={handleDragEnd} dragBoundFunc={dragBoundFunc} id={id}>
        <Rect width={rectWidth} height={rectHeight} fill="blue" />
        <Text
          text="Shutter"
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
  const handleMouseDown = (e) => {
    if (!createMode || lock) return;

    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    setStartCoords({ x: pointerPosition.x, y: pointerPosition.y });
    setNewZone({
      x: pointerPosition.x,
      y: pointerPosition.y,
      width: 0,
      height: 0,
      color: 'blue',
    });
  };

  const handleMouseMove = (e) => {
    if (!createMode || !newZone || lock) return;

    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const width = pointerPosition.x - startCoords.x;
    const height = pointerPosition.y - startCoords.y;

    setNewZone({
      ...newZone,
      width: Math.abs(width),
      height: Math.abs(height),
      x: width < 0 ? pointerPosition.x : startCoords.x,
      y: height < 0 ? pointerPosition.y : startCoords.y,
    });
  };

  const handleMouseUp = () => {
    if (!createMode || !newZone) return;

    const zoneCreated = {
      id: zones.length + 1,
      x: newZone.x,
      y: newZone.y,
      width: newZone.width,
      height: newZone.height,
      color: 'red',
      shutter: [],
      light: [],
    };

    // Save the newly created zone
    setZones((prevZones) => [...prevZones, zoneCreated]);
    setLock(true);
    setNewZone(null);  // Reset newZone state after saving
  };

  const handleCreateZone = () => {
    setCreateMode(true);
    setLock(false);
  };

  const handleValider = () => {
    setCreateMode(false);

    setZones((prevZones) => {
      const updatedZones = [...prevZones];
      updatedZones[updatedZones.length - 1].name = spaceName;
      return updatedZones;
    })

    const light = positionLight.map((pos) => ({
      id: pos.id,
      x: pos.x,
      y: pos.y,
      width: 100,
      height: 30,
    }));

    if (light.length > 0) {
      console.log("KOJO", light);
      setZones((prevZones) => {
        const updatedZones = [...prevZones];
        updatedZones[updatedZones.length - 1].light = light;
        return updatedZones;
      });
    }
    const shutter = positionShutter.map((pos) => ({
      id: pos.id,
      x: pos.x,
      y: pos.y,
      width: 100,
      height: 30,
    }));

    if (shutter.length > 0) {
      setZones((prevZones) => {
        const updatedZones = [...prevZones];
        updatedZones[updatedZones.length - 1].shutter = shutter;
        return updatedZones;
      });
    }

    setSpaceName('');
    setListGroupLight([]);
    setPositionLight([]);
    setListGroupShutter([]);
    setPositionShutter([]);
  };

  return (
    <>
      <Stage
        width={stageWidth}
        height={stageHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {zones.map((zone) => (
          <Layer key={zone.id}>
            <Group x={zone.x + zone.width / 2} y={zone.y + zone.height / 10}>
              <Rect width={rectWidth} height={rectHeight} fill="black" />
              <Text
                text={zone.name}
                fontSize={20}
                fill="white"
                width={rectWidth}
                height={rectHeight}
                align="center"
                verticalAlign="middle"
              />
             </Group>
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
            {listGroupShutter}
          </Layer>
        )}
        {newZone && (
          <Layer>
            <Rect
              x={newZone.x}
              y={newZone.y}
              width={newZone.width}
              height={newZone.height}
              fill={newZone.color}
              opacity={0.2}
              stroke="blue"
            />
          </Layer>
        )}
        <Layer>
        </Layer>
      </Stage>
      {createMode && (
        <input type="text" value={spaceName} onChange={(e) => setSpaceName(e.target.value)} />
      )}
      
      <button onClick={handleCreateZone}>Ajouter une zone</button>
      <button onClick={createGroupLight}>Ajouter une light</button>
      <button onClick={createGroupShutter}>Ajouter une shutter</button>
      <button onClick={handleValider}>Valider</button>
    </>
  );
};

export default ElementComponent;




 //gere les zones dans chaque zone cree des groupes de shutter et light et ensuite pouvoir les repositioner directement

