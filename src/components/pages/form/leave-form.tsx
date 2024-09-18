import { Box, Paper, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { addDays, subDays } from "date-fns";
import dayjs from "dayjs";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function LeaveForm() {
  const onChange = (ranges: any) => {
    console.log(ranges);
  };
  return (
    <div className="p-6 bg-card rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">หนังสือขออณุญาตลา</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-muted-foreground">
            เรื่อง
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-border rounded-md p-2"
            placeholder="ขออนุญาตลา"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-muted-foreground">
            เรียน
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-border rounded-md p-2"
            placeholder="คณบดี"
          />
        </div>
        <div className="mb-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>
        <fieldset className="mb-4">
          <legend className="text-sm font-medium text-muted-foreground">
            ขออนุญาต
          </legend>
          <div className="flex items-center">
            <input
              type="radio"
              id="option1"
              name="leaveType"
              className="mr-2"
            />
            <label htmlFor="option1" className="text-sm text-muted-foreground">
              ป่วย
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="option2"
              name="leaveType"
              className="mr-2"
            />
            <label htmlFor="option2" className="text-sm text-muted-foreground">
              คลอดบุตร
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="option3"
              name="leaveType"
              className="mr-2"
            />
            <label htmlFor="option3" className="text-sm text-muted-foreground">
              กิจส่วนตัว
            </label>
          </div>
        </fieldset>
        <div className="mb-4">
          <label className="block text-sm font-medium text-muted-foreground">
            ขอความอนุเคราะห์
          </label>
          <textarea
            className="mt-1 block w-full border border-border rounded-md p-2"
            placeholder="กรุณาอธิบาย"
          ></textarea>
        </div>
        <Calendar onChange={onChange} />
        <div className="mb-4">
          <label className="block text-sm font-medium text-muted-foreground">
            ลายชื่อ
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-border rounded-md p-2"
            placeholder="ลายชื่อ"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-muted-foreground">
            ความเห็นผู้บังคับบัญชา
          </label>
          <textarea
            className="mt-1 block w-full border border-border rounded-md p-2"
            placeholder="ความคิดเห็น"
          ></textarea>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="consent" className="mr-2" />
          <label htmlFor="consent" className="text-sm text-muted-foreground">
            อนุญาต
          </label>
        </div>
        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/80 p-2 rounded-md"
        >
          ส่งคำขอ
        </button>
      </form>
    </div>
  );
}

// const App = () => {
//     const onChange = (ranges: any) => {
//         console.log(ranges)
//     }

//     return (
//         <div className='App'>
//             <Calendar onChange={onChange} />
//         </div>
//     )
// }
// export default App

const Calendar = ({ onChange }: any) => {
  const [state, setState] = useState([
    {
      startDate: subDays(new Date(), 7),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [showPicker, setShowPicker] = useState(false);

  const handleOnChange = (ranges: any) => {
    const { selection } = ranges;
    onChange(selection);
    setState([selection]);
    setShowPicker(false); // ปิด DatePicker หลังจากเลือกวันที่เสร็จ
  };

  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const handleOpenPicker = () => {
    setShowPicker(true);
  };

  const handleClosePicker = () => {
    setShowPicker(false);
  };

  return (
    <div>
      <TextField
        label="เลือกวันที่"
        value={`${formatDate(state[0].startDate)} - ${formatDate(state[0].endDate)}`}
        onMouseDown={handleOpenPicker}
      />
      {showPicker && (
        <Box position="absolute" zIndex={1000} onMouseLeave={handleClosePicker}>
          <Paper elevation={3}>
            <DateRangePicker
              onChange={handleOnChange}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
              showDateDisplay={false}
              staticRanges={[]} // ปิดการแสดงเมนู Static Ranges
              inputRanges={[]} // ปิดการแสดงเมนู Input Ranges
            />
          </Paper>
        </Box>
      )}
    </div>
  );
};
