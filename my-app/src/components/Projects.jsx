import React from "react";
import { Link } from "react-router-dom";
import "./ProjectStyles.css";
import Mother_Russia from "../assets/Mother_Russia.jpg";
import NSA from "../assets/NSA.png";

const Projects = () => {
	return (
		<div className="card-container">
			<div className="row">
				<div className="column">
					<div className="Project-card">
						<img
							src={Mother_Russia} 
							alt="Russia_Project" 
							style={{ width: "100%" }}
						/>
						<div className="inside-card-container">
							<h3>Fleeing to Russia</h3>
							<div className="card-info">
								<p>I Fled to Russia to ensure I could cover my tail when the CIA came after me. I totally am not on Putin's payroll and my family is not in state prision.</p>
							</div>
							<Link to="/" className="btn-project">
								View Project
							</Link>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="Project-card">
						<img
							src= {NSA}
							alt="Project"
							style={{ width: "100%" }}
						/>
						<div className="inside-card-container">
							<h3>Working at the NSA</h3>
							<div className="card-info">
								<p>I worked to leak untold numbers of American secrets to our enemies. However, I can assure your that this was all as a result of my patriotism, not out of any personal self interest. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptates tempora perferendis laborum praesentium voluptatibus, sed itaque, modi animi magnam dolor molestias dolores dolorum architecto asperiores sit aperiam, neque non.</p>
							</div>
							<Link to="/" className="btn-project">
								View Project
							</Link>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="Project-card">
						<img
							src= {NSA}
							alt="Project"
							style={{ width: "100%" }}
						/>
						<div className="inside-card-container">
							<h3>Working at the NSA</h3>
							<div className="card-info">
								<p>I worked to leak untold numbers of American secrets to our enemies. However, I can assure your that this was all as a result of my patriotism, not out of any personal self interest. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptates tempora perferendis laborum praesentium voluptatibus, sed itaque, modi animi magnam dolor molestias dolores dolorum architecto asperiores sit aperiam, neque non.</p>
							</div>
							<Link to="/" className="btn-project">
								View Project
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Projects;
