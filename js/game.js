class Game {
    constructor() {
        this.name = 'player'
        this.point = 0;
        this.level = 1;
        this.sequenceLength = 5;
        this.botSequence = []; // Initialiser un tableau vide pour stocker la séquence de l'ordinateur
        this.playerSequence = []; // Initialiser un tableau vide pour stocker la séquence du player
        this.buttons = [blueBtn, greenBtn, redBtn, yellowBtn];
    }

    addBotSequence() {
        let count = 0;
        const intervalID = setInterval(() => {
            const selectedBtn = this.buttons[Math.floor(Math.random() * this.buttons.length)];
            selectedBtn.style.opacity = '0.2';
            setTimeout(() => {
                selectedBtn.style.opacity = '1';
            }, 400);
            ++count;
            console.log(`selectedBtn => ${typeof selectedBtn.id}`);
            this.botSequence.push(selectedBtn.id); // Ajouter l'id du bouton sélectionné à la fin du tableau btnSequence
            if (count >= this.sequenceLength) {
                clearInterval(intervalID);
            }
            if (count === this.sequenceLength) {
                console.log(`Sequence completed!`);
                console.log(`botSequence => ${this.botSequence}`);
            }
        }, 500);
    }
    addPlayerSequence() {
        this.buttons.map(btn => {
            btn.addEventListener('click', () => {
                this.playerSequence.push(btn.id)
                console.log(this.playerSequence)
                console.log(`botSeq => ${this.botSequence} playerSeq => ${this.playerSequence}`)
                if (this.playerSequence.length === this.sequenceLength) {
                    this.verifySequences();
                }
            })
        })
        console.log(this.botSequence.length, this.playerSequence.length, this.sequenceLength)
    }

    verifySequences() {
        console.log('on verify !!!')
        this.botSequence.join() === this.playerSequence.join() ? ++this.point : console.log('you loose')
        this.botSequence = []
        console.log(`point ==> ${this.point}`)
    }
}