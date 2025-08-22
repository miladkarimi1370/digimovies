const wrapperOfSlider = document.querySelector(".wrapperOfSlider");
const allFiguresOfImgs = wrapperOfSlider.children;
const countOfFigures = wrapperOfSlider.childElementCount;


let activeFlagOfSlider = 0;
let intervalCore;

const detailOfMovies = [
    { id: 0, name: "materialists 2025", imdbRate: 6.4, qualityOfMovie: "2160p 4K WEB-DL" },
    { id: 1, name: "exist 2025", imdbRate: 5.4, qualityOfMovie: "2160p 4K WEB-DL" },
    { id: 2, name: "eddington 2025", imdbRate: 6.8, qualityOfMovie: "1080p 4K WEB-DL" },
    { id: 3, name: "mission impossible final", imdbRate: 7.5, qualityOfMovie: "1080p 4K WEB-DL" },
    { id: 4, name: "jurassic world : Rebirth 2025", imdbRate: 4.8, qualityOfMovie: "2160p 4K WEB-DL" },
    { id: 5, name: " years later 2025 28", imdbRate: 6.8, qualityOfMovie: "1080p 4K WEB-DL" },
    { id: 6, name: "how to train your dragon 2025", imdbRate: 5.2, qualityOfMovie: "2160p 4K WEB-DL" },
    { id: 7, name: " the life of chuck 2024", imdbRate: 7.8, qualityOfMovie: "2160p  WEB-DL-full HD" },
    { id: 8, name: "M3GAN 2.5 2025", imdbRate: 4.9, qualityOfMovie: "1080p 4K WEB-DL" },
    { id: 9, name: "superman 2025", imdbRate: 7.0, qualityOfMovie: "1080p 4K WEB-DL" },


]



