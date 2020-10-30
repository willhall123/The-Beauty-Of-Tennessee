const mongoose = require("mongoose");

const park = [
{
"parkName": "Bicentennial Capitol Mall State Park", 
"parkId": "Nashville"
},
{
"parkName": "Big Cypress Tree State Park",
"parkId":	"Martin"		
},
{
"parkName": "Big Hill Pond State Park", 
"parkId": "Selmer"
},
{
"parkName": "Big Ridge State Park",
"parkId": "Maynardville"
},
{
"parkName": "Bledsoe Creek State Park", 
"parkId": "Hendersonville"
},
{
"parkName": "Booker T. Washington State Park", 
"parkId":	"Chattanooga"
},
{
"parkName": "Burgess Falls State Park", 
"parkId": "Cookville"
},
{
"parkName": "Cedars of Lebanon State Park", 
"parkId": "Lebanon"
},
{
"parkName": "Chickasaw State Park", 
"parkId": "West Chester"
},
{
"parkName": "Cordell Hull Birthplace State Park", 
"parkId": "Byrdstown"
},
{
"parkName": "Cove Lake State Park", 
"parkId": "LaFollette"
},
{
"parkName": "Cumberland Mountain State Park", 
"parkId": "Crossville"
},
{
"parkName": "Cummins Falls State Park", 
"parkId": "Gainsboro"
},
{
"parkName": "David Crockett State Park",
"parkId": "Lawrenceburg"
},
{
"parkName": "David Crockett Birthplace State Park", 
"parkId": "Greeneville"
},
{
"parkName": "Dunbar Cave State Park", 
"parkId": "Clarksville"
},
{
"parkName": "Edgar Evins State Park", 
"parkId": "Smithville"
},
{
"parkName": "Fall Creek Falls State Park",
"parkId":	"Van Buren Pikeville"
},
{
"parkName": "Fort Loudoun State Park", 
"parkId": "Sweetwater"
},
{
"parkName": "Fort Pillow State Park", 
"parkId": "Ripley"
},
{
"parkName": "Frozen Head State Park", 
"parkId": "Wartburg"
},
{
"parkName": "Harpeth River State Park", 
"parkId": "Ashland City"
},
{
"parkName": "Henry Horton State Park", 
"parkId":	"Lewisburg"
},
{
"parkName": "Harrison Bay State Park", 
"parkId":	"Chattanooga"
},
{
"parkName": "Hiwassee/Ocoee Scenic River State Park",
"parkId": "Benton"
},
{
"parkName": "Indian Mountain State Park", 
"parkId": "LaFollette"
},
{
"parkName": "Johnsonville State Historic Park",
"parkId": "Johnsonville"
},
{
"parkName": "Justin P. Wilson Cumberland Trail State Park", 
"parkId": "Caryville"
},
{
"parkName": "Long Hunter State Park", 
"parkId": "Nashville"
},
{
"parkName": "Meeman-Shelby Forest State Park", 
"parkId": "Memphis"
},
{
"parkName": "Montgomery Bell State Park", 
"parkId": "Dickson"
},
{
"parkName": "Mousetail Landing State Park", 
"parkId": "Linden"
},
{
"parkName": "Nathan Bedford Forrest State Park", 
"parkId": "Benton"
},
{
"parkName": "Natchez Trace State Park", 
"parkId": "Lexington"
},
{
"parkName": "Norris Dam State Park", 
"parkId": "Oak Ridge"
},
{
"parkName": "Old Stone Fort State Archaeological Park", 
"parkId": "Tullahoma"
},
{
"parkName": "Panther Creek State Park", 
"parkId": "Morristown"
},
{
"parkName": "Paris Landing State Park", 
"parkId": "Paris"
},
{
"parkName": "Pickett CCC Memorial State Park",	
"parkId": "Byrdstown"
},
{
"parkName": "Pickwick Landing State Park",	
"parkId": "Savannah"
},
{
"parkName": "Pinson Mounds State Archaeological Park",	
"parkId": "Jackson"
},
{
"parkName": "Port Royal State Park", 
"parkId": "Clarksville"
},
{
"parkName": "Radnor Lake State Natural Area", 
"parkId": "Nashville"
},
{
"parkName": "Red Clay State Park", 
"parkId": "Cleveland"
},
{
"parkName": "Reelfoot Lake State Park", 
"parkId": "Tiptonville"
},
{
"parkName": "Roan Mountain State Park", 
"parkId": "Elizabethton"
},
{
"parkName": "Rock Island State Park", 
"parkId": "McMinnville"
},
{
"parkName": "Rocky Fork State Park", 
"parkId": "Erwin"
},
{
"parkName": "Seven Islands State Birding Park", 
"parkId": "Knoxville"
},
{
"parkName": "Sgt. Alvin C. York State Historic Park", 
"parkId": "Jamestown"
},
{
"parkName": "South Cumberland State Park",	
"parkId": "Monteagle"
},
{
"parkName": "Standing Stone State Park", 
"parkId": "Livingston"
},
{
"parkName": "Sycamore Shoals State Historic Area",	
"parkId": "Elizabethton"
},
{
"parkName": "Tims Ford State Park", 
"parkId": "Winchester"
},
{
"parkName": "T. O. Fuller State Park",	
"parkId": "Memphis"
},
{
"parkName": "Warriors' Path State Park", 
"parkId": "Kingsport"
},
{
"parkName": "Window Cliffs State Natural Area", 
"parkId": "Cookville"
}
];

const findPark = mongoose.model("findPark", park);

module.exports = findPark;