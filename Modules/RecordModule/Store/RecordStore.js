import RecordService from "../Service/RecordService";
import {makeAutoObservable, values} from "mobx";
export default class RecordStore {
    recordService;
    isLoading = false;

    constructor() {
        this.recordService = new RecordService();
        makeAutoObservable(this);
    };

    createRecord = (record) => {
        this.setIsLoading(true);
        this.recordService.createRecord(record);
        this.setIsLoading(false);
    };

    updateRecord = (record, values) => {
        this.setIsLoading(true);
        this.recordService.updateRecord(record, values);
        this.setIsLoading(false);
    }

    findRecordByDate = (date) => {
        this.setIsLoading(true);
        const result = this.recordService.findRecordByDate(date);
        this.setIsLoading(false);

        return result;
    }

    setIsLoading = isLoading => {
        this.isLoading = isLoading;
    }
}
