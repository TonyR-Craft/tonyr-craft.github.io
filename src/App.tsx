import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from './components/appbar/AppAppBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MUIWrapper from './providers/MUIWrapper';

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

const App = () => {
  return (
    <MUIWrapper >
      <CssBaseline />
      <AppAppBar />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </MUIWrapper>
  );
}

export default App;
