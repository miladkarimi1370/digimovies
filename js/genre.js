const AllGenre = [
    {
        value: "action",
        persian: "اکشن"
    },
    {
        value: "horrible",
        persian: "ترسناک"
    },
    {
        value: "adventure",
        persian: "ماجراجویی"
    },
    {
        value: "sports",
        persian: "ورزشی"
    },
    {
        value: "drama",
        persian: "درام"
    },
    {
        value: "family",
        persian: "خانوادگی"
    },
    {
        value: "fantasy",
        persian: "فانتزی"
    },
    {
        value: "biography",
        persian: "بیوگرافی"
    },
    {
        value: "western",
        persian: "وسترن"
    },
    {
        value: "history",
        persian: "تاریخی"
    },
    {
        value: "war",
        persian: "جنگی"
    },
    {
        value: "musical",
        persian: "موزیکال"
    },


]

const myGenreTag = document.getElementById("genre");

AllGenre.map((item) => {


    const myElement = document.createElement("option");
    myElement.classList.add("dark:bg-[#050505]", "dark:text-stone-400");
    myElement.setAttribute("value", item.value);
    myElement.innerText = item.persian
    myGenreTag.appendChild(myElement)
})