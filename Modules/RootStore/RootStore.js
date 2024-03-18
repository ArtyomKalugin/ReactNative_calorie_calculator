import React from "react";
import {DateStore} from "../DateModule/Store/DateStore";

class RootStore {
    dateStore;

    constructor() {
        this.dateStore = new DateStore();
    }
}

export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
