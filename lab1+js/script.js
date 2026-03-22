"use strict"

console.log("Hello students");

var zmiennaGlobalna = 100;

const zmiennaStala = 13; // 80-90% używa się const
let zmiennaZmienna = 77;

// zmienna = 3; // tak nie robić

// TYPY zmiennych:
// null
// Number
// String
// Boolean
// undefined

// Symbol
// Object // mapy, listy, arraye, classy

// deklaracje funkcji
// function nazwaFunkcji() {
//     //ciało funkcji
// }
// const nazwaFunkcji = function () {
//     // ciało funkcji
// }

// funkcja strzałkowa, najbardziej polecam
const adder = () => {
    const numberA = document.getElementById("number-a").value;
    const numberB = document.querySelector("#number-b").value;

    // wypisanie obiektu
    // console.log({ numberA })

    if (numberA === "" || numberB === "") {
        console.log("A lub B jest puste");
        document.getElementById("calc-modal").showModal();
        return
    }

    const numberANum = Number(numberA);
    const numberBNum = Number(numberB);

    console.log(`${numberANum} + ${numberBNum} = ${numberANum + numberBNum}`)

    const li = document.createElement("li");
    li.innerText = `${numberANum} + ${numberBNum} = ${numberANum + numberBNum}`;

    const ul = document.getElementById("calc-results");
    ul.append(li);
}
