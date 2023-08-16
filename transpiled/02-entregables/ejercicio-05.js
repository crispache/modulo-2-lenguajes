console.log("************** DELIVERABLE 05 *********************");
var SlothMachine = /** @class */ (function () {
    function SlothMachine() {
        this.coins = 0;
        this.randomsBoolean = [];
    }
    SlothMachine.prototype.play = function () {
        this.coins++;
        this.checkIfHaveWonTheAward();
    };
    SlothMachine.prototype.checkIfHaveWonTheAward = function () {
        this.generateRandomBoolean();
        if (this.hasWon()) {
            console.log("Congratulations!!!. You won ".concat(this.coins, " coins!!"));
            this.resetCoins();
        }
        else {
            console.log("Good luck next time!!");
        }
    };
    SlothMachine.prototype.hasWon = function () {
        if (this.randomsBoolean.length === 0)
            return false;
        return this.randomsBoolean.every(function (element) { return element === true; });
    };
    SlothMachine.prototype.generateRandomBoolean = function (max) {
        if (max === void 0) { max = 3; }
        for (var index = 0; index < max; index++) {
            this.randomsBoolean[index] = this.getRandomBoolean();
        }
    };
    SlothMachine.prototype.getRandomBoolean = function () {
        return Boolean(Math.floor(Math.random() * 2));
    };
    SlothMachine.prototype.resetCoins = function () {
        this.coins = 0;
    };
    return SlothMachine;
}());
var machine1 = new SlothMachine();
console.log(machine1);
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
var machine2 = new SlothMachine();
console.log(machine2);
machine2.play();
machine2.play();
machine2.play();
machine2.play();
machine2.play();
machine2.play();
