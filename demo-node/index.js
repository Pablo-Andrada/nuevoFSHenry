
const Repository = require("./models/repository");


const newRepository = new Repository();

newRepository.createActivity("Caminar", "hace bien a la salud");
newRepository.createActivity("Correr", "hace bien a la salud");
newRepository.createActivity("Saltar", "hace bien a la salud");

console.log(newRepository.getAllActivities());

