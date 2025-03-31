import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Test from "./routes/Test";
import ProjectHome from "./routes/Projects";
import Calendar from "./routes/Calendar";
import Random from "./routes/Random";

import Project_1 from "./routes/Projects/Project_1";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/test" element={<Test />} />
			<Route path="/calendar" element={<Calendar/>} />
			<Route path="/projects" element={<ProjectHome />} />
			<Route path="*" element={<h1>404 Not Found</h1>} />
			<Route path = "/random" element = {<Random/>}/>


			<Route path="/projects/Project_1" element={<Project_1/>} />
		</Routes>
	);
}

export default App;
