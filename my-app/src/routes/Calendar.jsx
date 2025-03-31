import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalendarComponent from "../components/Calendar";
import GenericHeader from "../components/GenericHeader";
import Mother_Russia from "../assets/Mother_Russia.jpg";
import useScrollToTop from "../hooks/useScrollToTop";

const Calendar = () => {
	useScrollToTop();
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
