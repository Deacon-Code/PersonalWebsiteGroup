import React from "react";
import { Link } from "react-router-dom";
import "./ProjectStyles.css";

const Projects = () => {
	return (
		<div className="card-container">
			<div className="row">
				<div className="column">
					<div className="Project-card">
						<img
							src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b"
							alt="Project"
							style={{ width: "100%" }}
						/>
						<div className="inside-card-container">
							<h3>Project 1</h3>
							<div className="card-info">
								<p>Project Description</p>
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
							src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b"
							alt="Project"
							style={{ width: "100%" }}
						/>
						<div className="inside-card-container">
							<h3>Project 1</h3>
							<div className="card-info">
								<p>Project Description</p>
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
