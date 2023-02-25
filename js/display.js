class Display {
    constructor() {
        this.game = new Game()
        this.init()
        this.updateDisplay()
    }
    init() {
        this.pointH2 = document.querySelector('.point')
        this.levelH3 = document.querySelector('.level')
        this.sequenceLengthH3 = document.querySelector('.sequenceLength')
        this.result = document.querySelector('.result')
        this.startBtn = document.querySelector('#startBtn')
        this.game.buttons.map(btn => {
            btn = document.querySelector(`#${btn.id}`)
        })
        this.startBtn.addEventListener('click', () => {
            this.game.addBotSequence()
        })
        this.addPlayerSequence()
        this.game.buttons.map(btn => {
            btn.addEventListener('click', () => {
                if (this.game.playerSequence.length === this.game.sequenceLength) {
                    this.updateDisplay()
                    console.log('update display')
                }
            })
        })
    }
    addPlayerSequence() {
        this.game.buttons.map(btn => {
            btn.addEventListener('click', () => {
                this.game.playerSequence.push(btn.id) // Ajouter l'id du bouton sélectionné à la fin du tableau playerSequence
                btn.style.opacity = '0.3';
                setTimeout(() => {
                    btn.style.opacity = '1';
                }, 200);
                if (this.game.playerSequence.length === this.game.sequenceLength) {
                    console.log('hello=>', this.game.playerSequence.length)
                    this.game.verifySequences()
                    this.game.restart()
                    this.updateDisplay()
                }
            })
        })
    }
    updateDisplay() {
        this.pointH2.innerText = `Point : ${this.game.point}`
        this.levelH3.innerText = `Level : ${this.game.level}`
        this.sequenceLengthH3.innerText = `Sequence lenght : ${this.game.sequenceLength}`
        if (this.game.gameResult) {
            this.sequenceLengthH3.innerText = this.game.gameResult
        }
        console.log('update display')
    }
}