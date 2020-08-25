function clone(obj) {
    const temp  =  {}; 
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    if(typeof obj === null || typeof obj !== "object") {
        return obj;
    } else {

        for(const key of keys) {
            if(typeof obj[key] === "object" || (Array.isArray(obj[key])) && Array.isArray(obj[key][0])) {
                temp[key] = clone(obj[key]);
            }else if (Array.isArray( obj[key] )) {
                temp[key] = obj[key].splice();
            } else {
                temp[key] = obj[key];
            }
        }

        return temp;

    }
}


const animal = {
    name: "animal",
    age: 10,
    childs: ["child 1", "child 2"]
};
    
const cat = clone(animal);
cat.name = "cat";

cat.age = 5;
cat.childs = ["new child 1", "new child 2"];
 
console.log(cat.name, cat.age); // cat 5
console.log(cat.childs); // [ 'new child 1', 'new child 2' ]
 
console.log(animal.name, animal.age); // animal 10
console.log(animal.childs); // [ 'child 1', 'child 2']
   
