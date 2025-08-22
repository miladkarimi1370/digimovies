const detailsOfAllMovies = [
    {
        poster: "1.jpg",
        name: "House of Sayuri 2024",
        imdbRage: 6.4,
        votes: 433,
        quality: "1080p WEB-DL",
        time: 108,
        genre: ["ترسناک", "دلهره آور"],
        director: "Kôji Shiraishi",
        actors: ["Kokoro Morita", "Kitarô", "Zen Kajihara"],
        country: ["ژاپن"],
        description: "استان خانواده‌ای که به خانه‌ای جدید نقل مکان می‌کنند و متوجه می‌شوند که خانه توسط روح یک دختر به قتل رسیده، تسخیر شده است."
    }
    ,
    {
        poster: "2.jpg",
        name: "F1: The Movie 2025",
        imdbRage: 7.9,
        votes: 147000,
        quality: "1080p WEB-DL",
        time: 156,
        genre: ["ورزشی", "ماجراجویی"],
        director: "joseph kosinski",
        actors: ["brad pitt", "Kitarô", "Zen Kajihara"],
        country: ["آمریکا ", "آلمان"],
        description: "داستان یک راننده مسابقات فرمول بازنشسته که دوباره به پیست بازمی‌گردد تا مربی‌گری راننده‌ای جوان را برعهده بگیرد."
    }
    ,
    {
        poster: "3.jpg",
        name: "Together 2025",
        imdbRage: 6.5,
        votes: 179900,
        quality: "1080p WEB-DL",
        time: 102,
        genre: ["ورزشی", "ماجراجویی"],
        director: "Michael Shanks",
        actors: ["brad pitt", "Kitarô", "Zen Kajihara"],
        country: ["آمریکا "],
        description: "داستان زوجی به‌نام‌های تیم و میلی که پس از چند سال رابطه به حومه شهر نقل مکان می‌کنند اما در آنجا با نیرویی غیرطبیعی مواجه می‌شوند که عشق‌شان و جان‌شان را تهدید می‌کند."
    }
    ,
    {
        poster: "4.jpg",
        name: "The Map That Leads to You 2025",
        imdbRage: 4.6,
        votes: 156,
        quality: "1080p WEB-DL",
        time: 98,
        genre: ["عاشقانه", "خانوادگی"],
        director: "lasse hallström",
        actors: ["madelyn cline", "KJ Apa", "Sofia Wylie"],
        country: ["آمریکا "],
        description: "داستان سفر دور اروپای دختری به‌نام هدر که در بین مسیر با جک آشنا می‌شود و..."
    }
    ,
    {
        poster: "5.jpg",
        name: "Weapons 2025",
        imdbRage: 7.1,
        votes: 179000,
        quality: "1080p TELESYNC",
        time: 120,
        genre: ["ترسناک ", "رازآلود"],
        director: "Zach Cregger",
        actors: ["Julia Garner", ",josh brolin", "alden ehrenreich"],
        country: ["آمریکا "],
        description: "داستان تمام دانش‌آموزان یک کلاس، به‌جز یک نفر، که هم‌زمان ناپدید می‌شوند و تمام ساکنین شهر به شوک فرو می‌روند."
    }
    ,
    {
        poster: "6.jpg",
        name: "La Strada 1954",
        imdbRage: 6.4,
        votes: 120000,
        quality: "1080p BluRay",
        time: 142,
        genre: ["درام"],
        director: "Federico Fellini",
        actors: ["Anthony Quinn", "Giulietta Masina,", "Richard Basehart"],
        country: ["ایتالیا"],
        description: "«زامپانو» یک معرکه‌گیر خیابانی است و دختر ساده‌ای به نام «جِلسومینا» را از خانواده‌اش خریداری می‌کند تا به عنوان دستیار، همراهش باشد. این دختر شرایط جدید و بسیار سختی را تجربه می‌کند، درحالیکه «زامپانو» به خوش‌گذرانی خود ادامه می‌دهد تا اینکه هر دوی آنها با یک دلقک سیرک، روبرو می‌شوند."
    }
    ,
    {
        poster: "7.jpg",
        name: "Game of Death 1978",
        imdbRage: 8.1,
        votes: 430000,
        quality: "1080p BluRay",
        time: 100,
        genre: ["اکشن ", "جنایی", "درام", "هیجان انگیز"],
        director: "Bruce Lee",
        actors: ["Bruce Lee", "Gig Young", "Dean Jagger"],
        country: ["آمریکا", "چین"],
        description: "در این فیلم «بروس لی» یک استاد هنرهای رزمی مشهور است که در فیلم‌های زیادی ایفای نقش می کند. بعد از یک سوء قصد ناموفق برای کشتن او، همه فکر می کنند او به قتل رسیده است، در حالی که او مخفی شده و با هویتی جدید سعی دارد از کسانی که قصد جانش را داشتند انتقام بگیرد."
    }
]


