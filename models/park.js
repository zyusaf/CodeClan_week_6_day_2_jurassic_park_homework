const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function (dinosaur){
    this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(indexOfDinosaur, 1)
};

Park.prototype.findMostVisited = function () {
    let maxGuest = this.dinosaurCollection[0];

    for (i = 0; i < this.dinosaurCollection.length; i++){
        if (this.dinosaurCollection[i].guestsAttractedPerDay > maxGuest.guestsAttractedPerDay)
            maxGuest = this.dinosaurCollection[i]
    }

    return maxGuest
};

Park.prototype.findDinosaursFromSpecies = function (species) {
    let dinosaurSpecies = [];

    for (i = 0; i < this.dinosaurCollection.length; i++){
        if (this.dinosaurCollection[i].species === species)
            dinosaurSpecies.push(this.dinosaurCollection[i]);
    }

    return dinosaurSpecies
};

Park.prototype.calcTotalVisitorsPerDay = function () {
    let total = 0;

    for (i = 0; i < this.dinosaurCollection.length; i++){
        total += this.dinosaurCollection[i].guestsAttractedPerDay;
    }

    return total;
};

Park.prototype.calcTotalVisitorsPerYear = function () {
    let total = 0;

    for (i = 0; i < this.dinosaurCollection.length; i++){
        total += this.dinosaurCollection[i].guestsAttractedPerDay;
    }

    return total * 365;
};

Park.prototype.calcTotalRevenuePerYear = function () {
    let total = 0;

    for (i = 0; i < this.dinosaurCollection.length; i++){
        total += this.dinosaurCollection[i].guestsAttractedPerDay;
    }

    let totalPerYear = total * 365;

    return totalPerYear * this.ticketPrice
};

module.exports = Park;