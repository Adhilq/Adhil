const hello = {
  name: "john",
  place: "palakkad",
  great: function () {
    console.log("I am " + this.name + " From " + this.place);
  },
  message: function () {
    console.log("Good Afternoon");
  },
};

module.exports = hello;
