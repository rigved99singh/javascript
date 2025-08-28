const symbols = ['🍎','🍌','🍇','🍓','🍉','🍒','🍊','🍍'];
  let cards = [];
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let moves = 0;
  let timer = null;
  let time = 0;
  let gameStarted = false;

  const gameBoard = document.getElementById('gameBoard');
  const timeEl = document.getElementById('time');
  const movesEl = document.getElementById('moves');
  const startBtn = document.getElementById('startBtn');
  const resetBtn = document.getElementById('resetBtn');

  startBtn.addEventListener('click', startGame);
  resetBtn.addEventListener('click', resetGame);

  function startGame() {
    if (gameStarted) return;
    gameStarted = true;
    time = 0;
    moves = 0;
    timeEl.textContent = time;
    movesEl.textContent = moves;
    setupBoard();
    startTimer();
  }

  function resetGame() {
    stopTimer();
    gameBoard.innerHTML = '';
    gameStarted = false;
    time = 0;
    moves = 0;
    timeEl.textContent = time;
    movesEl.textContent = moves;
  }

  function setupBoard() {
    // Duplicate and shuffle cards
    cards = [...symbols, ...symbols];
    cards.sort(() => 0.5 - Math.random());
    gameBoard.innerHTML = '';

    cards.forEach(symbol => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.symbol = symbol;
      card.textContent = '';
      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
    });

    firstCard = null;
    secondCard = null;
    lockBoard = false;
  }

  function flipCard() {
    if (!gameStarted || lockBoard) return;
    if (this === firstCard) return;

    this.textContent = this.dataset.symbol;
    this.classList.add('flipped');

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;
    moves++;
    movesEl.textContent = moves;

    checkForMatch();
  }

  function checkForMatch() {
    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
      resetTurn();
      checkGameOver();
    } else {
      setTimeout(() => {
        firstCard.textContent = '';
        secondCard.textContent = '';
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetTurn();
      }, 800);
    }
  }

  function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
  }

  function checkGameOver() {
    const allFlipped = [...document.querySelectorAll('.card')]
      .every(card => card.classList.contains('flipped'));
    if (allFlipped) {
      stopTimer();
      alert(`🎉 You won in ${moves} moves and ${time} seconds!`);
    }
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(() => {
      time++;
      timeEl.textContent = time;
    }, 1000);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }