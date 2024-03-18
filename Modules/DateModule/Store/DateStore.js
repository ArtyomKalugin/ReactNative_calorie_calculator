import {makeAutoObservable} from 'mobx';

export class DateStore {
    selectedDate = new Date()

    constructor() {
        makeAutoObservable(this);
    };

    selectDateAction = (chosenDate) => {
        this.setDate(chosenDate);
    };

    setDate = date => {
        this.selectedDate = date;
    };

    get getSelectedDate() {
        return this.selectedDate;
    }
}
