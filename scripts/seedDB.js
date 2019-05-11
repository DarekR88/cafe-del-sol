const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/cafe-del-soul-DB"
)

const appetizerSeed = [
    {
        title: "Appetizers",
        description: "Small traditional snacks and sharable platters perfect to start off any meal.",
        items: [
            {
                name: "Del sol Combo",
                description: "A combination platter of potato skins with ground beef & chile con queso, bean and cheese nachos, shredded chicken flautas, guacamole, sour cream & jalapenos.",
                price: "10.99"
            },
            {
                name: "Del sol 7 layer Dip",
                description: "Refried beans, cheese, sour cream, guacamole, pico de gallo, and jalapenos.",
                price: "7.99"
            },
            {
                name: "Flautas (3)",
                description: "Served with guacamole and sour cream.",
                price: "8.99"
            }
        ] 
    }
]

const lunchSeed = [
    {
        title: "Lunch",
        description: "Delicious traditional Mexican dishes for a healthy and well rounded lunch.",
        items: [
            {
                name: "Enchiladas",
                description: "Enchiladas with cheese, ground beef, shredded beef, shredded chicken, or spinach.",
                price: "5.99"
            },
            {
                name: "Burrito",
                description: "A large flour tortilla stuffed with ground beef, shredded chicken or beef, rice, beans and cheese. Topped with chile con queso or gravy.",
                price: "6.99"
            },
            {
                name: "Fajita Lunch",
                description: "Beef, chicken or combo fajitas served on a sizzling plate with grilled onions, rice, charro beans, sour cream, guacamole and pico de gallo.",
                price: "8.50"
            }
        ]
    }
]

const dinnerSeed = [
    {
        title: "Dinner",
        description: "Hearty Mexican dinners. Delicious options for the whole family.",
        items: [
            {
                name: "Sizzling Fajitas Del Sol",
                description: "Sauteed bell peppers, onions, mushrooms, cilantro, and monterrey jack cheese. Served with rice, charro beans, sour cream, guacamole, pico de gallo, and your choice of chicken or beef.",
                price: "13.99"
            },
            {
                name: "Enchiladas Combo",
                description: "Three corn tortillas one cheese, one shredded chicken and one shredded beef or ground beef topped with gravy sauce & melted cheese. Served with sour cream.",
                price: "10.99"
            },
            {
                name: "Shrimp Picosos",
                description: "Five jumbo shrimp topped with sauteed onions, tomatoes, cilantro, and fresh jalapenos.",
                price: "13.99"
            }
        ]
    }
];

db.Lunch
    .remove({})
    .then(() => db.Lunch.collection.insertMany(lunchSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!")
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    })

db.Dinner
    .remove({})
    .then(() => db.Dinner.collection.insertMany(dinnerSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!")
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    })

db.Appetizers
    .remove({})
    .then(() => db.Appetizers.collection.insertMany(appetizerSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!")
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    })