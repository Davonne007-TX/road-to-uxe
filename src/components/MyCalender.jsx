import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <section className="mt-10">
      <Calendar onChange={onChange} value={value} />
    </section>
  );
}

export default MyCalender;
