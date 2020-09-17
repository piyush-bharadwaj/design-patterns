class dataStore {
    private static _instance: dataStore;

    private constructor() {

    }

    public static getInstance(): dataStore {
        return this._instance || (this._instance = new this());
    };
}
const firstDataStore: dataStore = dataStore.getInstance();
const secondDataStore: dataStore = dataStore.getInstance();

alert(firstDataStore === secondDataStore)