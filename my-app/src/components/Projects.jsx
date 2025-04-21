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
								<p>I went up north for a little burr burr. Vodka kinda slaps here though</p>
							</div>
							<Link to="/projects/Project_1" className="btn-project">
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
								<p> I leaked more valuable data to our enemies than a leaky pipe in winter</p>
							</div>
							<Link to="/projects/Project_2" className="btn-project">
								View Project
							</Link>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="Project-card">
						<img
							src= "https://m.media-amazon.com/images/M/MV5BZjlhMzg1MzMtOTMyMi00Mzc5LWIwM2QtYWYyMDM2OTA3MzIyXkEyXkFqcGc@._V1_.jpg"
							alt="Project"
							style={{ width: "100%" }}
						/>
						<div className="inside-card-container">
							<h3>Podcasting</h3>
							<div className="card-info">
								<p>You know, podcasts are low key kinda cool, NGL no cap</p>
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
