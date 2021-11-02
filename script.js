//1.
let array = [5, 25, 89, 120, 36];

array.push('javascript', 'python')

array.unshift('html', 'css')

console.log(array.length);

array.shift();

array.pop();

console.log(array);

//2.

let fruit = ['ფორთხოხალი', 'ბანანი', 'მსხალი'];

console.log(fruit.length);

fruit.push('ვაშლი', 'ანანასი');


fruit.unshift('საზამთრო');

console.log(fruit.length);

fruit.splice(2,0, 'მანგო');
console.log(fruit);

let newFruit = fruit.slice(1,6)
console.log(newFruit);
console.log(newFruit.length);

//3.
let maparray = [12, 25, 3, 6, 8, 14, 7, 23];

let newmaparray = maparray.map(function(i) {
    return i / 3;
})

console.log(newmaparray);

//4.

let filterarray = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newfilter = filterarray.filter(function(x) {
    return typeof x === "number"
}
)

console.log(newfilter);

//5. 
let languages = ['html', 'css', 'javascript', 'python', 'php'];

let newlang = languages.filter(function(j)
{
    return j.length > 3
}
)
console.log(newlang);

//6.
let arrayNew = ['academy', 'of', 'digital', 'industries'].reduce(function(accumulator,currentvalue) {
    return accumulator + ' ' + currentvalue;
},
[]
)

console.log(arrayNew);