"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React from "react";

const Calendar = () => {
  return (
    <div className=" bg-white text-gray-900">
      <div className="bg-white shadow">
        <div className="mx-auto max-w-8xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Calendar
          </h1>
        </div>
      </div>
      <div className="mx-auto py-6 sm:px-6 lg:px-10">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridWeek" />
      </div>
    </div>
  );
};

export default Calendar;
