import React, { Component } from "react";
import hat from "./images/hat.png";
import quizQuestions from "./components/quizQuestions";

import "./App.css";

const questionsData = [
  {
    id: 1,
    question:
      "You are making a PowerPoint presentation for a class project. You...",
    options: [
      "Take charge, organize everyone, and end up doing almost everything.",
      "Do as little as you can. Ah, the perks of group projects.",
      "Do a little of everything.",
      "Do most of the research and writing, but let other people make it flashy."
    ]
  },
  {
    id: 2,
    question: "Do you cheat in class?",
    options: [
      "Absolutely Not!",
      "You try not to, but sometimes its the only way to stay afloat.",
      "Yes, a fair amount. Everybody does it...",
      "If you count sharing answers and helping friends who are struggling, then yes."
    ]
  },
  {
    id: 3,
    question: "When you die, you hope to...",
    options: [
      "Be wealthy enough to provide for many generations of your family.",
      "Have achieved success and traveled the world.",
      "Be surrounded by lifelong friends.",
      "Have learned everything there is to know."
    ]
  },
  {
    id: 4,
    question: "You see a group of bullies picking on a nerd. You...",
    options: [
      "Go up to the bullies and yell in their faces.",
      "Find the nerd afterwards and reach out to him.",
      "Sympathize with the nerd but walk on by.",
      "Think its a little funny."
    ]
  },
  {
    id: 5,
    question: "How do you flirt with someone you like?",
    options: [
      "You dont, youll tell someone straight-up if you like them.",
      "Try to have a real, deep conversation.",
      "You make witty jokes and smile coyly to charm the pants off them.",
      "You deliver a great, cheesy pick-up line or wink at them."
    ]
  },
  {
    id: 6,
    question:
      "You get home from the corner store and notice you were a little undercharged. You...",
    options: [
      "Drive back to the store and pay the difference.",
      "Dont worry about it, its only a few dollars off.",
      "Will tell them next time you shop there.. if you ever go back.",
      "Cant believe your luck."
    ]
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: questionsData,
      questions: questionsData.question,
      options: questionsData.options
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the sorting hat!</h1>
          <img className="hat-image" src={hat} />
          <p className="text">Click Me To Begin!</p>
        </header>
        <quizQuestions />
      </div>
    );
  }
}

export default App;
