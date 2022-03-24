<<<<<<< HEAD
import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import AppStateProvider from "./providers/AppStateProvider";
=======
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/layout/Theme';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Community from './components/pages/Community';
import Mypage from './components/pages/Mypage';
import Chat from './components/pages/Chat';
>>>>>>> b8afb1b49ef793d362d461a2928541d0ca59de24

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/myPage" element={<Mypage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;