export class Calculator {

    private _total: number;

    constructor() {
        this._total = 0;
    }

    get total() : number {
        return this._total;
    }

    add(numberToAdd: number) : void {
        this._total += numberToAdd;
    }

    divide(numberToDivideBy: number) {
        if (numberToDivideBy == 0) {
            throw new Error('Do not try and divide by zero!');
        }
        else {
            this._total = this._total / numberToDivideBy;
        }
    }
}