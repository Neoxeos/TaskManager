import { Button, HStack } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <HStack spacing={4} align="stretch" bg="blue.500" p={4} color="white">
            <h1>Navbar</h1>
            <Button colorScheme="teal" variant="solid">Calendar</Button>
        </HStack>
    )
}
export default Navbar;