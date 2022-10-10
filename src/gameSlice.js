import { createSlice } from "@reduxjs/toolkit";

const setUserChoice = (state, action) => {
  state.userChoice = action.payload;
};

const setHouseChoice = (state) => {
  let houseChoice = 0;
  if (state.mode === "Rock Paper Scissors")
    houseChoice = Math.floor(Math.random() * 3);

  switch (houseChoice) {
    case 0:
      state.houseChoice = "Rock";
      break;
    case 1:
      state.houseChoice = "Paper";
      break;
    case 2:
      state.houseChoice = "Scissors";
      break;
    default:
      break;
  }
};

const setWinner = (state) => {
  if (state.mode === "Rock Paper Scissors") {
    if (state.userChoice === "Rock") {
      if (state.houseChoice === "Rock") {
        state.winner = "Draw";
      } else if (state.houseChoice === "Paper") {
        state.winner = "House";
      } else if (state.houseChoice === "Scissors") {
        state.winner = "User";
      }
    } else if (state.userChoice === "Paper") {
      if (state.houseChoice === "Rock") {
        state.winner = "User";
      } else if (state.houseChoice === "Paper") {
        state.winner = "Draw";
      } else if (state.houseChoice === "Scissors") {
        state.winner = "House";
      }
    } else if (state.userChoice === "Scissors") {
      if (state.houseChoice === "Rock") {
        state.winner = "House";
      } else if (state.houseChoice === "Paper") {
        state.winner = "User";
      } else if (state.houseChoice === "Scissors") {
        state.winner = "Draw";
      }
    }
  }
};

const gameSlice = createSlice({
  name: "game",
  initialState: {
    mode: "Rock Paper Scissors",
    score: 0,
    stage: "Selection",
    userChoice: "Placeholder",
    houseChoice: "Placeholder",
    winner: "Draw",
  },
  reducers: {
    decideWinner: (state, action) => {
      setUserChoice(state, action);
      state.stage = "Results";
      setHouseChoice(state);
      setWinner(state);

      if (state.winner === "User") state.score = state.score + 1;
      else if (state.winner === "House") state.score = state.score - 1;
    },
    resetGame: (state) => {
      state.stage = "Selection";
      state.userChoice = "Placeholder";
      state.houseChoice = "Placeholder";
      state.winner = "Draw";
    },
  },
});

export const { decideWinner, resetGame } = gameSlice.actions;

export default gameSlice;
