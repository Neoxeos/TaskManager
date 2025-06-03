export const createTask = async (newTask) => {

    const res = await fetch("api/task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    });

    if (!res.ok) {
        throw new Error("Failed to create task");
    }

    const data = await res.json();

    return { success: true, task: data.task };
}

export const deleteTask = async (taskId) => {
    try {
    const res = await fetch(`api/task/${taskId}`, {
        method: "DELETE",
    });
    } catch (error) {
        console.error("Error deleting task:", error);
        return { success: false, error: "Failed to delete task" };
    }

    //const data = await res.json();
    //console.log("Task deleted:", data);
    return {success: true};
}

export const createTaskCard = async (newTask) => {
    const res = await fetch("api/task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    });

    const data = await res.json();
    return { success: true, task: data.task};
}
    