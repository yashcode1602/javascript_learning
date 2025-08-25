class TicTacToeGame {
    constructor() {
        this.currentPlayer = 'X';
        this.gameState = ['', '', '', '', '', '', '', '', ''];
        this.gameActive = true;
        this.scores = { X: 0, O: 0 };
        
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        this.initializeGame();
    }
    
    initializeGame() {
        this.cells = document.querySelectorAll('.cell');
        this.gameStatus = document.getElementById('gameStatus');
        this.restartBtn = document.getElementById('restartBtn');
        this.resetScoreBtn = document.getElementById('resetScoreBtn');
        this.gameModal = document.getElementById('gameModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalMessage = document.getElementById('modalMessage');
        this.modalBtn = document.getElementById('modalBtn');
        this.scoreX = document.getElementById('scoreX');
        this.scoreO = document.getElementById('scoreO');
        
        this.addEventListeners();
        this.updateGameStatus();
        this.updateScores();
    }
    
    addEventListeners() {
        this.cells.forEach((cell, index) => {
            cell.addEventListener('click', () => this.handleCellClick(index));
        });
        
        this.restartBtn.addEventListener('click', () => this.restartGame());
        this.resetScoreBtn.addEventListener('click', () => this.resetScores());
        this.modalBtn.addEventListener('click', () => this.closeModal());
        
        // Close modal when clicking outside
        this.gameModal.addEventListener('click', (e) => {
            if (e.target === this.gameModal) {
                this.closeModal();
            }
        });
    }
    
    handleCellClick(index) {
        if (this.gameState[index] !== '' || !this.gameActive) {
            return;
        }
        
        this.gameState[index] = this.currentPlayer;
        this.updateCell(index);
        
        if (this.checkWin()) {
            this.handleGameEnd('win');
        } else if (this.checkDraw()) {
            this.handleGameEnd('draw');
        } else {
            this.switchPlayer();
            this.updateGameStatus();
        }
    }
    
    updateCell(index) {
        const cell = this.cells[index];
        cell.textContent = this.currentPlayer;
        cell.classList.add(this.currentPlayer.toLowerCase());
        cell.classList.add('disabled');
        
        // Add animation class
        cell.style.animation = 'none';
        cell.offsetHeight; // Trigger reflow
        cell.style.animation = null;
    }
    
    checkWin() {
        return this.winningConditions.some(condition => {
            const [a, b, c] = condition;
            if (this.gameState[a] === '' || 
                this.gameState[b] === '' || 
                this.gameState[c] === '') {
                return false;
            }
            
            if (this.gameState[a] === this.gameState[b] && 
                this.gameState[b] === this.gameState[c]) {
                this.highlightWinningCells(condition);
                return true;
            }
            
            return false;
        });
    }
    
    highlightWinningCells(winningCondition) {
        winningCondition.forEach(index => {
            this.cells[index].classList.add('winning');
        });
    }
    
    checkDraw() {
        return this.gameState.every(cell => cell !== '');
    }
    
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
    
    updateGameStatus() {
        if (this.gameActive) {
            this.gameStatus.textContent = `Player ${this.currentPlayer}'s Turn`;
            this.gameStatus.style.background = this.currentPlayer === 'X' 
                ? 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 100%)'
                : 'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)';
        }
    }
    
    handleGameEnd(result) {
        this.gameActive = false;
        
        if (result === 'win') {
            this.scores[this.currentPlayer]++;
            this.updateScores();
            this.showModal(`Player ${this.currentPlayer} Wins!`, `Congratulations! Player ${this.currentPlayer} is the winner!`);
        } else {
            this.showModal("It's a Draw!", "Good game! Nobody wins this round.");
        }
    }
    
    showModal(title, message) {
        this.modalTitle.textContent = title;
        this.modalMessage.textContent = message;
        this.gameModal.classList.add('show');
    }
    
    closeModal() {
        this.gameModal.classList.remove('show');
        this.restartGame();
    }
    
    restartGame() {
        this.currentPlayer = 'X';
        this.gameState = ['', '', '', '', '', '', '', '', ''];
        this.gameActive = true;
        
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o', 'disabled', 'winning');
        });
        
        this.updateGameStatus();
        this.gameModal.classList.remove('show');
    }
    
    resetScores() {
        this.scores = { X: 0, O: 0 };
        this.updateScores();
        this.restartGame();
    }
    
    updateScores() {
        this.scoreX.textContent = this.scores.X;
        this.scoreO.textContent = this.scores.O;
    }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToeGame();
});

// Add some extra interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add particle effect on cell click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('cell') && !e.target.classList.contains('disabled')) {
            createClickEffect(e.target, e.clientX, e.clientY);
        }
    });
});

function createClickEffect(element, x, y) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#667eea';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 6;
        const distance = 50 + Math.random() * 30;
        const duration = 500 + Math.random() * 300;
        
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            particle.remove();
        };
    }
}