import './App.css';
import { Typography } from "@mui/material";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Typography variant="h1" component="div" gutterBottom>
        hello react
      </Typography>
      <Outlet />
    </div>
  );
}

export default App;
