let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topplings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject("Our shop is closed");
    }
  });
};

order(2000, () => document.write(`${stocks.fruits[0]} was selected<br>`))
  .then(() => {
    return order(1000, () => document.write("production has started<br>"));
  })
  .then(() => {
    return order(2000, () => document.write("production has started<br>"));
  })
  .then(() => {
    return order(1000, () => {
      document.write(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected<br>`);
    });
  })
  .then(() => {
    return order(1000, () => document.write("start the machine<br>"));
  })
  .then(() => {
    return order(2000, () => {
      document.write(`ice cream was placed on ${stocks.holder[0]}<br>`);
    });
  })
  .then(() => {
    return order(3000, () => {
      document.write(`${stocks.topplings[0]} was selected<br>`);
    });
  })
  .then(() => {
    return order(1000, () => document.write("ice cream was served<br>"));
  })
  .then(() => {
    return order(1000, () => document.write("thanks for your patronage<br>"));
  })
  .catch((error) => {
    document.write(error + "<br>");
    document.write("customer left<br>");
  })
  .finally(() => {
    document.write("day ended, shop is closed<br>");
  });
