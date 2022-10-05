import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  function handleNewItem(newItem){
    setTasks([...tasks,newItem])
  }
  function handleDeleteItem(deleteItem){
    setTasks(tasks.filter((item) => item.text !== deleteItem))
  }
  const itemViewed = tasks.filter(
    (item) => category === "All" || item.category === category)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm
      categories={CATEGORIES.filter((c) => c !== "All")}
      onTaskFormSubmit={handleNewItem}/>
      <TaskList
      onDeleteTask={handleDeleteItem} tasks={itemViewed}/>
    </div>
  );
}
export default App;
