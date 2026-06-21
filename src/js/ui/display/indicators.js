export default class Indicators {
    constructor(display) {
        this.display = display;
        this.indicators = [];
        
        let indicators = this.display.querySelector("#indicators").children;
        
        for (const indicator of indicators) {
            this.indicators.push(indicator);
        }
    }

    get(id) {
        let indicator = this.indicators.find(indicator => indicator.id === id);

        if (indicator === undefined) {
            throw Error(`Invalid indicator id: '${id}'`);
        }

        return indicator;
    }

    indicatorOn(indicator) {
        indicator.style.visibility = "visible";
    }

    indicatorOff(indicator) {
        indicator.style.visibility = "hidden";
    }

    clear() {
        this.indicators.forEach(indicator => {
            this.indicatorOff(indicator)
        });
    }
}