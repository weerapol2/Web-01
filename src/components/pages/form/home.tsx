import { Link as RouterLink } from "react-router-dom"; // นำเข้า Link จาก react-router-dom
import Link from "@mui/material/Link"; // นำเข้า Link จาก MUI
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

type Props = {};

export default function Home({}: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/LoginPages"); // กำหนดเส้นทงที่คุณต้องการไป
  };
  return (
    <div className="flex flex-col w-full">
      {/* Top Menu Bar */}
      <div className="bg-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">
            Eleave<span className="text-red-700 text-primary">.KSU</span>
          </div>
          <nav className="space-x-4 flex items-center">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              หน้าหลัก
            </a>
            <Link
              component={RouterLink} // ใช้ RouterLink แทน
              to="/profile"
              className="text-gray-700 hover:text-gray-900"
            >
              Profile
            </Link>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              ค่าบริการ
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              โปรแกรมเงินเดือน
            </a>

            <Avatar
              alt="Travis Howard"
              src="https://i.pinimg.com/736x/6a/e8/27/6ae827fcca32bf53c2a286efeb0b145d.jpg"
              className="w-16 h-16 "
            />
          </nav>
        </div>
      </div>

      {/* Central Background Image */}
      <div className="flex-grow bg-cover bg-center h-96 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("/public/imgs/_dcd49a93-2334-4649-a0a0-1b4568093131.jpg")',
            opacity: 0.3,
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-black">
          <div>
            <h1 className="text-gray-600 text-7xl font-bold">
              ระบบลางานออนไลน์
            </h1>
            <p className="mt-4 text-2xl">ฟังก์ชันครบครัน ใช้งานง่าย สะดวก</p>
            <p className="mt-4 text-2xl">
              ถ้าคุณกำลังมองหา ระบบลางานออนไลน์ ที่ดีที่สุด โปรดติดต่อเรา
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4">
        <div className="flex justify-around items-center space-x-4 flex-wrap">
          {/* Item 1 */}
          <div className="text-center flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AdUnitsIcon"
              width="80"
              height="80"
            >
              <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 18H7V5h10zM8 6h8v2H8z"></path>
            </svg>
            <p className="text-sm mt-2 max-w-xs text-center break-words">
              สะดวก รวดเร็ว ลาได้ทุกที่ทุกเวลา
              "พนักงานสามารถขอยื่นการลางานได้ทุกที่ ทุกเวลา
              ในขณะที่ผู้บริหารก็สามารถพิจารณาอนุมัติการลางานได้แม้จะไม่ได้อยู่ในบริษัท"
            </p>
          </div>

          {/* Item 2 */}
          <div className="text-center flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AccessibilityNewIcon"
              width="80"
              height="80"
            >
              <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"></path>
            </svg>
            <p className="text-sm mt-2 max-w-xs text-center break-words">
              ตรวจสอบสถานะได้ง่าย ลดการผิดพลาด
              "ผู้ใช้งานสามารถตรวจสอบสถานะการลาของตนเอง
              หรือของพนักงานคนอื่นได้ง่าย เช่น การลาที่ยังไม่อนุมัติ
              การลาที่ยังเหลืออยู่"
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-center flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AddToQueueIcon"
              width="80"
              height="80"
            >
              <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3z"></path>
            </svg>
            <p className="text-sm mt-2 max-w-xs text-center break-words">
              เช็คสถานะการลา
              "ผู้ใช้งานสามารถตรวจสอบสถานะการลาของตนเองหรือของพนักงานอื่นได้แบบเรียลไทม์
              เช่น การลาที่อยู่ระหว่างการพิจารณา การลาที่ได้รับการอนุมัติ "
            </p>
          </div>

          {/* Item 4 */}
          <div className="text-center flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CalendarMonthIcon"
              width="80"
              height="80"
            >
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"></path>
            </svg>
            <p className="text-sm mt-2 max-w-xs text-center break-words">
              แสดงวันลาของผู้ใช้งาน แสดงวันลาของทีม
              การแจ้งเตือนวันหยุดหรือวันสำคัญ การซิงโครไนซ์กับปฏิทินอื่น
              "ผู้ใช้งานสามารถดูวันที่ตนเองลาหรือได้ทำการจองวันลาไว้ในอนาคตได้"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
