// Question #1

// Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values  */

type CTStudent = {
    id:string;
    name:string;
    age:number;
    isTired:boolean;
    projectsCompleted:string[];
    pet?: string;
}
 let student1: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2: CTStudent= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"]
}

let student3 = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
} 
// Question #2

// Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  If their is a Fruit print the color of the fruit, otherwise print  be sure to annoate the return type of the function  */

type Fruit={
  color:string,
  shape:string
}

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit|null=null


function quuestion2 (obj: Fruit | null): string {
    if(obj !== null){return obj.color}else{
       return `You ate my fruit already` 
    }
    
}

console.log(quuestion2(apple))
console.log(quuestion2(eaten))

// Question #3

// Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type */
type Book={
  isbn:string,
  title:string,
  author:string
}

type DigitalBook={
  fileType:string
}

type Ebook = Book & DigitalBook

const book: Ebook = {
    isbn: 'hi',
    title: 'book',
    author: 'milad',
    fileType: 'javascript'
}

console.log(book)

// Question #4

// Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

// - All ShopItems have an numeric id that can not be edited 
// - All ShopItems have a price
// - All ShopItems have a description
// - Some ShopItems have a color
// - All ShopItems have a Category represented with an enum 
//     - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
// - All ShopItems have a list of keywords used to help search for the ShopItem 
//     - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

// After Creating the `ShopItem` type create 3 items using this type */
enum Category {
    Shirts = 'shirt category',
    Shoes = 'shoe category',
    Pants = 'good pants',
    Hats = 'cowboys hat'
}
type ShopItem = {
    readonly id: number;
    price: number;
    description: string;
    color?: string;
    category: Category;
    keywords: string[];
}

const one: ShopItem = {
    id: 1,
    price: 12.99,
    description: 'polo',
    color: 'black',
    category: Category.Shirts,
    keywords: ['shirt','polo','black']
}
const two: ShopItem = {
    id: 2,
    price: 10.99,
    description: 'HM',
    color: 'Green',
    category: Category.Hats,
    keywords: ['Hat','polo','Green']
}

const three: ShopItem = {
    id: 3,
    price: 15.99,
    description: 'LV',
    category: Category.Pants,
    keywords: ['Pants','LV','black']
}

console.log(one)
console.log(two)
console.log(three)
