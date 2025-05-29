import { HStack, Text } from "@chakra-ui/react"

const TaskCard = () => {
    return (
        <HStack>
            <Text>Task</Text>
            <Text>Due Date</Text>
            <Text>Status</Text>
            <Text>Priority</Text>
        </HStack>
    )
};

export default TaskCard;