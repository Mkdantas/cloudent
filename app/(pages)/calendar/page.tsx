"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'; 
import React from "react";

const Calendar = () => {
  return (
    <div className=" bg-white text-gray-900">
      <div className="mx-auto py-10 sm:px-6 lg:px-10">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          nowIndicator={true}
          slotLabelFormat={{
            hour: "numeric",
            minute: "2-digit",
          }}
          initialView="timeGridWeek"
          displayEventTime={false}
        eventMouseEnter={(e) => {
          e.el.style.background = "#4ca8ff";
        }}
        eventMouseLeave={(e) => {
          e.el.style.background = "#3788d8";
        }}
        // customButtons={{
        //   myCustomButton: {
        //     text: "adicionar novo",
        //     click: function () {
        //       handleShow();
        //     },
        //   },
        // }}
        height={'85vh'}
        contentHeight={'100%'}
        slotMinTime={"09:00:00"}
        slotMaxTime={"19:00:00"}
        selectable={true}
        droppable={true}
        allDaySlot={false}
        editable={true}
        hiddenDays={[0]}
        // dateClick={openModal}
        // eventsSet={handleEvents}
        buttonText={{
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
          list: "lista",
        }}
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5, 6],
          startTime: "09:00",
          endTime: "19:00",
        }}
        defaultTimedEventDuration={"00:30"}
        locale={"pt-br"}
        slotDuration={"00:15:00"}
        />
      </div>
    </div>
  );
};

export default Calendar;
