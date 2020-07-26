class CalorieTracker {
    private maxCalories: number;
    private currentCalories: number;
    private caloriesSurplusMsg: string = "You have consumed more calories and need to workout";

    constructor(maxCalories: number) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;        
    }
    trackCalories(caloriesCount: number) {
        debugger;
        this.currentCalories += caloriesCount;
        if (this.currentCalories > this.maxCalories) {
            // this.logCaloriesSurplus();
            Logger.logMessage(this.caloriesSurplusMsg);
        }
    }
    logCaloriesSurplus() {
        console.warn('You have consumed more calories and need to workout');
    }
}
class Logger {
    static logMessage(message: String) {
        console.warn(message);
    }

}
const caloriesTracker = new CalorieTracker(2000);
caloriesTracker.trackCalories(1000);
caloriesTracker.trackCalories(500);
caloriesTracker.trackCalories(501);