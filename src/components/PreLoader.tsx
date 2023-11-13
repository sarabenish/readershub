import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [button, setButton] = useState(true);

  const navigateHome = () => {
    setButton(false);
    navigate("/Home");
  };

  return (
    <div className="body">
      <Box textAlign="center">
        {button && (
          <Button variant="contained" onClick={navigateHome}>
            Let's Explore
          </Button>
        )}
      </Box>
    </div>
  );
}

export default App;
