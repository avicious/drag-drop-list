# Drag & Drop List

A lightweight, dependency-free implementation of a draggable list built with **React** and the native **HTML5 Drag and Drop API**. This project demonstrates how to handle complex state reordering and event propagation without external libraries.

## 🚀 Features
* **Native API:** Uses `onDragStart`, `onDragOver`, and `onDrop` for maximum performance.
* **State-Driven:** Logic is handled via React hooks (`useState`), ensuring the UI stays in sync with the underlying data.
* **Optimized Rendering:** Uses unique IDs for keys to ensure smooth DOM transitions during reordering.

## ⚙️ How It Works

This implementation leverages the **HTML5 Drag and Drop API** in coordination with React's unidirectional data flow. The process follows a specific event lifecycle:

### 1. The Drag Lifecycle
The interaction is handled by three primary event listeners attached to each list item:

* **`onDragStart`**: Triggered the moment the user clicks and begins moving an item. We store the `index` of this item in the parent state (`draggedItemIndex`) so the application knows which "data" is currently in flight.
* **`onDragOver`**: By default, browsers prevent dropping elements onto other elements. We call `event.preventDefault()` here to "enable" the current item as a valid drop zone.
* **`onDrop`**: Triggered when the mouse is released. This provides the `index` of the target location, allowing us to calculate the new order.

### 2. State Synchronization (The Splice Pattern)
To update the UI, we perform a "vnode-safe" array mutation. Since React state should be immutable, we create a copy of the list and rearrange the elements:

1.  **Remove**: We use `.splice(draggedIndex, 1)` to extract the moving item from its original position.
2.  **Insert**: We use `.splice(targetIndex, 0, movedItem)` to inject that same item into the new position.
3.  **Render**: `setList(newList)` triggers a re-render. Because we use unique `item.id` as the React `key`, the browser can efficiently move the DOM nodes rather than re-creating them.

### 3. Visual Feedback
To ensure a professional feel, the following CSS logic is applied:
* **`draggable="true"`**: An HTML attribute required to make an element movable.
* **`cursor: grab`**: Provides a visual cue that the item can be picked up.
* **`user-select: none`**: Prevents the text inside the item from being highlighted while dragging.

## 🛠️ Installation and Setup

Follow these steps to get the project running locally on your machine.

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Clone the Repository

```bash
git clone https://github.com/avicious/drag-drop-list
cd drag-drop-list
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```