const wrapperOfShowMovies = document.getElementById("wrapperOfShowMovies");

detailsOfAllMovies.map((item, index) => {
    const myElement = document.createElement("div");
    myElement.classList.add("w-full", "dark:bg-[#1c1c1c]", "rounded-2xl", "p-5", "my-4", "md:flex", "md:flex-wrap", "md:justify-center", "md:content-center");
    myElement.innerHTML = `
               <div class="w-full md:w-4/12 md:flex md:flex-wrap md:justify-center md:content-center">
                            <figure class="w-full md:w-10/12">
                                <img src="img/showMovies/${item.poster}" class="w-full object-cover rounded-2xl" alt="">
                            </figure>
                            <div class="w-full">
                                <button
                                    class="w-full py-3 dark:bg-stone-600 my-4 rounded-2xl text-stone-300 text-sm hover:text-amber-600 duration-200 cursor-pointer">مشاهده
                                    تریلر</button>
                            </div>
                        </div>
                        <div class="row justify-center items-center w-full md:w-8/12 md:justify-end">
                            <div class=" row justify-center items-center md:w-1/2 ">
                                <div class="w-full  row justify-center items-center ">
                                    <div class="border border-stone-300 rounded-full p-2 cursor-pointer ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="white" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>

                                    </div>
                                    <div class="row   w-1/2 justify-center items-center">
                                        <div
                                            class="flex justify-center border-b-stone-400 border-b-[1px] items-center w-full">
                                            <h5 class="text-sm text-white">10 / <span
                                                    class="text-amber-600 text-xl">${item.imdbRage}</span></h5>
                                        </div>
                                        <div class="w-full flex justify-center items-center">
                                            <h5 class="text-white">votes <span>${item.votes}</span></h5>
                                        </div>
                                    </div>
                                    <div class="w-full flex justify-center items-center">
                                        <span
                                            class="bg-amber-500 text-sm py-1 px-2 rounded-lg text-white font-bold">IMDb</span>
                                    </div>
                                </div>



                            </div>

                            <div class=" row *:text-stone-300 justify-center content-center">


                                <div
                                    class="w-full *:text-white flex justify-center items-center my-4 md:justify-start md:p-4">
                                    <h2 class="text-lg"><span>دانلود فیلم </span> ${item.name}</h2>
                                </div>
                                <div class="wrapperOfDetails  p-4">
                                    <div class="row justify-start items-center my-1">
                                        <div class="pl-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="orange" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>
                                        </div>
                                        <h4 class="text-sm">کیفیت : <span>${item.quality}</span> </h4>

                                    </div>
                                    <div class="row justify-start items-center my-1">
                                        <div class="pl-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="orange" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </div>
                                        <h4 class="text-sm">زمان : <span>${item.time} دقیقه</span></h4>
                                    </div>
                                    <div class="row justify-start items-center my-1">
                                        <div class="pl-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="orange" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                            </svg>
                                        </div>
                                        <h4 class="text-sm">ژانر : <span>${item.genre.map((val) => val.concat(" , "))} </span> </h4>
                                    </div>
                                    <div class="row justify-start items-center my-1">
                                        <div class="pl-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="orange" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </div>
                                        <h4 class="text-sm">کارگردان : <span>${item.director}</span></h4>
                                    </div>
                                    <div class="row justify-start items-center my-1">
                                        <div class="pl-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="orange" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                            </svg>
                                        </div>
                                        <h4 class="text-sm">ستارگان : <span>${item.actors.map((val) => val.concat(" , "))}</span>
                                        </h4>
                                    </div>
                                    <div class="row justify-start items-center my-1">
                                        <div class="pl-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="orange" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                            </svg>
                                        </div>
                                        <h4 class="text-sm">محصول : <span>${item.country.map((val) => val.concat(" , "))}</span></h4>
                                    </div>
                                    <div class="pt-3">
                                        <p class="text-sm">${item.description}</p>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <span class="text-sm">ادامه / </span>
                                        <span class="text-amber-500 text-sm">دانلود </span>
                                    </div>
                                </div>
                            </div>

                        </div>
    `
    wrapperOfShowMovies.appendChild(myElement)
})