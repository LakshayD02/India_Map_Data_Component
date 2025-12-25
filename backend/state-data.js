const stateData = {
    "andaman-and-nicobar-islands": {
        capital: "Port Blair",
        population: "434,000",
        description: "A tropical paradise known for its pristine beaches, coral reefs, and cellular jail.",
        funFact: "Home to the Sentinelese people, one of the last uncontacted tribes in the world."
    },
    "andhra-pradesh": {
        capital: "Amaravati",
        population: "49.5 Million",
        description: "Known as the Rice Bowl of India, famous for its spicy cuisine and Tirupati temple.",
        funFact: "The Koh-i-Noor diamond was mined from the Kollur Mine in this state."
    },
    "arunachal-pradesh": {
        capital: "Itanagar",
        population: "1.4 Million",
        description: "The Land of Dawn-Lit Mountains, offering breathtaking landscapes and diverse tribes.",
        funFact: "It is the largest of the Seven Sister States of Northeast India."
    },
    "assam": {
        capital: "Dispur",
        population: "31.2 Million",
        description: "Famous for its tea plantations, silk, and the one-horned rhinoceros of Kaziranga.",
        funFact: "Assam produces more than 50% of the tea produced in India."
    },
    "bihar": {
        capital: "Patna",
        population: "104 Million",
        description: "A land of deep history, the birthplace of Buddhism and Jainism.",
        funFact: "The world's first republic, Vaishali, was established here."
    },
    "chandigarh": {
        capital: "Chandigarh",
        population: "1.1 Million",
        description: "The first planned city in India, known for its architecture and urban design.",
        funFact: "It serves as the capital for two states: Punjab and Haryana."
    },
    "chhattisgarh": {
        capital: "Raipur",
        population: "29.4 Million",
        description: "Known for its waterfalls, temples, and rich tribal culture.",
        funFact: "Often called the Rice Bowl of Central India."
    },
    "delhi": {
        capital: "New Delhi",
        population: "16.8 Million",
        description: "The capital of India, a melting pot of culture, history, and politics.",
        funFact: "The Red Fort was originally white (made of limestone) before being painted red by the British."
    },
    "dnh-and-dd": {
        capital: "Daman",
        population: "585,000",
        description: "A union territory known for its Portuguese heritage and scenic coastlines.",
        funFact: "It was a Portuguese colony until 1961."
    },
    "goa": {
        capital: "Panaji",
        population: "1.5 Million",
        description: "Famous for its beaches, nightlife, and Portuguese architecture.",
        funFact: "It is the smallest state in India by area."
    },
    "gujarat": {
        capital: "Gandhinagar",
        population: "60.4 Million",
        description: "Home to the Asiatic Lion and the world's tallest statue, the Statue of Unity.",
        funFact: "It has the longest coastline of any state in India (1,600 km)."
    },
    "haryana": {
        capital: "Chandigarh",
        population: "25.3 Million",
        description: "An agricultural powerhouse and a rapidly industrializing state.",
        funFact: "Known as the 'Land of Champions' for producing many Indian athletes."
    },
    "himachal-pradesh": {
        capital: "Shimla",
        population: "7.5 Million",
        description: "A haven for trekkers and nature lovers, nestled in the Himalayas.",
        funFact: "The Kalka-Shimla Railway is a UNESCO World Heritage Site."
    },
    "jammu-and-kashmir": {
        capital: "Srinagar (Summer), Jammu (Winter)",
        population: "12.5 Million",
        description: "The Crown of India, known for its stunning valleys and Dal Lake.",
        funFact: "Saffron from Pampore is considered one of the best in the world."
    },
    "jharkhand": {
        capital: "Ranchi",
        population: "32.9 Million",
        description: "Rich in mineral resources and known for its waterfalls and forests.",
        funFact: "Home to the Betla National Park, one of the first tiger reserves in India."
    },
    "karnataka": {
        capital: "Bengaluru",
        population: "61.1 Million",
        description: "A hub of technology and heritage, featuring Hampi and the Silicon Valley of India.",
        funFact: "Produces the majority of India's coffee."
    },
    "kerala": {
        capital: "Thiruvananthapuram",
        population: "33.4 Million",
        description: "God's Own Country, famous for its backwaters, Ayurveda, and high literacy.",
        funFact: "The first state in the world to have a democratically elected communist government."
    },
    "ladakh": {
        capital: "Leh",
        population: "274,000",
        description: "A high-altitude desert known for its monasteries and stunning landscapes.",
        funFact: "Home to the highest motorable road in the world at Umling La."
    },
    "lakshadweep": {
        capital: "Kavaratti",
        population: "64,000",
        description: "A stunning archipelago of coral atolls and pristine blue waters.",
        funFact: "The name means 'One Hundred Thousand Islands' in Malayalam/Sanskrit."
    },
    "madhya-pradesh": {
        capital: "Bhopal",
        population: "72.6 Million",
        description: "The Heart of India, known for Khajuraho temples and tiger reserves.",
        funFact: "Has the largest forest cover of any state in India."
    },
    "maharashtra": {
        capital: "Mumbai",
        population: "112 Million",
        description: "An economic powerhouse with Bollywood, Ajanta-Ellora caves, and beaches.",
        funFact: "Mumbai's dabbawalas have a Six Sigma efficiency rating."
    },
    "manipur": {
        capital: "Imphal",
        population: "2.8 Million",
        description: "The Jewel of India, known for its classical dance and Loktak Lake.",
        funFact: "The game of Polo is believed to have originated here (Sagol Kangjei)."
    },
    "meghalaya": {
        capital: "Shillong",
        population: "2.9 Million",
        description: "The Abode of Clouds, famous for living root bridges and heavy rainfall.",
        funFact: "Mawsynram is the wettest place on Earth."
    },
    "mizoram": {
        capital: "Aizawl",
        population: "1.1 Million",
        description: "A land of rolling hills and a high literacy rate.",
        funFact: "Known for the bamboo dance (Cheraw dance)."
    },
    "nagaland": {
        capital: "Kohima",
        population: "1.9 Million",
        description: "Land of Festivals, known for the Hornbill Festival and distinct tribal culture.",
        funFact: "The Battle of Kohima was voted Britain's greatest battle in 2013."
    },
    "odisha": {
        capital: "Bhubaneswar",
        population: "41.9 Million",
        description: "Known for the Jagannath Temple, Sun Temple at Konark, and Chilika Lake.",
        funFact: "The Konark Sun Temple is designed as a chariot on 24 wheels."
    },
    "puducherry": {
        capital: "Puducherry",
        population: "1.2 Million",
        description: "A former French colony known for its French Quarter and spiritual heritage.",
        funFact: "The city was designed based on the grid pattern."
    },
    "punjab": {
        capital: "Chandigarh",
        population: "27.7 Million",
        description: "The Land of Five Rivers, famous for the Golden Temple and vibrant culture.",
        funFact: "The Golden Temple feeds up to 100,000 people daily for free."
    },
    "rajasthan": {
        capital: "Jaipur",
        population: "68.5 Million",
        description: "The Land of Kings, famous for its palaces, forts, and deserts.",
        funFact: "Jaipur was the first planned city of medieval India."
    },
    "sikkim": {
        capital: "Gangtok",
        population: "610,000",
        description: "A Himalayan state known for Kangchenjunga and organic farming.",
        funFact: "The first fully organic state in the world."
    },
    "tamil-nadu": {
        capital: "Chennai",
        population: "72.1 Million",
        description: "Known for its Dravidian-style temples, classical music, and beaches.",
        funFact: "Home to the world's second-longest urban beach, Marina Beach."
    },
    "telangana": {
        capital: "Hyderabad",
        population: "35 Million",
        description: "The youngest state in India, known for the Charminar and IT industry.",
        funFact: "Hyderabad was historically the only global trading center for diamonds."
    },
    "tripura": {
        capital: "Agartala",
        population: "3.6 Million",
        description: "Known for its palaces, temples, and bamboo crafts.",
        funFact: "The Ujjayanta Palace was built by the royal family of Tripura."
    },
    "uttar-pradesh": {
        capital: "Lucknow",
        population: "199.8 Million",
        description: "The most populous state, home to the Taj Mahal and Varanasi.",
        funFact: "Varanasi is one of the oldest continuously inhabited cities in the world."
    },
    "uttarakhand": {
        capital: "Dehradun",
        population: "10 Million",
        description: "Devbhoomi (Land of Gods), known for pilgrimages and trekking.",
        funFact: "The Chipko Movement (hugging trees) started here."
    },
    "west-bengal": {
        capital: "Kolkata",
        population: "91.3 Million",
        description: "Famous for the Sundarbans, Durga Puja, and literary heritage.",
        funFact: "Home to the largest mangrove forest in the world, the Sundarbans."
    }
};

module.exports = stateData;
