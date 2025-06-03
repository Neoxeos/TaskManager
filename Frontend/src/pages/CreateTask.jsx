import { Container, Heading, Box, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { createTask } from "../store/TaskCard";
import { useToast } from "@chakra-ui/react";

const CreateTask = ({oneTaskChange}) => {
    const toast = useToast();
    const [newTask , setNewTask] = useState({
        title: "",
        description: "",
        completed: false,
        startDate: "",
        endDate: ""
    });

    const handleCreateTask = async () => {
        const { success, task } = await createTask(newTask);

        if (success) {
            toast({
                title: 'Task created.',
                description: "Task has been created successfully.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            oneTaskChange(newTask);
        } else {
            toast({
                title: 'Error creating task.',
                description: "Task has not been created successfully.",
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }

    return (
        <Container maxW="container.md" p={4}>
           <VStack spacing={8}>
                <Heading fontSize="2xl" textAlign="center" mt={10}>
                    Create New Task
                </Heading>
                <Box mt={8} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
                    <Input variant='outline' placeholder='Task Name' value={newTask.title} onChange={(e) => setNewTask( {...newTask, title:e.target.value})}/>
                    <Input mt={2} variant='outline' placeholder='Description (optional)' value={newTask.description} onChange={(e) => setNewTask( {...newTask, description:e.target.value})}/>
                    <Input mt={2} type="boolean" variant='outline' placeholder='Completed?' value={newTask.completed} onChange={(e) => setNewTask( {...newTask, completed:e.target.value})}/>
                    <Input mt={2} placeholder='Select Date and Time' size='md' type='datetime-local' />
                    <Button mt={2} colorScheme="blue" w="full" onClick={handleCreateTask}>Enter</Button>
                </Box>
             </VStack>
        </Container>
    )
};

export default CreateTask;