import React from "react";

export default function TodoInput(props) {
  const { value, handleTitleChange, handleKeyDownEvent } = props;

  const keyDownEvent = (e) => {
    handleKeyDownEvent(e.key);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={({ target: { value }}) => handleTitleChange(value)}
      onKeyDown={keyDownEvent}
    />
  );
}
