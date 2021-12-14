
# Mobiles Arena Marketplace Web App

It is web application that provides the third party vendors to sell their mobile phones and accessories at one place. Generate revenues, and takes payments to their bank accounts directly.

This is a complete marketplace website which connects the customers i.e mobile buyers and sellers together, provides online payment solutions so that the sellers can sell their products easily.





## Features

- Seller / Customer Profiles
- Add Products
- Online purchasing through credit card payments.
- Seller can access their dashboard to take all the necessary information about their earnings.
- Product filters
- Cart




## Tech Stack

**Client:** React, Zustand, Styled Components.

**Server:** Node, Express.


## Documentation

The frontend of this application is developed by using React JS.
[React JS Guide ](https://reactjs.org/)

To store the products, sellers and customer information firebase firestore is used for this purpose.
[Firebase Firestore Documentation](https://firebase.google.com/docs/firestore)

For secure payments methods, payouts and bank transfers I used Stripe connect express for handling all these features.
[Stripe Connect Express](https://stripe.com/docs/connect/express-accounts)

To store the product images and other files, firebase storage is used.
[Firebase store](https://firebase.google.com/docs/storage)



The backend is developed by using node and express server.
[Backend Server](https://github.com/fahad-aleem/Node-Stripe)


## Installation

Clone frontend repository.

```bash
  git clone https://github.com/fahad-aleem/MarketPlaceWithStripe.git 
  cd MarketPlaceWithStripe
```
Install dependencies
```bash
  npm install
```
Clone server
```bash
  git clone https://github.com/fahad-aleem/Node-Stripe.git 
  cd Node-Stripe
```
Install dependencies
```bash
  npm install
```

Start server
```bash
  npm start
```

First, start the backend server and then start frontend. Otherwise there will be some url issues.

Start Frontend
```bash
  npm start
```

    