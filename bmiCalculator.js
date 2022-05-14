import {
    LightningElement,
    track
} from 'lwc';

export default class BmiCalculator extends LightningElement {
    @track Title = 'BMI Calculator';
    @track Result;
    weight;
    height;
    bmiHandler() {
        try {
            this.Result = this.weight / (this.height * this.height);
        } catch (error) {
            //Handle Error
        }
    }
    onWeightChange(event) {
        this.weight = parseFloat(event.target.value);
    }
    onHeightChange(event) {
        this.height = event.target.value;
    }

}