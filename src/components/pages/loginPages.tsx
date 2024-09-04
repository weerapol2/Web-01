import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { createBrowserRouter } from "react-router-dom";

type Props = {};

export default function LoginPages({}: Props) {
  return (
    <div>
      <Stack
        spacing={2}
        sx={{
          bgcolor: "#fafafa",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/th/thumb/2/2d/LogoEngineering%26IndustrialTechnology%2CKalasinUniversity.png/270px-LogoEngineering%26IndustrialTechnology%2CKalasinUniversity.png"
          width={"auto"}
          height={200}
        />
        <Typography variant="body1" component="h2">
          Login
        </Typography>
        <TextField
          id="outlined-basic"
          label="รหัสนักศึกษา"
          variant="outlined"
          sx={{ width: 400 }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ width: 400 }}
        />
        <Stack direction={"row"} spacing={25} >
        <Link href="#">สมัครสมาชิก</Link>
        <Link href="#" variant="body2">
          {'ลืมรหัสผ่าน'}
        </Link>
        </Stack>
        <Button variant="contained" disableElevation>
          ลงชื่อเข้าใช้
        </Button>
      </Stack>
    </div>
  );
}
