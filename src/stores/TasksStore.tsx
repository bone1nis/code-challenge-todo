import { makeAutoObservable } from "mobx";
import { Task } from "../types";

class TasksStore {
    tasks: Task[] = [
        {
            id: "ыва",
            title: "первая",
            description: "описание 1",
            createdAt: 174282403397
        },
        {
            id: "ыва2",
            title: "вторая",
            description: "описание 2",
            createdAt: 1742824013327
        }
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addTask(newTask: Task) {
        this.tasks.push(newTask);
    }

    removeTask(id: Task["id"]) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTask(id: string, newTask: Partial<Task>) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    title: newTask.title as Task["title"],
                    description: newTask.description as Task["description"],
                };
            }
            return task;
        });
    }

}

const store = new TasksStore();
export default store;