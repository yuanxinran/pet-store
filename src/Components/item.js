const petItems = [
  {
    _id: 1,
    img: require("../imgs/cat1.png"),
    title: "Cat bagpack ALL SIZE",
    price: "$20",
    size: "S M L",
    review: 5,
    reviewNum: 221,
    pet: "cat"
  },
  {
    _id: 2,
    img: require("../imgs/cat2.png"),
    title: "Cat bagpack Transparent NN",
    price: "$31-38",
    size: "S M L",
    review: 4,
    reviewNum: 121,
    pet: "cat"
  },
  {
    _id: 3,
    img: require("../imgs/cat3.png"),
    title: "BAGPACK multiple colors",
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
    price: "$10-$15",
    size: "S L",
    review: 5,
    reviewNum: 31,
    pet: "cat"
  },
  {
    _id: 5,
    img: require("../imgs/cat5.png"),
    title: "Cat bagpack BLUE",
    price: "$5-$15",
    size: "S M L",
    review: 4,
    reviewNum: 89,
    pet: "cat"
  },
  {
    _id: 6,
    img: require("../imgs/cat6.png"),
    title: "harness lovely PINK",
    price: "$23",
    size: "M L",
    review: 5,
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
  return petItems[n];
}
