import {Flex, Text, useToast, Button, Box, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure} from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteTask } from "../store/TaskCard";
import { FaRegEdit } from "react-icons/fa";

const TaskCard = ({task, tasks, taskChange}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const newTasks = tasks.filter((t) => t._id !== task._id);
    const toast = useToast();

    const handleDelete = async (taskId) => {
        const { success } = await deleteTask(taskId);

        if (success) { 
            taskChange(newTasks);
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

    return (
        <Flex spacing={8} justify={"space-between"} align="center" p={4} borderWidth={1}>
            <Text mr={5}>{task.title}</Text>
            <Text ml={5} mr={5}>{task.description}</Text>
            <Text>{task.completed ? "Completed" : "Not Completed"}</Text>
            <Text>{task.startDare}</Text>

            <Box>
                <Button onClick={onOpen}>
                    <FaRegEdit />
                </Button>
                <Button onClick={() => handleDelete(task._id)}>
                    <RiDeleteBin5Line />
                </Button>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Are you sure you want to edit this task?</Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
};

export default TaskCard;