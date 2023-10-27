import React, {useState} from 'react';
import { createContext, useContext } from "react";
import Task, {TaskType} from "./Task";
import ButtonAction from "./ButtonAction";
import "./ListTasks.css"

const initialTasksState: TaskType[] = [];
const initialListContext: {
    tasks: TaskType[],
    setTasks:  React.Dispatch<React.SetStateAction<TaskType[]>>
} = {
    tasks: [],
    setTasks: function(value: React.SetStateAction<TaskType[]>) {}
};

export const ListContext = createContext(initialListContext);

export default function ListTasks(){
    const [tasks, setTasks] = useState(initialTasksState);
    const [nextTaskNumber, setNextTaskNumber] = useState(1);

    function addItem(){
        const newTask: TaskType = {
            id: nextTaskNumber,
            name: "Новая задача",
            description: "Очень важная задача, которую нужно сделать",
            isCompleted: false,
            date: new Date()
        };
        setTasks([...tasks, newTask]);
        setNextTaskNumber(nextTaskNumber + 1);
    }

    return (
        <div className={"ListTasks"}>
            <ListContext.Provider value={{tasks, setTasks}}>
                {tasks.map((task, i) => {
                    return (<Task data={task} />);
                })}
            </ListContext.Provider>
            <div className={"ListControls"}>
                <ButtonAction text={"➕"} onClicked={addItem} />
            </div>
        </div>
    );
}