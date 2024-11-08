class Activity {
    constructor(id,title,description,imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl=imgUrl
    }
}

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

const newRepository = new Repository();

newRepository.createActivity("Caminar", "hace bien a la salud");

console.log(newRepository.getAllActivities());

