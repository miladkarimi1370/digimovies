const AllOrder = [
    {
        value: "newest",
        persian: "جدیدترین ها"
    },
    {
        value: "heighestImdbPoint",
        persian: "بالاترین امتیاز imdb"
    },
    {
        value: "heighestImdbElect",
        persian: "بیشترین رای imdb"
    },
    {
        value: "heightestCriticPointOfView",
        persian: "بالاترین امتیاز منتقدین"
    },
    {
        value: "heighestPointOfView",
        persian: "بالاترین نظرات منتقدین"
    },
    {
        value: "moreArragments",
        persian: "بیشترین بازدید"
    },

]

const myOrderTag = document.getElementById("order");

AllOrder.map((item) => {
    const myElements = document.createElement("option");


    myElements.classList.add("dark:bg-[#050505]", "dark:text-stone-400");
    myElements.value = item.value;
    myElements.innerText = item.persian;
    myOrderTag.appendChild(myElements)
})