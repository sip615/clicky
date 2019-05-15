import React from "react";
import NavMessage from "../navMessage";
import "./style.css";

function Nav(props) {
	return (
		<nav className="navbar">
			<ul>
				<li className="brand">
					<a href="/">Clickeeeeen Gayme</a>
				</li>
				<NavMessage score={props.score} topScore={props.topScore} />
				<li>
					Score: {props.score} | Top Score: {props.topScore}
				</li>
			</ul>
		</nav>
	);
}
export default Nav;
