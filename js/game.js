class Game {
    constructor() {
        this.name = 'player'
        this.point = 0;
        this.level = 1;
        this.sequenceLength = 2;
        this.botSequence = []; // Initialiser un tableau vide pour stocker la séquence de l'ordinateur
        this.playerSequence = []; // Initialiser un tableau vide pour stocker la séquence du player
        this.buttons = [blueBtn, greenBtn, redBtn, yellowBtn];
        this.gameResult = false
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
            console.log(`selectedBtn => ${typeof selectedBtn.id}`);
            this.botSequence.push(selectedBtn.id); // Ajouter l'id du bouton sélectionné à la fin du tableau btnSequence
            if (count >= this.sequenceLength) {
                clearInterval(intervalID);
            }
            if (count === this.sequenceLength) {
                console.log(`Sequence completed!`);
                console.log(`botSequence => ${this.botSequence}`);
            }
        }, 1000);
    }
    addPlayerSequence() {
        this.buttons.map(btn => {
            btn.addEventListener('click', () => {
                this.playerSequence.push(btn.id)
                btn.style.opacity = '0.3';
                setTimeout(() => {
                    btn.style.opacity = '1';
                }, 200);
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
        if (this.botSequence.join() === this.playerSequence.join()) {
            ++this.point
            ++this.level
            ++this.sequenceLength
            alert('you win !! press start to try next level')
        } else {
            console.log('you loose')
        }
        this.botSequence = []
        this.playerSequence = []
        console.log(`point ==> ${this.point}`)
    }
}