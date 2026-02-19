import { Grip } from "lucide-react";
import styles from "./DraggableItem.module.css";

const DraggableItem = ({
  item,
  index,
  setDraggedItemIndex,
  draggedItemIndex,
  handleReorder,
}) => {
  const onDragStart = (e) => {
    setDraggedItemIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = () => {
    if (draggedItemIndex === null || draggedItemIndex === index) return;
    handleReorder(draggedItemIndex, index);
  };

  return (
    <div
      draggable="true"
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={styles.card}
    >
      <Grip className={styles.icon} />
      <div className={styles.avatar}>{item.label.charAt(0)}</div>
      <div className={styles.label}>{item.label}</div>
    </div>
  );
};

export default DraggableItem;
