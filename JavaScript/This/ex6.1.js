const coffeeShop = {
  beans: 40,
  money: 100, 
  beanCost: 0.2,

  buyBeans(numBeans) {
    const cost = numBeans * this.beanCost;

    if (this.money < cost) {
      console.log("Not enough money to buy beans.");
      return;
    }

    this.beans += numBeans;
    this.money -= cost;
  },
  
  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 7 },
    frenchPress: { beanRequirement: 12, price: 6 }
  },

  makeDrink(drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log(`Sorry, we don't make ${drinkType}`);
      return;
    }

    if (this.beans < drink.beanRequirement) {
      console.log("Sorry, we're all out of beans!");
      return;
    }

    this.beans -= drink.beanRequirement;
  },

  buyDrink(drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log(`Sorry, we don't make ${drinkType}`);
      return;
    }

    this.money += drink.price;
    this.makeDrink(drinkType);
  },
};
