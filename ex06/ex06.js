const kei = (n) => n * 100 - 5;
const san = (n) => (n + 3) * 8 + 3;

console.log(kei(1));
console.log(san(1));

const items = [
  // 日  月  火  水  木  金  土
  [14, 93, 89, 51, 85, 59, 33],
  [69, 27, 40, 76, 25, 21, 55],
  [55, 60, 3, 28, 49, 5, 91],
  [19, 56, 92, 66, 53, 80, 13],
];

const sums = items.map((item) =>
  item.reduce(function (x, y) {
    return x + y;
  })
);

console.log(sums); //=> [424, 313, 291, 379]
