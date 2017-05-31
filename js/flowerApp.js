//creting 3 instances of singleFlower
var redRoses = new app.singleFlower({
	name: "RedRoses",
	price: 39.05,
	color: "Red",
	img: "images/forest.jpg",
	link: "redRose"
});

var rainbowRoses = new app.singleFlower({
	name: "RainbowRoses",
	price: 29.05,
	color: "orange",
	link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
	name: "heirloomRoses",
	price: 19.05,
	img: "images/ults.jpg",
	link: "heirloomRose"
});


// var tantalizingTulips = new app.Flower({
// name: "Tantanlizing Tulips",
// price: 456,
// color: "red"
// });

// var fleur = new app.Flower({
// name: "Fleur-De-Lis",
// price: 567,
// color:  "blue"
// });


// var flowerGroup = new app.EuropeanFlower([
// 	tantalizingTulips,fleur
// 	]);
// tantalizingTulips.set("originCountry","Holland")
// console.log(flowerGroup.toJSON());

var flowerGroup = new app.FlowersCollection([
	redRoses,rainbowRoses,heirloomRoses
		]);

var flowerGroupView = new app.allFlowersView( { collection: flowerGroup});
$("#allFlowers").html(flowerGroupView.render().el);
// flowerGroup.add(rainbowRoses);
// console.log(flowerGroup.toJSON());

// //console messages based on instances
// console.log(heirloomRoses.toJSON());
// console.log(rainbowRoses.toJSON());
// console.log(redRoses.toJSON());

 //price change property
// rainbowRoses.set('price',20);



