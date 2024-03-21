import React, { useState } from 'react';
import Main from './Layouts/Main/Main'
import TaskCard from './components/TaskCard/TaskCard'
import Board from './components/Board/Board'
import Sidebar from './components/Sidebar/Sidebar'
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';

import "./App.css"
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, username: "Ivan Lomeli", task: "Terminar la UI", info: "+3 people" },
    { id: 2, username: "Axcel Emmanuel", task: "Endpoint de users", info: "+3 people" },
    { id: 3, username: "Clara Lilia", task: "Config Server", info: "+3 people" },
    { id: 4, username: "Marco Uriel", task: "API clients", info: "+3 people" },
  ]);

  const [tasks2, setTasks2] = useState([
    { id: 5, username: "Miguel Angel", task: "CRUD Project", info: "+3 people" },
    { id: 6, username: "Maria Garcia", task: "Endpoint de users", info: "+3 people" },
  ]);

  const [tasks3, setTasks3] = useState([
    { id: 9, username: "Juan Perez", task: "Terminar la UI", info: "+3 people" },
    { id: 10, username: "Maria Garcia", task: "Endpoint de users", info: "+3 people" },
    { id: 11, username: "Luis Hernandez", task: "Config Server", info: "+3 people" },
  ]);


  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!active.id !== over.id) {
      setTasks((task) => {
        const oldIndex = tasks.findIndex((task) => task.id === active.id);
        const newIndex = tasks.findIndex((task) => task.id === over.id);
        return arrayMove(task, oldIndex, newIndex);
      });
      setTasks2((task2) => {
        const oldIndex = tasks2.findIndex((task2) => task2.id === active.id);
        const newIndex = tasks2.findIndex((task2) => task2.id === over.id);
        return arrayMove(task2, oldIndex, newIndex);
      });
      setTasks3((task3) => {
        const oldIndex = tasks3.findIndex((task3) => task3.id === active.id);
        const newIndex = tasks3.findIndex((task3) => task3.id === over.id);
        return arrayMove(task3, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <Main>
        <Sidebar></Sidebar>
        <DndContext collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}>
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            <Board title="To Do📝" id="1">
              {tasks.map(task => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  username={task.username}
                  task={task.task}
                  info={task.info}
                />
              ))}
            </Board>
          </SortableContext>
          <SortableContext items={tasks2} strategy={verticalListSortingStrategy}>
            <Board title="In Progress🔄" id="2">
              {tasks2.map(task => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  username={task.username}
                  task={task.task}
                  info={task.info}
                />
              ))}
            </Board>
          </SortableContext>
          <SortableContext items={tasks3} strategy={verticalListSortingStrategy}>
            <Board title="Done✅" id="3">
              {tasks3.map(task => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  username={task.username}
                  task={task.task}
                  info={task.info}
                />
              ))}
            </Board>
          </SortableContext>

        </DndContext>
      </Main>
    </>
  )
}

export default App