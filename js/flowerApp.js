//creting 3 instances of singleFlower
var redRoses = new app.singleFlower({
	name: "RedRoses",
	price: 39.05,
	color: "Red",
	img: "images/redRoses.jpg",
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
	img: "images/heirloomRoses.jpg",
	link: "heirloomRose"
});
var flowerGroup = new app.FlowersCollection([
	redRoses,heirloomRoses
		]);
flowerGroup.add(rainbowRoses);
console.log(flowerGroup.toJSON());

//console messages based on instances
console.log(heirloomRoses.toJSON());
console.log(rainbowRoses.toJSON());
console.log(redRoses.toJSON());

 //price change property
// rainbowRoses.set('price',20);



