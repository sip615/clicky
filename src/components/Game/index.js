import React, { Component } from "react";
import ClickItem from "../ClickItem";
import Container from "../Container";
import Footer from "../Footer";
import Nav from "../Nav";
import Header from "../Header";
import data from "../../data.json";

class Game extends Component {
	state = {
		data,
		score: 0,
		topScore: 0
	};
	componentDidMount() {
		this.setState({ data: this.shuffleData(this.state.data) });
	}
	handleCorrectGuess = newData => {
		const { topScore, score } = this.state;
		const newScore = score + 1;
		const newTopScore = Math.max(newScore, topScore);

		this.setState({
			data: this.shuffleData(newData),
			score: newScore,
			sopScore: newTopScore
		});
	};
	handleIncoorectGuess = data => {
		this.setState({
			data: this.resetData(data),
			score: 0
		});
	};
	resetData = data => {
		const resetData = data.map(item => ({ ...item, clicke: false }));
		return this.shuffleData(resetData);
	};
	//Not completely sure what's going on in the code block. Attempted to get some shuffle type of stuff from the interwebz, but resorted to this example from the solution, (same goes for other parts of the code I couldn't get to work).
	shuffleData = data => {
		let i = data.length - 1;
		while (i > 0) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = data[i];
			data[i] = data[j];
			data[j] = temp;
			i--;
		}
		return data;
	};
	handleItemClick = id => {
		let guessedCorrectly = false;
		const newData = this.state.data.map(item => {
			const newItem = { ...item };
			if (newItem.id === id) {
				if (!newItem.clicked) {
					newItem.clicked = true;
					guessedCorrectly = true;
				}
			}
			return newItem;
		});
		guessedCorrectly
			? this.handleCorrectGuess(newData)
			: this.handleIncoorectGuess(newData);
	};

	redner() {
		return (
			<div>
				<Nav score={this.state.score} topScore={this.state.topScore} />
				<Header />
				<Container>
					{this.state.data.map(item => (
						<ClickItem
							key={item.id}
							id={item.id}
							shake={!this.state.score && this.state.topScore}
							handleClick={this.handleItemClick}
							image={item.image}
						/>
					))}
				</Container>
				<Footer />
			</div>
		);
	}
}

export default Game;
