# backbonefirstapp

Backbone is an excellent JavaScripts library that you can use to write web applications in a neat, efficient manner. we  use Backbone's models, views and collections to manage  information and to display it on a webpage. And then we use events and routers to create navigational logic in my web app.

 It does this by basing itself on what's known as the Model View Controller design pattern. But, that's a lot to say, so it's commonly referred to as MVC.

 MVC has 3 components Backbone has 6 components.
 no controllers in recent versions of the library.


 Backbone components are :

 Models: store data 

 Views display model data onto a web page

 Collections: a group of models really javascript 		array

 Events: bind custom events to our code 

 Routers: create navigation in our web app


 Sync: maps Backbone data to the server side

 Other Backbone facts

 Backbone componets are javascripts objects
 simple key/value pairs of js methods and properties 
 we can create our own methods and properties 

 setup file structure
 ------------------
 modules

  modules are a way to refer to simple JavaScript files. In my Backbone app, modules will contain a specific block of code related to a particular Backbone component

  code related to a Backbone model would be placed in a JavaScript file with model code only. No view code or controller code is allowed, just model code and nothing else. This same principle would be used when creating view, collection, and router code. And as a reminder, Backbone event code is mixed in with the other components and won't be broken out into a separate file from my app. Now, modules make our code easier to understand and if we put it all in one long file.

  <script src="js/libs/jquery-3.2.0.min.js"></script> 
  <script src="js/libs/underscore-min.js"></script> 
  <script src="js/libs/backbone-min.js"></script> 

Backbone has two dependencies that it needs to function properly. The core jQuery library and the core underscore library.  jQuery. It will  interact with elements on  webpage. With Backbone, this is mostly done with the help of jQuery's .html method. underscore, which provides a wide array of extra functionality to the core Backbone code.



 jQuery first, then underscore, then Backbone after that. That's the order that these three particular files




first create model then crete instances of that model.

A name space is a coding technique that ensures my variables don't conflict with other variables that might exist on my web page. So on line four I have a variable called app.singleflower 
models aren't the only ways to organize data in Backbone. Collections play a role here as well