import React from "react";

const Greeting = () => {
  let greeting = [
    "Hello!",
    "Good day!",
    "Good morning!",
    "Top of the morning to you!",
    "Hello there!",
  ];
  const randomGreetingGenerator = (greeting) => {
    let random = Math.floor(Math.random() * greeting.length);
    return greeting[random];
  };
  return (
    <div>
      <h1>{randomGreetingGenerator(greeting)}</h1>
    </div>
  );
};

export default Greeting;
