var app = app || {};
app.singleFlower = Backbone.Model.extend ( {

	defaults: {
		color: "pink",
		img: "images/sunflower.jpg"
	},
	initialize: function() {
 	// 3 instances so 3 times print the message
            document.write("Welcome to TutorialsPoint..");
            console.log("a mode instance named " + this.get("name") + "has been created and it costs " + this.get("price"));
}
})