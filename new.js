import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the current counter value
  const [counter, setCounter] = useState(0);

  // Stacks to store the history for undo/redo
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  // Increment the counter
  const increment = () => {
    setUndoStack([...undoStack, counter]); // Save the current state to undo stack
    setRedoStack([]); // Clear redo stack
    setCounter(counter + 1); // Increment counter
  };

  // Decrement the counter
  const decrement = () => {
    setUndoStack([...undoStack, counter]); // Save the current state to undo stack
    setRedoStack([]); // Clear redo stack
    setCounter(counter - 1); // Decrement counter
  };

  // Undo the last action
  const undo = () => {
    if (undoStack.length === 0) return; // No action to undo
    const previousState = undoStack[undoStack.length - 1]; // Get the last state
    setRedoStack([...redoStack, counter]); // Save current state to redo stack
    setCounter(previousState); // Set counter to the last state
    setUndoStack(undoStack.slice(0, -1)); // Remove last state from undo stack
  };

  // Redo the last undone action
  const redo = () => {
    if (redoStack.length === 0) return; // No action to redo
    const nextState = redoStack[redoStack.length - 1]; // Get the last state to redo
    setUndoStack([...undoStack, counter]); // Save current state to undo stack
    setCounter(nextState); // Set counter to the redone state
    setRedoStack(redoStack.slice(0, -1)); // Remove last state from redo stack
  };

  return (
    <div className="App">
      <h1>Counter Application with Undo/Redo</h1>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={undo} disabled={undoStack.length === 0}>Undo</button>
        <button onClick={redo} disabled={redoStack.length === 0}>Redo</button>
      </div>
    </div>
  );
}

export default App;
