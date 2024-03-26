import Realm, {ObjectSchema} from 'realm';

export const RecordTable = 'Record';

export default class Record extends Realm.Object<Record> {
    breakfastCalories
    lunchCalories
    dinnerCalories
    anotherCalories
    waterMillilitres

    static schema: ObjectSchema = {
        name: RecordTable,
        primaryKey: '_date',
        properties: {
            breakfastCalories: 'int',
            lunchCalories: 'int',
            dinnerCalories: 'int',
            anotherCalories: 'int',
            waterMillilitres: 'int',
            _date: 'string'
        }
    }
}
