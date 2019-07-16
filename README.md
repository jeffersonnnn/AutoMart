# AutoMart

Auto Mart is an online marketplace for automobiles of diverse makes, model or body type. With
Auto Mart, users can sell their cars or buy from trusted dealerships or private sellers.

[![Build Status](https://travis-ci.com/jeffersonnnn/AutoMart.svg?branch=feature)](https://travis-ci.com/jeffersonnnn/AutoMart) [![Coverage Status](https://coveralls.io/repos/github/jeffersonnnn/AutoMart/badge.svg?branch=feature)](https://coveralls.io/github/jeffersonnnn/AutoMart?branch=feature)

## Required Features

- User can sign up.
- User can sign in.
- User (seller) can post a car sale advertisement.
- User (buyer) can make a purchase order.
- User (buyer) can update the price of his/her purchase order.
- User (seller) can mark his/her posted AD as sold.
- User (seller) can update the price of his/her posted AD.
- User can view a specific car.
- User can view all unsold cars.
- User can view all unsold cars within a price range.
- Admin can delete a posted AD record.
- Admin can view all posted ads whether sold or unsold

## Technologies

- Node JS
- Express
- Mocha & Chai
- ESLint
- Babel
- Travis CI
- Code Climate & Coveralls

## Requirements and Installation

To install and run this project you would need to have installed:

- Node Js
- Git

To run:

```
$ git clone https://github.com/jeffersonnnn/AutoMart.git
$ cd AutoMart
$ npm install
$ npm dev-start
```

## Testing

```
$ npm test
```

## Pivotal Tracker stories

[https://www.pivotaltracker.com/n/projects/2346117](https://www.pivotaltracker.com/n/projects/2346117)

## Template UI

You can see a hosted version of the template at [https://jeffersonnnn.github.io/AutoMart/](https://jeffersonnnn.github.io/AutoMart/)

## API Endpoints

| Endpoint                              | Functionality                             |
| ------------------------------------- | ----------------------------------------- |
| POST /auth/signup                     | Create user account                       |
| POST /auth/signin                     | Login a user                              |
| POST /order/                          | Create a purchase order                   |
| PATCH /order/<:order-id>/price        | Update the price of a purchase order      |
|                                       | while the order’s status is still pending |
|                                       |                                           |
| PATCH /car/<:car-id>/status           | Update the price of a car                 |
| GET /car?status=available             | View all unsold cars                      |
|                                       |                                           |
| GET /car?status=available&min_price=​ | User can view all unsold cars within      |
|                                       | a price range                             |
| XXXValue​ &max_price=​ XXXValue       |                                           |
|                                       |                                           |
| DELETE /car/<:car_id>/                | Delete a specific car Ad                  |
|                                       | while the order’s status is still pending |
| GET /car/                             | View all posted ads                       |
| GET /car/<:car-id>/                   | View a specific car                       |
| POST /car/                            | Create a car sale ad                      |
| GET /car/<:car-id>/                   | View a specific car.                      |

## Author

TJ Ighalo

## License

This is licensed for your use, modification and distribution under the [MIT license.](https://opensource.org/licenses/MIT)
