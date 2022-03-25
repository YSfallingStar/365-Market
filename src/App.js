import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/layout/Theme';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Community from './components/pages/Community';
import Mypage from './components/pages/Mypage';
import ChatList from './components/pages/ChatList';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/chat" element={<ChatList />} />
            <Route path="/myPage" element={<Mypage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;