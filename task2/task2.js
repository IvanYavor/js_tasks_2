/*
                            Задача 2
            Есть ферма животных, у всех животных есть имена и возраст.
            Животные бывают разных типов: Кошки, Собаки, Коровы. 
            У каждого животного могут быть дети. 
            Если животное является родителем этих детей, 
            в свою очередь глубина семейного древа может достигать N либо 0. 
            Опишите структуры данных для фермы животных и напишите функцию,
            которая делает подсчёт всех возрастов животных и выводит общий возраст для всей фермы.

*/


var farm = {
    totalNumberOfAnimals: 0,
    animals: [],
    totalAge: 0,

    calculateTotalAge: function() {
        var ageSum = 0;
        this.animals.forEach(function(elem) {
            ageSum += elem.age
        });
        this.totalAge = ageSum;
    },

    addNewAnimal: function(animal) {
        this.animals.push(animal);
        this.totalNumberOfAnimals++;
    }
};

var Animal = function(name, age, children) {
    this.name = name;
    this.age = age;
    this.children = children;
};


var Cat = function(name, age, children) {
    Animal.call(this, name, age, children);

    this.display = function() {
        console.log("I'm a cat.")
    }
}

Cat.prototype = Object.create(Animal.prototype);



var Cow = function(name, age, children) {
    Animal.call(this, name, age, children);

    this.display = function() {
        console.log("I'm a cow.")
    }
}

Cow.prototype = Object.create(Animal.prototype);



var Dog = function(name, age, children) {
    Animal.call(this, name, age, children);

    this.display = function() {
        console.log("I'm a dog.")
    }
}

Dog.prototype = Object.create(Animal.prototype);


var cat1 = new Cat("c1", 13, [childCat1, childCat11]);
var cat2 = new Cat("c2", 2, []);
var childCat1 = new Cat("cc1", 1, []);
var childCat11 = new Cat("cc11", 1, []);

var dog1 = new Cat("d1", 13, [childCat1, childCat11]);
var dog2 = new Cat("d2", 2, []);
var childDog1 = new Cat("dc1", 1, []);
var childDog11 = new Cat("dc11", 1, []);



farm.addNewAnimal(cat1);
farm.addNewAnimal(cat2);
farm.addNewAnimal(childCat1);
farm.addNewAnimal(childCat11);

farm.addNewAnimal(dog1);
farm.addNewAnimal(dog2);
farm.addNewAnimal(childDog1);
farm.addNewAnimal(childDog11);

console.log(farm.totalNumberOfAnimals);
farm.calculateTotalAge();
console.log(farm.totalAge);