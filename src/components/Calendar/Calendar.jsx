"use client";

import { Langs } from "@/langs/langs";
import { Months, getMonthNames, getYearsList } from "@/utils/utilfuntions";
import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CalendarHead = ({
  date,
  showMonthSelectorObject,
  showYearSelectorObject,
}) => {
  return (
    <div className="flex justify-center gap-4 min-w-[10rem]">
      <span
        className="font-bold cursor-pointer"
        onClick={showMonthSelectorObject}
      >
        {getMonthNames[date.getMonth()]}
      </span>
      <span
        className="font-bold cursor-pointer"
        onClick={showYearSelectorObject}
      >
        {date.getFullYear()}
      </span>
    </div>
  );
};

const getCalendarDayStyle = (date, selectedDate = new Date(), available) => {
  if (date && date != "-") {
    let _dateYear = date.getFullYear();
    let _dateMonth = date.getMonth();
    let _dateDay = date.getDate();

    let _selectedYear = selectedDate.getFullYear();
    let _selectedMonth = selectedDate.getMonth();
    let _selectedDay = selectedDate.getDate();

    let _currentDate = new Date();
    let _currentYear = new Date().getFullYear();
    let _currentMonth = new Date().getMonth();
    let _currentDay = new Date().getDate();

    if (date <= _currentDate) {
      return {
        class: `w-full flex justify-center items-center !w-8 h-8 rounded-md bg-[--color-disable] transitions`,
        disable: true,
      };
    }

    if (!available) {
      return {
        class: `w-full flex justify-center items-center !w-8 h-8 rounded-md bg-[--cancel-color] text-white  transitions`,
        disable: true,
      };
    }

    if (
      _dateYear === _selectedYear &&
      _dateMonth === _selectedMonth &&
      _dateDay === _selectedDay
    ) {
      return {
        class: `w-full flex justify-center items-center !w-8 h-8 rounded-md bg-[--color-selected] text-white  cursor-pointer hover:shadow-lg transitions`,
        disable: false,
      };
    }

    if (
      _dateYear > _currentYear ||
      _dateMonth > _currentMonth ||
      _dateDay > _currentDay
    ) {
      return {
        class: `w-full flex justify-center items-center !w-8 h-8 rounded-md bg-[--color-light]  cursor-pointer hover:shadow-lg transitions`,
        disable: false,
      };
    }
  }
};

const checkDayAvailability = (unavailableDays, date) => {
  if (unavailableDays && date) {
    let _dateToCheck = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    if (unavailableDays.includes(_dateToCheck.toISOString())) {
      return false;
    } else {
      return true;
    }
  }
};

const CalendarDay = (
  key = "key",
  date,
  selectedDate = new Date(),
  unavailableDates,
  onClicked
) => {
  const _isAvailable = checkDayAvailability(unavailableDates, date);
  const dayNode = document.createElement("div");
  const behavior = getCalendarDayStyle(date, selectedDate, _isAvailable);

  if (date === "-") {
    dayNode.className = `w-full flex justify-center items-center !w-8 h-8 rounded-md bg-[--color-disable] transitions`;
    dayNode.setAttribute("disabled", true);
  } else {
    dayNode.className = behavior.class;
    dayNode.setAttribute("disabled", behavior.disable);
    if (!behavior.disable) {
      dayNode.onclick = () => onClicked(date);
    }
  }

  dayNode.innerHTML = date === "-" ? date : date.getDate();

  return dayNode;
};

const MonthSelector = ({
  hideMonthSelectorObject,
  selectedDate,
  handleDateSelection,
}) => {
  const selectedMonth = selectedDate.getMonth();

  const handleSelection = (selectedMonth) => {
    let _selectedDate = new Date(selectedDate.getFullYear(), selectedMonth, 1);
    handleDateSelection(_selectedDate);
    hideMonthSelectorObject();
  };
  return (
    <div className="absolute z-[50] animatedEntrance py-2 px-4 bg-white shadow-xl rounded-md">
      {Months.map((monthItem, index) => (
        <div
          key={index}
          className={`cursor-pointer hover:bg-[--color-secondary] ${
            selectedMonth === monthItem.value ? "bg-[--color-match]" : ""
          } w-full rounded-md flex justify-center items-center py-1 px-2`}
          onClick={() => {
            handleSelection(monthItem.value);
          }}
        >
          <span className="">{monthItem.text}</span>
        </div>
      ))}
    </div>
  );
};

