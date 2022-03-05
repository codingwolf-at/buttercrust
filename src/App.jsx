import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './components';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
