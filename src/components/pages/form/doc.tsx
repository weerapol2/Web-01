import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { Box, ListItemButton, ListItemText } from "@mui/material";

type Props = {};

export default function AppBarOnly({}: Props) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "0", // ลบ padding ออก
        margin: "0", // ลบ margin ออก
        overflow: "hidden", // ป้องกันไม่ให้เลเยอร์เกินขอบ
        backgroundColor: "#f0f0f0", // สีขาวอมเทา
      }}
    >
      {/* Header */}
      <div
        className="bg-white p-4 shadow-md relative z-10"
        style={{
          position: "fixed", // ให้ AppBar อยู่ติดกับมุมบน
          top: 0,
          left: 0,
          width: "100%", // ทำให้กว้างเต็มหน้าจอ
        }}
      >
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">
            Eleave<span className="text-red-700 text-primary">.KSU</span>
          </div>
          <nav className="space-x-4">
            <Link
              component={RouterLink}
              to="/Home"
              className="text-gray-700 hover:text-gray-900"
            >
              หน้าหลัก
            </Link>
            <Link
              component={RouterLink}
              to="/Profile"
              className="text-gray-700 hover:text-gray-900"
            >
              Profile
            </Link>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              เอกสาร
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              โปรแกรมเงินเดือน
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              ติดต่อเรา
            </a>
          </nav>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          padding: "0",
          margin: "0",
          overflow: "hidden",
          backgroundColor: "#f0f0f0",
        }}
      >
        {/* List Items in Boxes */}
        <div
          style={{
            position: "relative",
            minHeight: "100vh",
            padding: "0",
            margin: "0",
            overflow: "hidden",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div
            style={{
              paddingTop: "100px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px", // ให้มุมมน
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // เงา
                display: "flex",
                flexDirection: "column",
                gap: "20px", // ระยะห่างระหว่างบล็อก
              }}
            >
              {/* Block 1 */}
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                  }}
                >
                  {/* ใส่โลโก้หรือภาพที่นี่ */}
                  <img src="https://i.pinimg.com/564x/1d/91/05/1d910522b6046c321b096274dfe0ed0c.jpg" alt="logo" style={{ width: "24px", height: "24px" }} />
                </Box>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="เอกสารลาป่วย" />
                </ListItemButton>
              </Box>

              {/* Block 2 */}
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                  }}
                >
                  {/* ใส่โลโก้หรือภาพที่นี่ */}
                </Box>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="เอกสารลาพักร้อน" />
                </ListItemButton>
              </Box>

              {/* Block 3 */}
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                  }}
                >
                  {/* ใส่โลโก้หรือภาพที่นี่ */}
                </Box>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="เอกสารลาคลอด" />
                </ListItemButton>
              </Box>

              {/* Block 4 */}
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                  }}
                >
                  {/* ใส่โลโก้หรือภาพที่นี่ */}
                </Box>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="เอกสารลาทำธุระส่วนตัว" />
                </ListItemButton>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
