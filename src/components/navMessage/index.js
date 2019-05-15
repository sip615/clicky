import React, { Component } from "react";
import "./style.css";

class NavMessage extends component {
	state = {
		message: "",
		animating: false
	};
	componentDidUpdate({ score, topScore }, prevState) {
		const newState = { animating: true };
		if (score === 0 && topScore === 0) {
			newState.message = "";
		} else if (score === 0 && topScore > 0) {
			newState.message = "IIInnnncorrect!";
		} else {
			newState.message = "correctomundo!!";
		}

		if (score !== this.props.score || this.state.message !== newState.message) {
			this.setState(newState);
		}
	}

	renderMessage = () => {
		switch (this.state.message) {
			case "correct":
				return "Yeah! You did it!";
			case "incorrect":
				return "Nope!";
			default:
				return "Click-A-Pic to Start-errrrrrrUP!!";
		}
	};
	render() {
		return (
			<li
				className={this.state.animating ? this.state.message : ""}
				onAnimationEnd={() => this.setSatate({ animating: false })}
			>
				{this.renderMessage()}
			</li>
		);
	}
}

export default NavMessage;
