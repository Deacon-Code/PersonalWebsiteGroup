import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalendarComponent from "../components/Calendar";

const Calendar = () => {
	return (
		<div>
			<Navbar />
			<CalendarComponent />
			<Footer />
		</div>
	);
};

export default Calendar;
