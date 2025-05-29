
import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

function App() {
  return (
    <Box minH={'140vh'}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Box>
  )
}

export default App
