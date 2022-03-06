import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <CssBaseline />
      <Header />
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
