import { createSlice } from "@reduxjs/toolkit";

const setUserChoice = (state, action) => {
  state.userChoice = action.payload;
};

const setHouseChoice = (state) => {
  let houseChoice = 0;
  if (state.mode === "Rock Paper Scissors")
    houseChoice = Math.floor(Math.random() * 3);
  else houseChoice = Math.floor(Math.random() * 5);

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
    case 3:
      state.houseChoice = "Lizard";
      break;
    case 4:
      state.houseChoice = "Spock";
      break;
    default:
      break;
  }
};

const setWinner = (state) => {
  if (state.userChoice === "Rock") {
    if (state.houseChoice === "Rock") {
      state.winner = "Draw";
    } else if (state.houseChoice === "Paper") {
      state.winner = "House";
    } else if (state.houseChoice === "Scissors") {
      state.winner = "User";
    } else if (state.houseChoice === "Lizard") {
      state.winner = "User";
    } else if (state.houseChoice === "Spock") {
      state.winner = "House";
    }
  } else if (state.userChoice === "Paper") {
    if (state.houseChoice === "Rock") {
      state.winner = "User";
    } else if (state.houseChoice === "Paper") {
      state.winner = "Draw";
    } else if (state.houseChoice === "Scissors") {
      state.winner = "House";
    } else if (state.houseChoice === "Lizard") {
      state.winner = "House";
    } else if (state.houseChoice === "Spock") {
      state.winner = "User";
    }
  } else if (state.userChoice === "Scissors") {
    if (state.houseChoice === "Rock") {
      state.winner = "House";
    } else if (state.houseChoice === "Paper") {
      state.winner = "User";
    } else if (state.houseChoice === "Scissors") {
      state.winner = "Draw";
    } else if (state.houseChoice === "Lizard") {
      state.winner = "User";
    } else if (state.houseChoice === "Spock") {
      state.winner = "House";
    }
  } else if (state.userChoice === "Lizard") {
    if (state.houseChoice === "Rock") {
      state.winner = "House";
    } else if (state.houseChoice === "Paper") {
      state.winner = "User";
    } else if (state.houseChoice === "Scissors") {
      state.winner = "House";
    } else if (state.houseChoice === "Lizard") {
      state.winner = "Draw";
    } else if (state.houseChoice === "Spock") {
      state.winner = "User";
    }
  } else if (state.userChoice === "Spock") {
    if (state.houseChoice === "Rock") {
      state.winner = "User";
    } else if (state.houseChoice === "Paper") {
      state.winner = "House";
    } else if (state.houseChoice === "Scissors") {
      state.winner = "User";
    } else if (state.houseChoice === "Lizard") {
      state.winner = "House";
    } else if (state.houseChoice === "Spock") {
      state.winner = "Draw";
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
    popupOpen: false,
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
    setPopup: (state, action) => {
      state.popupOpen = action.payload;
    },
    changeMode: (state) => {
      if (state.mode === "Rock Paper Scissors")
        state.mode = "Rock Paper Scissors Lizard Spock";
      else state.mode = "Rock Paper Scissors";
    },
  },
});

export const { decideWinner, resetGame, setPopup, changeMode } =
  gameSlice.actions;

export default gameSlice;
