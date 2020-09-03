import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newTodo === "") {
      alert("todo input field must not be empty");
    } else {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="type your todo here"
        value={newTodo}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        add todo
      </button>
    </form>
  );
};