const resetAllClassNamefromFigures = () => {
    for (let i = 0; i < countOfFigures; i++) {

        allFiguresOfImgs[i].classList.add("hidden");
        allFiguresOfImgs[i].classList.remove("translate-z-40", "shadow-2xl", "order-1", "order-2", "order-3", "w-[60vh]", "animate-[movement_0.5s_ease_1_forwards]")
        allFiguresOfImgs[i].children[0].classList.add("hidden");
        allFiguresOfImgs[i].children[1].classList.add("hidden");


    }
}
const movementForImages = (previousId, id, NextId) => {
    setTimeout(() => {
        wrapperOfSlider.children[previousId].classList.add("animate-[movement_0.5s_ease_1_forwards]");
        wrapperOfSlider.children[id].classList.add("animate-[movement_0.5s_ease_1_forwards]");
        wrapperOfSlider.children[NextId].classList.add("animate-[movement_0.5s_ease_1_forwards]");
    }, 2800);
}
function everyWordOnloadpage() {


    let realArray = Array.from(allFiguresOfImgs);
    realArray.forEach((item, index) => {
        item.dataset.id = index

    })

    resetAllClassNamefromFigures();


    wrapperOfSlider.children[countOfFigures - 1].classList.remove("hidden");
    wrapperOfSlider.children[countOfFigures - 1].classList.add("order-3")
    wrapperOfSlider.children[countOfFigures - 1].children[1].classList.remove("hidden");

    wrapperOfSlider.children[activeFlagOfSlider].classList.remove("hidden", "w-[30vh]");
    wrapperOfSlider.children[activeFlagOfSlider].classList.add("order-2")
    wrapperOfSlider.children[activeFlagOfSlider].children[0].classList.remove("hidden");
    wrapperOfSlider.children[activeFlagOfSlider].classList.add("translate-z-40", "shadow-2xl", "w-[60vh]");




    wrapperOfSlider.children[activeFlagOfSlider + 1].classList.remove("hidden");
    wrapperOfSlider.children[activeFlagOfSlider + 1].children[1].classList.remove("hidden")




}
intervalCore = setInterval(() => {

    resetAllClassNamefromFigures();

    if (activeFlagOfSlider > 0 && activeFlagOfSlider < countOfFigures - 1) {

        wrapperOfSlider.children[activeFlagOfSlider - 1].children[2].classList.add("hidden")

        showDetailsOfMoveis(activeFlagOfSlider);



        wrapperOfSlider.children[activeFlagOfSlider - 1].classList.remove("hidden");
        wrapperOfSlider.children[activeFlagOfSlider - 1].children[1].classList.remove("hidden");

        wrapperOfSlider.children[activeFlagOfSlider].classList.remove("hidden", "w-[30vh]");
        wrapperOfSlider.children[activeFlagOfSlider].children[0].classList.remove("hidden");
        wrapperOfSlider.children[activeFlagOfSlider].classList.add("translate-z-40", "shadow-2xl", "w-[60vh]");




        wrapperOfSlider.children[activeFlagOfSlider + 1].classList.remove("hidden");
        wrapperOfSlider.children[activeFlagOfSlider + 1].children[1].classList.remove("hidden");



        movementForImages(countOfFigures - 1, activeFlagOfSlider, activeFlagOfSlider + 1);

        activeFlagOfSlider++;
    } else if (activeFlagOfSlider === countOfFigures - 1) {
        wrapperOfSlider.children[activeFlagOfSlider - 1].children[2].classList.add("hidden")
        showDetailsOfMoveis(activeFlagOfSlider);

        wrapperOfSlider.children[activeFlagOfSlider - 1].classList.remove("hidden");

        wrapperOfSlider.children[activeFlagOfSlider - 1].children[1].classList.remove("hidden");

        wrapperOfSlider.children[activeFlagOfSlider].classList.remove("hidden", "w-[30vh]");
        wrapperOfSlider.children[activeFlagOfSlider].children[0].classList.remove("hidden");
        wrapperOfSlider.children[activeFlagOfSlider].classList.add("translate-z-40", "shadow-2xl", "w-[60vh]");





        wrapperOfSlider.children[0].classList.remove("hidden");
        wrapperOfSlider.children[0].classList.add("order-3")
        wrapperOfSlider.children[0].children[1].classList.remove("hidden");
        movementForImages(activeFlagOfSlider - 1, activeFlagOfSlider, 0);

        activeFlagOfSlider = 0


    } else if (activeFlagOfSlider === 0) {
        wrapperOfSlider.children[countOfFigures - 1].children[2].classList.add("hidden")
        showDetailsOfMoveis(activeFlagOfSlider);


        wrapperOfSlider.children[countOfFigures - 1].classList.remove("hidden");
        wrapperOfSlider.children[countOfFigures - 1].classList.add("order-3")
        wrapperOfSlider.children[countOfFigures - 1].children[1].classList.remove("hidden");


        wrapperOfSlider.children[activeFlagOfSlider].classList.remove("hidden", "w-[30vh]");
        wrapperOfSlider.children[activeFlagOfSlider].classList.add("order-2")
        wrapperOfSlider.children[activeFlagOfSlider].children[0].classList.remove("hidden");
        wrapperOfSlider.children[activeFlagOfSlider].classList.add("translate-z-40", "shadow-2xl", "w-[60vh]");





        wrapperOfSlider.children[activeFlagOfSlider + 1].classList.remove("hidden");
        wrapperOfSlider.children[activeFlagOfSlider + 1].children[1].classList.remove("hidden")

        movementForImages(countOfFigures - 1, activeFlagOfSlider, activeFlagOfSlider + 1);

        activeFlagOfSlider++;
    }





}, 3000);



function showDetailsOfMoveis(activeIdOfSlider) {
    const id = Number(wrapperOfSlider.children[activeIdOfSlider].getAttribute("data-id"));
    wrapperOfSlider.children[activeIdOfSlider].children[2].classList.remove("hidden");
    const myDetails = detailOfMovies.filter((item, index) => item.id === id)

    wrapperOfSlider.children[activeIdOfSlider].children[2].children[0].innerHTML = myDetails[0].qualityOfMovie
    wrapperOfSlider.children[activeIdOfSlider].children[2].children[1].children[0].innerHTML = myDetails[0].imdbRate
    wrapperOfSlider.children[activeIdOfSlider].children[2].children[2].innerHTML = myDetails[0].name
}










