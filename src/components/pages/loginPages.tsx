import React from "react";
import Paper from "@mui/material/Paper";
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

type Props = {};

export default function LoginPages({}: Props) {
  const navigate = useNavigate(); // ใช้ useNavigate นอกฟังก์ชัน handleContinueClick

  const handleContinueClick = () => {
    navigate('/Home'); // ใช้ navigate เพื่อไปยังเส้นทาง HomePages
  };

  return (
    <div
      className="bg-gray-100"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full screen height
      }}
    >
      <Box className="bg-white w-96 p-5 rounded-3xl drop-shadow-lg ">
        <Stack
          className="pb-5"
          direction={"column"}
          spacing={2}
          alignItems="center"
        >
          <img
            src="public/imgs/LogoEngineering&IndustrialTechnology,KalasinUniversity.png"
            alt="Logo"
            style={{ width: "170px", height: "170px" }}
          />
          <Typography variant="h5" fontWeight={600}>
            Sign in
          </Typography>
          <TextField
            id="outlined-basic"
            label="รหัสนักศึกษา"
            variant="outlined"
            fullWidth
            style={{ maxWidth: "100%" }} // Ensures the full width inside the parent container
          />
          <TextField
            id="outlined-basic"
            label="รหัสผ่าน"
            variant="outlined"
            fullWidth
            style={{ maxWidth: "100%" }} // Ensures the full width inside the parent container
          />
          <Button
            variant="contained"
            fullWidth
            className="rounded-3xl"
            onClick={handleContinueClick} // adding the click handler
          >
            Continue
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
