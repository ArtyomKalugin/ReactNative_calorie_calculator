import React from "react";
import {DateStore} from "../DateModule/Store/DateStore";
import RecordStore from "../RecordModule/Store/RecordStore";

class RootStore {
    dateStore;
    recordStore;

    constructor() {
        this.dateStore = new DateStore();
        this.recordStore = new RecordStore();
    }
}

export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
