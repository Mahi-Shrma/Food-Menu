[
    {
      "id": 1,
      "name": "Cheeseburger",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
    },
    {
      "id": 2,
      "name": "Pizza",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
    },
    {
      "id": 3,
      "name": "Veggie Burger",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
    },
    {
      "id": 4,
      "name": "Chicken Burger",
      "price": 11.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
    },
    {
      "id": 5,
      "name": "Pasta",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
    },
    {
      "id": 6,
      "name": "Fried Chicken",
      "price": 7.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
    },
    {
      "id": 7,
      "name": "Grilled Cheese Sandwich",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
    },
    {
      "id": 8,
      "name": "Steak",
      "price": 15.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
    },
    {
      "id": 9,
      "name": "Caesar Salad",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
    },
    {
      "id": 10,
      "name": "Fish and Chips",
      "price": 8.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
    },
    {
      "id": 11,
      "name": "Ramen",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
    },
    {
      "id": 12,
      "name": "Burrito",
      "price": 7.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
    },
    {
      "id": 13,
      "name": "Pho",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
    },
    {
      "id": 14,
      "name": "Pad Thai",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
    },
    {
      "id": 15,
      "name": "Gyro",
      "price": 6.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
    },
    {
      "id": 16,
      "name": "Ice Cream",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
    },
    {
      "id": 17,
      "name": "Smoothie",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
    },
    {
      "id": "18",
      "name": "Apple Pie",
      "price": 4.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
    },
    {
      "id": 19,
      "name": "Chocolate Cake",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
    },
    {
      "id": 20,
      "name": "Pancakes",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
    },
    {
      "id": 21,
      "name": "Cupcake",
      "price": 2.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
    },
    {
      "id": 22,
      "name": "Crepes",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
    },
    {
      "id": 23,
      "name": "Club Sandwich",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
    },
    {
      "id": 24,
      "name": "Falafel",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
    },
    {
      "id": 25,
      "name": "Curry",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
    }
  ]
  function getMenu() {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        console.log('Menu:', data);
        return data;
      })
      .catch(error => console.error('Error:', error));
  }
  
  function TakeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Veggie Burger', 'Chicken Burger'];
        const order = {
          burgers: [
            burgers[Math.floor(Math.random() * burgers.length)],
            burgers[Math.floor(Math.random() * burgers.length)],
            burgers[Math.floor(Math.random() * burgers.length)]
          ]
        };
        console.log('Order:', order);
        resolve(order);
      }, 2500);
    });
  }
  
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const order_status = true;
        const paid = false;
        const order = { order_status, paid };
        console.log('Order status:', order);
        resolve(order);
      }, 1500);
    });
  }
  
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const order_status = true;
        const paid = true;
        const order = { order_status, paid };
        console.log('Payment status:', order);
        resolve(order);
      }, 1000);
    });
  }
  
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  async function run() {
    try {
      await getMenu();
      const order = await TakeOrder();
      const order_status = await orderPrep();
      const paid = await payOrder();
      if (paid.paid) {
        thankyouFnc();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  run();
  