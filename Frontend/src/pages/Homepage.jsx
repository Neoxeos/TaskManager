import {SimpleGrid, Box, Heading , Text} from "@chakra-ui/react";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";


const Homepage = ({task, taskChange}) => {

    return (
        <Box>
            <Heading fontWeight={800} fontSize={40} textAlign="center" mt={5} mb={5} color={"blue.500"} border={"1px solid black"} p={5}>
                Task Management Dashboard
            </Heading>

            <SimpleGrid w={"full"} mt={10} rows={task.length}>
                {task.map((t) => (<TaskCard taskChange={taskChange} tasks={task} key={t._id} task={t}/>))}
            </SimpleGrid>
            
            {task.length === 0 && (
            <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No Tasks{" "}
					<Link to={"/CreateTask"}>
					    <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
						    Create a Task
					    </Text>
					</Link>
		    </Text> )}
        </Box>
    )
};

export default Homepage;