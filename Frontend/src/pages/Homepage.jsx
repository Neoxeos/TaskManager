import { HStack, VStack, Text, SimpleGrid, Container } from "@chakra-ui/react";
import TaskCard from "../components/TaskCard";

const Homepage = () => {
    return (
        <Container>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
                {<TaskCard key={TaskCard.id} task={task}/>}
            </SimpleGrid>
        </Container>
    )
};

export default Homepage;