import {RealmClient} from "../Client/RealmClient";
import Record, {RecordTable} from "../Model/RecordModel";

export default class RecordService {
    createRecord = (data) => {
        RealmClient.write(() => {
            RealmClient.create(RecordTable, data);
        });
    };

    updateRecord = (record, values) => {
        RealmClient.write(() => {
            Object.assign(record, values)
        });
    }

    findRecordByDate = (date) => {
        return RealmClient.objectForPrimaryKey(Record, date)
    }
}
