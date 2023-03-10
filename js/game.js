class Game {
    constructor() {
        this.name = 'player'
        this.point = 0;
        this.level = 1;
        this.sequenceLength = 2;
        this.botSequence = []; // Initialiser un tableau vide pour stocker la séquence de l'ordinateur
        this.playerSequence = []; // Initialiser un tableau vide pour stocker la séquence du player
        this.buttons = [blueBtn, greenBtn, redBtn, yellowBtn];
        this.gameResult
    }

    addBotSequence() {
        let count = 0;
        const intervalID = setInterval(() => {
            const selectedBtn = this.buttons[Math.floor(Math.random() * this.buttons.length)];
            selectedBtn.style.opacity = '0.3';
            setTimeout(() => {
                selectedBtn.style.opacity = '1';
            }, 800);
            ++count;
            this.botSequence.push(selectedBtn.id); // Ajouter l'id du bouton sélectionné à la fin du tableau botSequence
            if (count >= this.sequenceLength) {
                clearInterval(intervalID);
            }
        }, 1000);
    }

    verifySequences() {
        if (this.botSequence.join() === this.playerSequence.join()) {
            this.gameResult = `You pass to the level${this.level}`
            return true
        } else {
            this.gameResult = `You stay at the level${this.level}`
            return false
        }
    }

    restart() {
        if (this.verifySequences()) {
            this.point += this.sequenceLength
            ++this.level
            ++this.sequenceLength
        }
        this.botSequence = []
        this.playerSequence = []
        this.addBotSequence()
    }
}