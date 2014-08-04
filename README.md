Coffee Vending
=============
We're going to be building a simple vending machine using CoffeeScript and all of the tools we've learned so far. I've added a very simple `index.html` file that you will be using. You will need to add any compiled javascript files to this `index.html` file. There will also be some pre-made DOM elements that you will need to interact with.  Take a look at the `index.html` file. You can change this around as needed, feel free to add whatever you deem necessary. There will probably be quite a few things that need to be added and changed.


Yes, I know the styling is awful.

Vending Machine Requirements
==========
For the sake of simplicity, a user will only be able to enter in a quarter at a time. If a user has entered enough money to make a purchase and clicks on an item, that item should be put into the "item return". If a user attempts to purchase an item but has not entered sufficient change, the "info screen" should show how much is still needed.


Here are some simple requirements, just to get you going. Depending on how well we do, I will continue to add to them:


----------
Given that I have not inserted any money

When I click on the "insert 25c" button

Then the info screen should read 0.25


----------
Given that I have entered some amount of money

When I click on the "reset" button

Then the info screen should read 0.00


----------
Given that I have entered sufficient money to purchase something

When I click on an item to purchase it

Then that item will be put into the item return

And that item will have one less in stock


----------
Given that I have entered sufficient money to purchase an item

And that item is not in stock

When I click on the item to purchase it

Then it will not be vended

And the info screen should flash a message indicating that item is out of stock


Some Hints
==========
Here are a few hints that might help get you going. You will still probably need to refer to some documentation and/or some of the previous projects we've worked on.


Toolchain setup
----------
* There are several tools that we've been learning about that need to be installed via NPM, so we will probably need a `package.json`.
* We're going to do some DOM manipulation, so you might need jQuery. How about a `bower.json`?
* I haven't made a `scripts` or `specs` directory, we'll need those as well as a `Gruntfile.js` to get going. You will need to add `grunt` and any necessary `grunt-contrib` files to your `package.json`.
* Don't forget that we've been using testem to run tests. This means we will also need a `testem.json`
* If you've added all of these things, it might be time to do an `npm install` and a `bower install`
