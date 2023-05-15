//Template literal

// const name = "Javohir"
// const lastName = "Nuriddinov"
// const fullName = name + " " +lastName

// const fullName2 = `${name} ${lastName}` //ES6

// console.log(fullName2)

// Shallow copy
// const ismlar = ["Javohir", "Diyor", "Farrux", "Behruz"]

// const yangiIsmlar = ismlar

// yangiIsmlar.push("Sardor")

// console.log(ismlar)

// console.log(yangiIsmlar)

// Deep copy

// const ismlar = ["Javohir", "Diyor", "Farrux", "Behruz"]

// const yangiIsmlar = [...ismlar]

// yangiIsmlar.push("Sardor")

// console.log(ismlar)

// console.log(yangiIsmlar)


// const kontaklar = ["Bohodir", "Sardor", "Javlon"]
// const maxsusKontakt = [...kontaklar]
// maxsusKontakt.push("Aziza")


// console.log(kontaklar)
// console.log(maxsusKontakt)

// Objects

// const inson = {
//     ismi: "Javohir",
//     yoshi: 15,
//     manzil: {
//         mahalla: "Beshkappa"
//     }
// }

// console.log(inson.manzil.mahalla)

// const {ismi , yoshi, manzil} = inson

// console.log(manzil.mahalla)

// const arr = [232, 23,546, 435,3453]

// const [birinchi, ikkinchi, uchinchi, ...qolgani ] = arr

// console.log(qolgani)

// const numbers = [21, 12, 32, 54]

// for(number of numbers){
//     console.log(number)
// }

// for(let i= 0; i<numbers.length; i++){
//     console.log(numbers[i])
// }

// const student = {
//     name: "Alisher",
//     manzil: "Boyqozon",
//     kursi: 2
// }

// for(let key in student){
//     console.log(student.key)
// }


// const string = "Javohir Nuriddinov"
// for(char of string){
//     console.log(char)
// }
import { addNumber } from "./app.js"

let num1 = prompt("1-sonni kiriting")*1
let num2 = prompt("2-sonni kiriting")*1

console.log(addNumber(num1, num2))








