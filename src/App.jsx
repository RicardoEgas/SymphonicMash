import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'

const App = () => (
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
  </Routes>
)

export default App