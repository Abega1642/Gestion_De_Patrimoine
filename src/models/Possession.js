import moment from 'moment';

export class Possession {
    constructor(id, value, name, type, buyingDate, loosingDate, increasingRatio) {
        this.id = id;
        this.value = value;
        this.name = name;
        this.type = type;
        this.buyingDate = buyingDate;
        this.loosingDate = loosingDate;
        this.increasingRatio = increasingRatio;
        this.constantValue = value;
    }

    updateValue(tTime, spending) {
        let start = moment(this.buyingDate, 'YYYY-MM-DD');
        let end = moment(tTime, 'YYYY-MM-DD');

        let diff = moment.duration(end.diff(start));
        let years = diff.years();
        let months = diff.months();
        let days = diff.days();

        let ratio = years + months / 12 + days / 365;

        if (this.name.toLowerCase() === 'current account' && months >= 1) {
            this.value += this.constantValue * months;
            console.log(` +++ "Salary" added successfully! +++ `);

            this.value -= spending * months;
            console.log(` +++ "Spending" subtracted to current account successfully! +++`);
        }

        this.value += this.increasingRatio * this.value * ratio / 100;

        return this.value;
    }
}
