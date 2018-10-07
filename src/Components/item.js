const petItems = [
  {
    _id: 1,
    img: require("../imgs/cat1.png"),
    title: "Cat bagpack ALL SIZE",
    subtitle:
      "- Airline-Approved, Designed for Travel, Hiking, Walking & Outdoor Use",
    price: "$20",
    size: "S M L",
    review: 4.8,
    reviewNum: 221,
    pet: "cat"
  },
  {
    _id: 2,
    img: require("../imgs/cat2.png"),
    title: "Cat bagpack Transparent NN",
    subtitle:
      "- Airline-Approved, Designed for Travel, Hiking, Walking & Outdoor Use",
    price: "$31-38",
    size: "S M L",
    review: 4.2,
    reviewNum: 121,
    pet: "cat"
  },
  {
    _id: 3,
    img: require("../imgs/cat3.png"),
    title: "BAGPACK multiple colors",
    subtitle:
      "- Airline-Approved, Designed for Travel, Hiking, Walking & Outdoor Use",
    price: "$20-$30",
    size: "S M L",
    review: 5,
    reviewNum: 23,
    pet: "cat"
  },
  {
    _id: 4,
    img: require("../imgs/cat4.png"),
    title: "bagpack CAT AND DOG",
    subtitle:
      "- Airline-Approved, Designed for Travel, Hiking, Walking & Outdoor Use",
    price: "$10-$15",
    size: "S L",
    review: 4.7,
    reviewNum: 31,
    pet: "cat"
  },
  {
    _id: 5,
    img: require("../imgs/cat5.png"),
    title: "Cat bagpack BLUE",
    subtitle:
      "- Airline-Approved, Designed for Travel, Hiking, Walking & Outdoor Use",
    price: "$5-$15",
    size: "S M L",
    review: 4.2,
    reviewNum: 89,
    pet: "cat"
  },
  {
    _id: 6,
    img: require("../imgs/cat6.png"),
    title: "harness lovely PINK",
    subtitle:
      "- Airline-Approved, Designed for Travel, Hiking, Walking & Outdoor Use",
    price: "$23",
    size: "M L",
    review: 4.6,
    reviewNum: 45,
    pet: "cat"
  }
];

export function getPopularItems(n) {
  return petItems.filter(x => x._id <= n);
}

export function getItems() {
  return petItems;
}

export function getItem(n) {
  return petItems.find(m => m._id === parseInt(n));
}
