const petItems = [
  {
    _id: 1,
    img: require("../imgs/cat1.png"),
    title: "Dog Harness BTW",
    price: "$20",
    size: "S M L",
    review: 5,
    pet: "cat"
  },
  {
    _id: 2,
    img: require("../imgs/cat2.png"),
    title: "Dog Harness BLACK",
    price: "$31-38",
    size: "S M L",
    review: 4,
    pet: "cat"
  },
  {
    _id: 3,
    img: require("../imgs/cat3.png"),
    title: "cat troys (value pack)",
    price: "$20-$30",
    size: "S M L",
    review: 5,
    pet: "cat"
  },
  {
    _id: 4,
    img: require("../imgs/cat4.png"),
    title: "dog harness light pink",
    price: "$10-$15",
    size: "S L",
    review: 5,
    pet: "cat"
  },
  {
    _id: 5,
    img: require("../imgs/cat5.png"),
    title: "DOG harness BLUE",
    price: "$5-$15",
    size: "S M L",
    review: 4,
    pet: "cat"
  },
  {
    _id: 6,
    img: require("../imgs/cat6.png"),
    title: "harness lovely PINK",
    price: "$23",
    size: "M L",
    review: 5,
    pet: "cat"
  }
];

export function getPopularItems(n) {
  return petItems.filter(x => x._id <= n);
}

export function getItems() {
  return petItems;
}
