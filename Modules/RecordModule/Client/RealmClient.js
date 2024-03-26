import Realm from "realm";
import Record from "../Model/RecordModel";

export const RealmClient = new Realm({schema: [Record.schema]});
