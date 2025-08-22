const countries = document.getElementById("countries");

const listOfAllCountries = [
    {
        value: "italy",
        persina: "ایتالیا"
    },
    {
        value: "germany",
        persina: "آلمان"
    },
    {
        value: "iran",
        persina: "ایران"
    },
    {
        value: "japan",
        persina: "ژاپن"
    },
    {
        value: "brazil",
        persina: "برزیل"
    },
    {
        value: "turkey",
        persina: "ترکیه"
    },
    {
        value: "denmark",
        persina: "دانمارک"
    },
    {
        value: "russia",
        persina: "روسیه"
    },

    {
        value: "united kingdom",
        persina: "انگلستان"
    },

    {
        value: "south korea",
        persina: "کره جنوبی"
    },
    {
        value: "canada",
        persina: "کانادا"
    },
    {
        value: "weles",
        persina: "ولز"
    },
    {
        value: "south Africa",
        persina: "افریقای جنوبی"
    },


]

listOfAllCountries.map((item) => {
    const myElement = document.createElement("option");
    myElement.classList.add("dark:bg-[#050505]", "dark:text-stone-400");
    myElement.setAttribute("value", item.value);
    myElement.innerText = item.persina
    countries.appendChild(myElement)
})