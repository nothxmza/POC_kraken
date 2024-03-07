import React from 'react';
import { Stage, Layer, Rect, Group, Text } from 'react-konva';



const ElementComponent = () => {
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);
    const [listGroup, setListGroup] = React.useState<JSX.Element[]>([]);
    const stageWidth = window.innerWidth;
    const stageHeight = 500;
    const rectWidth = 100;
    const rectHeight = 100;
    const posT = [
        {
            x: 0,
            y: 0
        },
        {
            x:100,
            y:100
        },
        {
            x:200,
            y:200
        },
        {
            x:300,
            y:300
        },]

    const handleDragEnd = (e) => {
        console.log(e)
        console.log(`Nouvelles coordonnees pour ${e.target.index}: x=${e.target.x()}, y=${e.target.y()}`);
        setX(e.target.x());
        setY(e.target.y());
    }

    const dragBoundFunc = (pos) => {
        // Limite les coordonnées du rectangle pour qu'il reste dans la zone du canvas
        const x = Math.max(0, Math.min(stageWidth - rectWidth, pos.x));
        const y = Math.max(0, Math.min(stageHeight - rectHeight, pos.y));
        return { x, y };
    }

    const handleTextClick = (e, key) => {
        console.log(e, key)
        listGroup.map((group, index) => {
            console.log(index, key)
            if (index === key - 1) {
                console.log("okkkk")
                console.log(group)
            }
        })
    }
    const InsertGroup = () => {
        setListGroup(listGroup => [...listGroup,
        <Group
            draggable
            dragEventId={listGroup.length}
            key={listGroup.length}
            onDragEnd={handleDragEnd}
            dragBoundFunc={dragBoundFunc}
            onClick={(e) => handleTextClick(e, listGroup.length)}
        >
            <Rect
                width={rectWidth}
                height={rectHeight}
                fill="blue"
            />
            {/* <Text
                text={`x=${x}, y=${y}`}
                fontSize={20}
                fill="white"
                width={rectWidth}
                height={rectHeight}
                align="center"
                verticalAlign="middle"
            /> */}
        </Group>
        ])
    }

    return (
        <>
            <Stage width={stageWidth} height={stageHeight}>
                <Layer>
                    {posT.map((pos, index) => {
                        return (
                            <Group
                                draggable
                                key={index}
                                onDragEnd={handleDragEnd}
                                dragBoundFunc={dragBoundFunc}
                                x={pos.x}
                                y={pos.y}
                            >
                                <Rect
                                    width={rectWidth}
                                    height={rectHeight}
                                    fill="red"
                                />
                                <Text
                                    fill="white"
                                    width={rectWidth}
                                    height={rectHeight}
                                />
                            </Group>
                        )
                    })}
                    {/* {listGroup.map((group) => {
                        return group;
                    })} */}
                    {/* <Group
                    draggable
                    onDragEnd={handleDragEnd}
                    dragBoundFunc={dragBoundFunc}
                    x={x}
                    y={y}
                >
                    <Rect
                        width={25}
                        height={25}
                        fill="red"

                    />
                    <Text
                        fill="white"
                        width={rectWidth}
                        height={rectHeight}
                    />
                </Group> */}
                </Layer>
            </Stage>
            <button onClick={InsertGroup}>Ajouter un élément</button>
        </>
    )
}

export default ElementComponent;
