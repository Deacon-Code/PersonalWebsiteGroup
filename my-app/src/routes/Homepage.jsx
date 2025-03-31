import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSecition";
import useScrollToTop from "../hooks/useScrollToTop";

const Homepage = () => {
	useScrollToTop();
	return (
		<div>
			<Navbar />

			<IntroSection />
			<Footer />
		</div>
	);
};

export default Homepage;
