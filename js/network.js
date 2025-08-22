const allNetwork = [
    "AMC", "Apple TV Plus", "ABC", "adult swim", "Amazon Prime", "BBC", "Plus Chanal", "CBS", "Cine Max", "CW", "DC universe"
]

const networkTag = document.getElementById("network");

allNetwork.map((item) => {
    const myElement = document.createElement("option");
    myElement.classList.add("dark:bg-[#050505]", "dark:text-stone-400");
    myElement.setAttribute("value", item);
    myElement.innerText = item;
    networkTag.appendChild(myElement)
})