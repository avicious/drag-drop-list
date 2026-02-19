import { useState } from "react";
import DraggableItem from "./components/DraggableItem";

const initialList = [
  { id: 1, label: "Steve" },
  { id: 2, label: "Will" },
  { id: 3, label: "Lucas" },
  { id: 4, label: "Mike" },
  { id: 5, label: "Dustin" },
];

const App = () => {
  const [list, setList] = useState(initialList);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleReorder = (draggedIndex, targetIndex) => {
    const newList = [...list];
    const itemToMove = newList.splice(draggedIndex, 1)[0];
    newList.splice(targetIndex, 0, itemToMove);

    setList(newList);
    setDraggedItemIndex(null);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1>Drag & Drop List</h1>
        </div>

        <div className="list-container">
          {list.map((item, index) => (
            <DraggableItem
              key={item.id}
              index={index}
              item={item}
              setDraggedItemIndex={setDraggedItemIndex}
              draggedItemIndex={draggedItemIndex}
              handleReorder={handleReorder}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
