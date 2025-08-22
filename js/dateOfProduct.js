const dateOfProduct = document.querySelector(".dateOfProduct");
const line = dateOfProduct.children[1];
const firstHandle = line.children[0];
const secondHandle = line.children[1];
const showYears = document.getElementById("showYears");
const showMaxYear = showYears.children[0].innerHTML = "2025"
let showMinYear = showYears.children[2].innerHTML = "1888"

let draggingFirst = false;
let draggingSecond = false;

firstHandle.addEventListener("mousedown", (e) => {
    e.preventDefault();
    draggingFirst = true;
});

secondHandle.addEventListener("mousedown", (e) => {
    e.preventDefault();
    draggingSecond = true;
});

document.addEventListener("mousemove", (e) => {
    const rect = line.getBoundingClientRect();




    let relativeX = e.clientX - rect.left;
    const maxX = line.clientWidth;

    if (draggingFirst) {

        const secondLeft = parseFloat(secondHandle.style.left) || maxX;
        if (relativeX < 0) {
            relativeX = 0;
            showMinYear = "1888"
        }
        console.log(relativeX);

        if (relativeX > secondLeft - firstHandle.offsetWidth) {
            relativeX = secondLeft - firstHandle.offsetWidth;
        }
        firstHandle.style.left = relativeX + "px";
    }

    if (draggingSecond) {

        const firstLeft = parseFloat(firstHandle.style.left) || 0;
        if (relativeX < firstLeft + firstHandle.offsetWidth) {
            relativeX = firstLeft + firstHandle.offsetWidth;
        }
        if (relativeX > maxX) {
            relativeX = maxX;
            showMaxYear = "2025"
        };
        secondHandle.style.left = relativeX + "px";
    }
});

document.addEventListener("mouseup", () => {
    draggingFirst = false;
    draggingSecond = false;
});

function calculateYearOfProduct(left, totalyWidth) {

}