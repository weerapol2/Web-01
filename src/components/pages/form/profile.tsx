import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";

type Props = {};

export default function Profile({}: Props) {
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
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Profile
            </a>
            <Link
              component={RouterLink}
              to="/Doc"
              className="text-gray-700 hover:text-gray-900"
            >
              เอกสาร
            </Link>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              โปรแกรมเงินเดือน
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              ติดต่อเรา
            </a>
          </nav>
        </div>
      </div>

      {/* Profile Section */}
      <div
        className="container mt-8 mx-auto max-w-4xl relative z-10"
        style={{ paddingTop: "100px" }} // เพิ่ม paddingTop เพื่อให้เนื้อหาไม่ชนกับ AppBar
      >
        <Card className="shadow-lg bg-white">
          <CardContent>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={4} className="text-center">
                <Avatar
                  alt="Weerapol"
                  src="https://i.pinimg.com/736x/6a/e8/27/6ae827fcca32bf53c2a286efeb0b145d.jpg"
                  sx={{ width: 150, height: 150 }}
                />
                <Box mt={5} display="flex" justifyContent="flex-start">
                  <Button variant="outlined" color="primary" size="small">
                    แก้ไขโปรไฟล์
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} md={8}>
                <Typography variant="h5" className="font-bold mb-4">
                  ข้อมูลผู้ใช้
                </Typography>
                <div className="space-y-3">
                  <div>
                    <Typography variant="subtitle2" color="textSecondary">
                      ชื่อผู้ใช้:
                    </Typography>
                    <Typography variant="body1">Weerapol</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" color="textSecondary">
                      รหัสศึกษา:
                    </Typography>
                    <Typography variant="body1">65451000-9</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" color="textSecondary">
                      Email:
                    </Typography>
                    <Typography variant="body1">weerapo55@gmail.com</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" color="textSecondary">
                      สาขา:
                    </Typography>
                    <Typography variant="body1">วิศวกรรมคอมพิวเตอร์</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" color="textSecondary">
                      คณะ:
                    </Typography>
                    <Typography variant="body1">วิศวกรรมศาสตร์</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <div className="container mt-8 mx-auto max-w-4xl relative z-10">
        <Card className="shadow-lg bg-white">
          <CardContent>
            <Typography variant="h6" className="font-bold mb-4">
              กิจกรรมล่าสุด
            </Typography>
            <ul className="list-disc list-inside">
              <li>ส่งคำร้องลางานเมื่อวันที่ 10 กันยายน 2023</li>
              <li>ได้รับการอนุมัติการลางานเมื่อวันที่ 12 กันยายน 2023</li>
              <li>แก้ไขโปรไฟล์เมื่อวันที่ 5 สิงหาคม 2023</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
