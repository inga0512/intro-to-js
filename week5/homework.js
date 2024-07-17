const city = "Ulaanbaatar";
console.log(city);
/* 2 */
const productName = "Airpods Pro 2";
let price = 250;
let discount = 37.6;
const currentPrice = price - price * (discount / 100);
console.log(
  "Wallmart дэлгүүрт " +
    productName +
    " бүтээгдэхүүн " +
    price +
    "$ байснаас " +
    discount +
    "% хямдарч" +
    currentPrice +
    "$ боллоо"
);
/* 3 */
const number1 = 10;
const number2 = 20;
const sum = number1 + number2;
console.log(number1 + " ба " + number2 + " тоонуудын нийлбэр нь " + sum);
/* 4 */
function calculateProblems(count) {
  const problemsPerHour = 2;
  const totalHours = count * problemsPerHour;
  console.log("I study for " + totalHours + " to solve " + count + " problems");
}
calculateProblems(5);
/* 5 */
function printFavoriteFood(name, food) {
  console.log(name + " loves to eat " + food);
}
printFavoriteFood("Sara", "pizza");
/* 6 */
function printWeather(city, temperature) {
  console.log(city + " хотод " + temperature + "°C байна.");
}
printWeather("Chicago", 32);
/* 7 */
function printBookDetails(title, author, yearPublished) {
  console.log(author + " wrote " + title + " in " + yearPublished);
}
printBookDetails("Harry Potter", "J.K. Rowling", 1997);
/* 8 */
function calculateArea(width, height) {
  const area = width * height;
  return area;
}
const area = calculateArea(10, 20);
console.log("Area: " + area);
/* 9 */
function calculateVolume(width, height, depth) {
  const volume = width * height * depth;
  return volume;
}
const volume = calculateVolume(10, 20, 30);
console.log("Volume: " + volume);
/* 10 */
function printTicketInfo(eventName, ticketPrice, discount) {
  return (
    "The ticket price for " +
    eventName +
    " is " +
    ticketPrice +
    "$, but if you buy now you will get " +
    discount +
    "% discount."
  );
}
const ticketInfo = printTicketInfo("Taylor Swift's concert", 50, 20);
console.log(ticketInfo);
