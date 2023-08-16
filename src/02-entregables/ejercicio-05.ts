console.log("************** DELIVERABLE 05 *********************");


class SlothMachine {
   
    private coins: number = 0;
    private randomsBoolean: boolean[] = []

    constructor() {}

    public play(): void {
        this.coins++;
        this.checkIfHaveWonTheAward();
    }

    private checkIfHaveWonTheAward(): void {
        this.generateRandomBoolean();
        if(this.hasWon()) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);  
            this.resetCoins()
        } else {
            console.log("Good luck next time!!") 
        }
    }

    private hasWon(): boolean {
       if(this.randomsBoolean.length === 0) return false
       return this.randomsBoolean.every( (element) => element === true);
    }

    private generateRandomBoolean(max = 3): void {
        for (let index = 0; index < max; index++) {
            this.randomsBoolean[index] = this.getRandomBoolean()
        }
    }

    private getRandomBoolean(): boolean {
        return Boolean(Math.floor(Math.random() * 2));
    }

    private resetCoins(): void {
        this.coins = 0;
    }
   
}

const machine1 = new SlothMachine();
console.log(machine1)
machine1.play();
machine1.play()
machine1.play()
machine1.play()
machine1.play()
machine1.play()


const machine2 = new SlothMachine();
console.log(machine2)
machine2.play()
machine2.play()
machine2.play()
machine2.play()
machine2.play()
machine2.play()

