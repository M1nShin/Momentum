const quotes = [
    {
        quotes: "TAP",
        author: "-태용",
    },
    {
        quotes: "MANIAC",
        author: "-비비지",
    },
    {
        quotes: "SOME LIKE IT HOT!",
        author: "-SPYAIR",
    },
    {
        quotes: "Get A Gitar",
        author: "-라이즈",
    },
    {
        quotes: "Fadeaway",
        author: "-보이넥스트도어",
    },
    {
        quotes: "THRILL RIDE",
        author: "-더보이즈",
    },
    {
        quotes: "DM",
        author: "-fromis_9",
    },
    {
        quotes: "Strip That Down",
        author: "-Liam Payne",
    },
    {
        quotes: "Life is Beautiful",
        author: "-원어스",
    },
    {
        quotes: "New Hippie Generation",
        author: "-페퍼톤스",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;