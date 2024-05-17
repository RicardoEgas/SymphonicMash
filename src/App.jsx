import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import ProfileAudio from './components/ProfileAudio'

const App = () => (
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/profile/audio" element={<ProfileAudio/>}></Route>
  </Routes>
)

export default App