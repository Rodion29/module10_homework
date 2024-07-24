let capitals = new Map();

capitals.set("Moscow", "Russia");
capitals.set("Washington", "USA");
capitals.set("Paris", "France");
capitals.set("Berlin", "Germany");
capitals.set("Rome", "Italy");

for (let countries of capitals.keys()) {
    console.log(countries + ' is capital of ' + capitals.get(countries));
}