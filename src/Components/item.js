const petItems = [
  {
    img: require("../imgs/item1.png"),
    title: "Dog Harness BTW",
    price: "$20"
  },
  {
    img: require("../imgs/item2.png"),
    title: "Dog Harness BLACK",
    price: "$31-38"
  },
  {
    img: require("../imgs/item3.png"),
    title: "cat troys (value pack)",
    price: "$20-$30"
  },
  {
    img: require("../imgs/item4.png"),
    title: "dog harness light pink",
    price: "$10-$15"
  }
];

export function getItems() {
  return petItems;
}