const YearSelector = ({
  hideYearSelectorObject,
  selectedDate,
  handleDateSelection,
}) => {
  const _selectedYear = selectedDate.getFullYear();

  const handleSelection = (selectedYear) => {
    let _selectedDate = new Date(selectedYear, selectedDate.getMonth(), 1);
    handleDateSelection(_selectedDate);
    hideYearSelectorObject();
  };

  const _yearList = getYearsList();

  return (
    <div className="absolute z-[50] animatedEntrance py-2 px-4 bg-white shadow-xl rounded-md">
      {_yearList.map((yearItem, index) => (
        <div
          key={index}
          className={`cursor-pointer hover:bg-[--color-secondary] ${
            _selectedYear === yearItem.value ? "bg-[--color-match]" : ""
          } w-full rounded-md flex justify-center items-center py-1 px-2`}
          onClick={() => {
            handleSelection(yearItem.value);
          }}
        >
          <span className="">{yearItem.text}</span>
        </div>
      ))}
    </div>
  );
};

const Calendar = ({
  id,
  calendarStyles,
  selectorStyles,
  selectedDatesStyles,
  marketDates,
  onSelectionChange,
  loading
}) => {
  const sundays = useRef();
  const mondays = useRef();
  const tuesdays = useRef();
  const wednesdays = useRef();
  const thursdays = useRef();
  const fridays = useRef();
  const saturdays = useRef();
  const dayRefs = [
    sundays,
    mondays,
    tuesdays,
    wednesdays,
    thursdays,
    fridays,
    saturdays,
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [showMonthSelector, setShowMonthSelector] = useState(false);
  const [showYearSelector, setShowYearSelector] = useState(false);
  

  const handleNextMonthClick = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      newDate.setDate(1);
      return newDate;
    });
  };

  const handlePrevMonthClick = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      newDate.setDate(1);
      return newDate;
    });
  };

  const fillCalendar = () => {
    // Find the first day of the month
    const firstDayOfWeek = daysInMonth[0]?.getDay();

    // Add empty spaces before the first day
    for (let i = 0; i < firstDayOfWeek; i++) {
      if (dayRefs[i].current) {
        dayRefs[i].current.appendChild(CalendarDay(i, "-"));
      }
    }

    // Fill refs with corresponding days from daysInMonth
    daysInMonth.forEach((day) => {
      const dayOfWeek = day.getDay(); // 0 for Sunday, 1 for Monday, etc.
      const dayRef = dayRefs[dayOfWeek];

      if (dayRef.current) {
        dayRefs[dayOfWeek].current.appendChild(
          CalendarDay(
            day.getDate(),
            day,
            selectedDate,
            marketDates,
            handleDateSelection
          )
        );
      }
    });
  };

  const getMonthDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let _daysInMonth = [];

    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
      _daysInMonth.push(new Date(day));
    }

    setDaysInMonth((prevData) => _daysInMonth);
  };

  const showMonthSelectorObject = () => {
    setShowMonthSelector((stateData) => true);
  };

  const hideMonthSelectorObject = () => {
    setShowMonthSelector((stateData) => false);
  };

  const showYearSelectorObject = () => {
    setShowYearSelector((stateData) => true);
  };

  const hideYearSelectorObject = () => {
    setShowYearSelector((stateData) => false);
  };

  const handleDateSelection = (newDate) => {
    setSelectedDate((prevData) => newDate);
  };

  const validateBackward = () => {
    const _currentDate = new Date();
    if (
      selectedDate.getFullYear() >= _currentDate.getFullYear() &&
      selectedDate.getMonth() > _currentDate.getMonth()
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    getMonthDays();

    // Clear previous content in refs
    dayRefs.forEach((ref) => {
      while (ref.current.firstChild) {
        ref.current.removeChild(ref.current.firstChild);
      }
    });
    onSelectionChange(selectedDate, "date");
    fillCalendar();
    
  }, [daysInMonth.length, selectedDate, marketDates]);

  return (
    <div
      id={id}
      className={`flex relative flex-col px-4 py-2 gap-4 ${calendarStyles}`}
    >
      {loading ?  (
        <div className="absolute inset-0 z-[10]  !rounded-md">
          <div className="w-full h-full absolute inset-0 z-[5] glassmorphism"></div>
          <div className="relative w-full h-full z-[8] flex justify-center items-center">
            <span className=""><img src="/loading-54.gif" alt="LOADING..." className="w-[8rem] h-[8rem] rounded-full" /></span>
          </div>
        </div>
      ) : <></>}
      <div
        id="calendarHeader"
        className="w-full flex gap-4 mt-2 justify-center items-center"
      >
        {validateBackward() ? (
          <div
            className="bg-[--color-secondary] px-2 py-1  rounded-md cursor-pointer hover:shadow-xl transitions"
            onClick={handlePrevMonthClick}
          >
            <span className="text-[.8rem]">
              <FaArrowLeft />
            </span>
          </div>
        ) : (
          <div className="bg-[--color-disable] px-2 py-1  rounded-md cursor-pointer transitions">
            <span className="text-[.8rem]">
              <FaArrowLeft />
            </span>
          </div>
        )}
        {showMonthSelector ? (
          <MonthSelector
            hideMonthSelectorObject={hideMonthSelectorObject}
            selectedDate={selectedDate}
            handleDateSelection={handleDateSelection}
          />
        ) : (
          <></>
        )}
        {showYearSelector ? (
          <YearSelector
            hideYearSelectorObject={hideYearSelectorObject}
            selectedDate={selectedDate}
            handleDateSelection={handleDateSelection}
          />
        ) : (
          <></>
        )}
        <CalendarHead
          date={selectedDate}
          showMonthSelectorObject={showMonthSelectorObject}
          showYearSelectorObject={showYearSelectorObject}
        />
        <div
          className="bg-[--color-secondary] px-2 py-1  rounded-md cursor-pointer hover:shadow-xl transitions"
          onClick={handleNextMonthClick}
        >
          <span className="text-[.8rem]">
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div id="calendarWrapper" className="w-full flex justify-between">
        <div className="w-full flex flex-col justify-start items-center">
          <div className="font-bold text-[.8rem] underline">
            {Langs["en"].globalUI.sunday}
          </div>
          <div
            ref={sundays}
            className="flex flex-col gap-2 justify-between py-2"
          ></div>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <div className="font-bold text-[.8rem] underline">
            {Langs["en"].globalUI.monday}
          </div>
          <div
            ref={mondays}
            className="flex flex-col gap-2 justify-between py-2"
          ></div>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <div className="font-bold text-[.8rem] underline">
            {Langs["en"].globalUI.tuesday}
          </div>
          <div
            ref={tuesdays}
            className="flex flex-col gap-2 justify-between py-2"
          ></div>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <div className="font-bold text-[.8rem] underline">
            {Langs["en"].globalUI.wednesday}
          </div>
          <div
            ref={wednesdays}
            className="flex flex-col gap-2 justify-between py-2"
          ></div>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <div className="font-bold text-[.8rem] underline">
            {Langs["en"].globalUI.thursday}
          </div>
          <div
            ref={thursdays}
            className="flex flex-col gap-2 justify-between py-2"
          ></div>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <div className="font-bold text-[.8rem] underline">
            {Langs["en"].globalUI.friday}
          </div>
          <div
            ref={fridays}
            className="flex flex-col gap-2 justify-between py-2"
          ></div>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <div className="font-bold text-[.8rem] underline">
            {Langs["en"].globalUI.saturday}
          </div>
          <div
            ref={saturdays}
            className="flex flex-col gap-2 justify-between py-2"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
