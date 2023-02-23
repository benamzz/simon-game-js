class Display {
    constructor() {
        this.game = new Game()
        this.init()
    }
    init() {
        this.pointH2 = document.querySelector('.point')
        this.levelH3 = document.querySelector('.level')
        this.sequenceLengthH3 = document.querySelector('.sequenceLength')
        this.startBtn = document.querySelector('#startBtn')
        this.game.buttons.map(btn => {
            console.log('btn = ', btn)
            btn = document.querySelector(`#${btn.id}`)
        })
        console.log('buttons ====> ', this.game.buttons)
        this.game.addPlayerSequence()


        this.startBtn.addEventListener('click', () => {
            this.game.addBotSequence()
        })
        console.log(`botSeq => ${this.game.botSequence} playerSeq => ${this.game.playerSequence}`)
    }
    updateDisplay() {
        this.pointH2.innerText = `Point : ${this.game.point}`
        this.levelH3.innerText = `Level : ${this.game.level}`
        this.sequenceLengthH3.innerText = `Sequence lenght : ${this.game.sequenceLength}`
    }



}