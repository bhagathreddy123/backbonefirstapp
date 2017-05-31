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

Watching for model changes:
-----------------------------

watch for such changes and be alerted when they occur. All of this get's done with the help of 4 backbone methods - Initialize, get, set, and on.

initialize() - watches for changes
set() - find a specific model property
get() - changes or add new properties to models
on() - triggers the changes

 A collection is a group of model instances.

 To create a collection, you first have to let it know which model it's based on.

This is a must. A collection will not work if you skip this step. From there, you can add model instances to it in a few different ways. You can either add the instances as parameters to your collection instance with the help of a JavaScript array. Or you can add them one by one using a collections internal.add method. Collections also have an internal.remove method that does as you would expect. It removes model instances from a given collection.

creating a variable called app.FlowersCollection, and setting it equal to the backbone.collection.extend method. On line 6, and telling my collection that it should look to the app.Flower model I created earlier when it starts to add instances to it's group

adding model instances to a collection is a two step process. First, I need to instantiate the collection, and next I have to actually add model instances to it.

Using the variable name flowerGoup. I've also passed in a JavaScript array as a parameter. You can tell it's an array because it's enclosed in these brackets here, and the array is a list of the model instances that I've created up to this point.



Views:


contains the rules for moving data into html
views create templates using underscore etc

we can use pther templates also
use render() also sends model data to the web page

it's a good idea to use one set of view logic for a single model instance and another set of view logic for a collection of model instances

the views are very dependent on one another
the viers communicate with each other

Model instance data gets stored in an article tag
Collection data gets stored in a section tag