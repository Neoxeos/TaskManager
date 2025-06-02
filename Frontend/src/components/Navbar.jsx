import { Button, Container, Flex, HStack, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon, IoCalendarOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Container maxW={"1140px"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={"row"} >
            <Button colorScheme="teal" variant="solid">
                <Link to={"/"}>Home</Link>
            </Button>
            

            {/* Right Side */}
            <HStack spacing={2} alignItems={"center"}>

                <Link to={"Calendar"}>
                <Button>
                    <IoCalendarOutline />
                </Button>
                </Link>

                <Link to={"CreateTask"}>
                <Button>
                    <PlusSquareIcon fontSize={20}/>
                </Button>
                </Link>

                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon/> : <LuSun/>}
                </Button>
            </HStack>
        </Flex>
        </Container>
    )
}
export default Navbar;