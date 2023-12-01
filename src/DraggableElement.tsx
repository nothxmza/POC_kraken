import { useDrag } from 'react-dnd';
import Knight from './Knight';

const DraggableElement = ({ id, left, top }) => {
    const [, drag] = useDrag({
        type: 'ELEMENT',
        item: { id, left, top },
    });

    return (
        <div ref={drag} style={{ position: 'absolute', left, top }}>
            <Knight />
        </div>
    );
};

export default DraggableElement;
