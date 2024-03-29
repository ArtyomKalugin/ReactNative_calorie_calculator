import RecordService from "../Service/RecordService";
import {makeAutoObservable} from "mobx";

export default class RecordStore {
    recordService;
    selectedRecord;

    constructor() {
        this.recordService = new RecordService();
        const date = new Date()
        this.selectedRecord = this.findRecordByDate(date.toLocaleDateString());
        makeAutoObservable(this);
    };

    createRecord = (record) => {
        this.recordService.createRecord(record);
    };

    updateRecord = (record, values) => {
        this.recordService.updateRecord(record, values);
    }

    findRecordByDate = (date) => {
        return this.recordService.findRecordByDate(date);
    }

    setSelectedRecord = (record, date) => {
        if (record === null) {
            this.selectedRecord = {
                _date: date,
                breakfastCalories: 0,
                lunchCalories: 0,
                dinnerCalories: 0,
                anotherCalories: 0,
                waterMillilitres: 0
            }
        } else {
            this.selectedRecord = record;
        }
    }

    get getSelectedRecord() {
        return this.selectedRecord;
    }
}
