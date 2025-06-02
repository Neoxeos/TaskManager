import {Flex, Text, useToast, Button } from "@chakra-ui/react"
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteTask } from "../store/TaskCard";
import { useEffect, useState } from "react";


const TaskCard = ({task, tasks}) => {
    const [newTasks, setNewTasks] = useState(tasks);
    const toast = useToast();

    const handleDelete = async (taskId) => {
        const { success } = await deleteTask(taskId);
        setNewTasks(newTasks.filter((t) => t._id !== taskId));

        if (success) { 
            toast({
                title: 'Task deleted.',
                description: "Task has been deleted successfully.",
                status: 'success',
                duration: 5000,
                isClosable: true,
        })
        } else {
            toast({
                title: 'Error deleting task.',
                description: "Task has not been deleted successfully.",
                status: 'error',
                duration: 5000,
                isClosable: true,
        })
        }
    } 
    
    console.log("newTasks", newTasks);
    return (
        <Flex spacing={8} justify={"space-between"} align="center" p={4} borderWidth={1}>
            <Text mr={5}>{task.title}</Text>
            <Text ml={5} mr={5}>{task.description}</Text>
            <Text>{task.completed ? "Completed" : "Not Completed"}</Text>
            <Text>{task.startDare}</Text>

         <Button onClick={() => handleDelete(task._id)}>
            <RiDeleteBin5Line />
         </Button>
        </Flex>
    )
};

export default TaskCard;