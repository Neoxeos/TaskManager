import { Box, useColorModeValue } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import { useState, useEffect } from 'react'
import CreateTask from './pages/CreateTask'
import Calendar from './pages/Calendar'

function App() {
  const [taskCard, setTaskCard ] = useState([]);

  useEffect(() => {
    const fetchTaskCards = async () => {
      try {
        const task = await fetch("/api/task");
        const data = await task.json();
        if (data.length !== 0) {
          setTaskCard(data.task);
        } 
      } catch (error) {
          console.log("Error fetching task cards:", error);
      }
    };
    fetchTaskCards();
  }, []);


  return (
    <Box minH={'140vh'} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage task={taskCard}/>} />
        <Route path="/CreateTask" element={<CreateTask/>} />
        <Route path="/Calendar" element={<Calendar/>} />
      </Routes>
    </Box>
  )
}

export default App;
