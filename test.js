const data= {
    "error" : false,
    "message"  : "success",
    "daftar buku" : [
        {
            "id" : 1,
            "title" : "Ganteng - Ganteng Mas Davva",
            "author" :"Davva"

        },

        {
            "id" : 2,
            "title" : "Ada apa dengan Fadil",
            "author" :"Fadil"

        },

        {
            "id" : 3,
            "title" : "Abdul Terlalu Tampan",
            "author" :"Abdul"

        },

        {
            "id" : 4,
            "title" : "Cinta Fitri Episode 500",
            "author" :"Fitri"

        },

        {
            "id" : 5,
            "title" : "Habibi 1991",
            "author" :"Habibi"

        }
    ]
};

// const data = JSON.parse(dataString);

// console.log(`Error?${data.error}`);
// console.log(`Daftar Buku : `);
// data["daftar buku"].forEach((book, index) => {
//     console.log(`${index +  1}. ${book.title} (${book.author})`);
// })

const jsonString = JSON.stringify(data);
console.log(jsonString);