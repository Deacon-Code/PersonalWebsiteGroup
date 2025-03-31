import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalendarComponent from "../components/Calendar";
import GenericHeader from "../components/GenericHeader";
import Eye from "../assets/eye_logo.svg";

const Calendar = () => {
	return (
		<div>
			<Navbar />
			<GenericHeader
				heading="Calendar"
				text="See what I am up to!"
				backgroundColor = "#43c729"
			/>
			<CalendarComponent />
			<Footer />
		</div>
	);
};

export default Calendar;
