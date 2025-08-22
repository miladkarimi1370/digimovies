const rangeOfAge = [
    "PG-13", "TV PG ", "R", "P", "C16", "+E10", "C18", "TV 14", "PG"
]

const rangeOfAgeTag = document.getElementById("rangeOfAge");

rangeOfAge.map((item) => {


    const myElement = document.createElement("option");
    myElement.classList.add("dark:bg-[#050505]", "dark:text-stone-400");
    myElement.setAttribute("value", item);
    myElement.innerText = item
    rangeOfAgeTag.appendChild(myElement)
})