const Activity = require("../models/activity");

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }
    createActivity (title, description, imgUrl) {
        const newActivity = new Activity(this.id, title, description, imgUrl);
        this.id++;
        this.activities.push(newActivity)
    }
    getAllActivities() {
        return this.activities;
    }
}

module.exports = Repository;