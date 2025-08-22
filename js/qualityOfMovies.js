const qualityTag = document.getElementById("quality");

const allQualityOfMovies = [
    "2160 4K 10bit BlueRay x265 softsub",
    "2160 4K 10bit WEB-DL x265 softSub",
    "1080p Full HD BlueRay softSub",
    "1080p Full HD WEB-DL softSub",
    "1080p 3D HSBS 6CH BlueRay",
    "720p WEB-DL HardSub"
]


allQualityOfMovies.map((item) => {
    const myElement = document.createElement("option");
    myElement.classList.add("dark:bg-[#050505]", "dark:text-stone-400");
    myElement.setAttribute("value", item);
    myElement.innerText = item;
    qualityTag.appendChild(myElement)
})