// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();
 
//The homepage window.
var win1 = Titanium.UI.createWindow({  
    title:'Home',
    backgroundColor:'#fff'

});

//Homepage tab.
var tab1 = Titanium.UI.createTab({  
//    icon:'tap_icon.png',
    title:'Home',
    window:win1,
    backgroundColor:'#e49b0f'
    
    
});

//The imgae of homepage
var myImage = Ti.UI.createImageView({

	width:600,
	height:600,
	image:'mom.PNG'
});

//Label on the homepage.
var label1 = Titanium.UI.createLabel({
	color:'#5c5c5c',
	width:600,
	height:600,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

//Label on the homepage.
var label1a = Titanium.UI.createLabel({
	color:'#5C5C5C',
	text:'April 17th - 19th',
	font:{fontSize:35,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	top:380
});

//Create a function make the image clickable.
myImage.addEventListener('click', function(e) {    
            Ti.API.info("image clicked");
            Ti.Platform.openURL("http://www.uidaho.edu/alumni/sarb/momsweekend");

 });           

//Add all the things together.
label1.add(myImage);
win1.add(label1);
win1.add(label1a);


//Window for Events page
var win2 = Titanium.UI.createWindow({  
    title:'Events',
    backgroundColor:'#ffe375'
});

//Tab for Events page.
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Events',
    backgroundColor:'#ECB957',
    window:win2
});

//Label for Events page.
var label2 = Titanium.UI.createLabel({
	color:'#ffe375',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

//A list of view contains event information.
var view2 = Ti.UI.createView({});

//The table that "contains" list of views.
var tableView = Titanium.UI.createTableView({
	scrollable: true	
});

var firstSection = Ti.UI.createTableViewSection({
	headerTitle: 'Events we have',
	footerTitle: 'Join us!'
	
});

var firstRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	height:'80',
	title:'Amazing Race Traditions Challenge - 4/17 - 5-6pm'
});

//Each row have specific informaiton.
var firstInfo = Titanium.UI.createLabel({
	text:'Teams of two will compete against others across campus to learn about University of Idaho traditions landmarks.',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'50',
	left:'20',
	height:'30'
	
});

var secondRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	backgroundColor:'white',
	height:'80',
//	bottom:'20',
	title:'CALS Moms’Weekend Gala Wine and Cheese Tasting - 4/17 - 5-8pm'
});

var secondInfo = Titanium.UI.createLabel({
	text:'​Enjoy entertainment by the UI Ballroom Dance Team while sampling local cheeses, wine pairings and Vandal Brand Meats!',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'50',
	left:'20',
	height:'30'
	
});

var thirdRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	//backgroundColor:'white',
	height:'80',
//	bottom:'20',
	title:'Bella Notte: An Italian Dinner - 4/17 - 5-8:30pm'
});

var thirdInfo = Titanium.UI.createLabel({
	text:'Join us for a homemade Italian spaghetti dinner and dessert auction featuring live music performed by students from the Lionel Hampton School of Music.',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'50',
	left:'20',
	height:'30'
	
});

var fourthRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	//backgroundColor:'white',
	backgroundColor:'white',
	height:'80',
//	bottom:'20',
	title:'Brunch featuring University of Idaho Jazz Choir - 4/18 - 9:30am'
});

var fourthInfo = Titanium.UI.createLabel({
	text:'Enjoy a lovely breakfast buffet set to the sounds of the UI Jazz Choir. We also will announce the 2015 Mom of the Year!',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'50',
	left:'20',
	height:'30'
	
});

var fifthRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	//backgroundColor:'white',
	height:'80',
//	bottom:'20',
	title:'Key for a Cure Fun Run​ - 4/18 - 10am'
});

var fifthInfo = Titanium.UI.createLabel({
	text:'A 5K fun run around our beautiful campus. Funds raised from registration costs go to the Susan G. Komen Foundation.',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'50',
	left:'20',
	height:'30'
	
});

var sixthRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	//backgroundColor:'white',
	backgroundColor:'white',
	height:'80',
//	bottom:'20',
	title:'Annual Phi Delta Theta Turtle Derby - 4/18 - 11am'
});

var sixthInfo = Titanium.UI.createLabel({
	text:'Phi Delta Theta hosts its 56th annual Turtle Derby philanthropy event. Teams race live turtles to win. All proceeds go to the Lou Gehrigs foundation.',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'50',
	left:'20',
	height:'30'
	
});

var seventhRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	//backgroundColor:'white',
	height:'80',
	title:'Greenthumb 101 - 4/18 - 10:30-11:30am'
});

var seventhInfo = Titanium.UI.createLabel({
	text:'Come in for a planting lesson from the UI Plant Soil Science Club including a presentation on planting an bedding plant options. Plant a pot or hanging basket with up three plants.',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'50',
	left:'20',
	height:'30'
	
});

var eighthRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	//backgroundColor:'white',
	backgroundColor:'white',
	height:'90',
	title:'Greenthumb 201 - 4/18 - 1-2pm'
});

var eighthInfo = Titanium.UI.createLabel({
	text:'Come in for a planting lesson from the UI Plant Soil Science Club including an overview of bedding plants and intro to pest problems and diseases. Plant a pot or hanging basket with up three plants.',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'left',
	top:'50',
	left:'20',
	height:'50'
	
});

var ninthRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	//backgroundColor:'white',
	height:'80',
	title:'Dinner and Entertainment with Frangela - 4/18 - 6:30pm'
});

var ninthInfo = Titanium.UI.createLabel({
	text:'Enjoy a dinner buffet followed by a comedy show from these two talented performers!',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'50',
	left:'20',
	height:'30'
});
	
firstSection.add(firstRow);
firstSection.add(secondRow);
firstSection.add(thirdRow);
firstSection.add(fourthRow);
firstSection.add(fifthRow);
firstSection.add(sixthRow);
firstSection.add(seventhRow);
firstSection.add(eighthRow);
firstSection.add(ninthRow);
firstRow.add(firstInfo);
secondRow.add(secondInfo);
thirdRow.add(thirdInfo);
fourthRow.add(fourthInfo);
fifthRow.add(fifthInfo);
sixthRow.add(sixthInfo);
seventhRow.add(seventhInfo);
eighthRow.add(eighthInfo);
ninthRow.add(ninthInfo);
tableView.setData([firstSection]);
view2.add(tableView);

win2.add(view2);
win2.add(label2);


//Window for Promotion page.
var win3 = Titanium.UI.createWindow({
	title:'Promotions',
	backgroundColor: '#fff'	
});

//Tab for Promotion page.
var tab3 = Titanium.UI.createTab({
	icon:'KS_nav_ui.png',
	title: 'Promotions',
	backgroundColor:'#ECB957',
	window: win3	
});

//Label for Promotion page.
var label3 = Titanium.UI.createLabel({
	color:'#ffd119',
	//text:'Promotions',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

//List of views for Promotion page.
var view3 = Ti.UI.createView({});


//Make the view scrollable.
var tableViewb = Titanium.UI.createTableView({
	scrollable: true	
});

var firstSectionb = Ti.UI.createTableViewSection({
	headerTitle: 'Sponsors',

});

var firstRowb = Titanium.UI.createTableViewRow({
	color: '#47042d',
	backgroundColor:'#ff6666',
	height:'80',
	title:'Paradise Creek Bicycles'
});

var firstInfob = Titanium.UI.createLabel({
	text:'Offering half-off bicycle rentals for visiting moms and their kids!',
	font:{fontSize:'13',fontWeight:'blod'},
	textAlign:'center',
	top:'45',
	left:'20',
	height:'20'
	
});

var secondRowb = Titanium.UI.createTableViewRow({
	color: '#47042d',
	backgroundColor:'white',
	height:'80',
	title:'Prichard Art Gallery'
});

var secondInfob = Titanium.UI.createLabel({
	text:'Offering a $5 off on any purchase of $25 or more at the UI Prichard Art Gallery Gift Store!',
	font:{fontSize:'13',fontWeight:'blod'},
	textAlign:'center',
	top:'45',
	left:'20',
	height:'20'
	
});

var thirdRowb = Titanium.UI.createTableViewRow({
	color: '#47042d',
	backgroundColor:'#ff6666',
	height:'80',
	title:'One World Cafe'
});

var thirdInfob = Titanium.UI.createLabel({
	text:'Offering 20% off drinks and merchandise!',
	font:{fontSize:'13',fontWeight:'blod'},
	textAlign:'center',
	top:'45',
	left:'20',
	height:'20'
	
});

var fourthRowb = Titanium.UI.createTableViewRow({
	color: '#47042d',
	backgroundColor:'white',
	height:'80',
	title:'Cafe Artista'
});

var fourthInfob = Titanium.UI.createLabel({
	text:'Offering $1.00 off 2 drinks with Student ID!',
	font:{fontSize:'13',fontWeight:'blod'},
	textAlign:'center',
	top:'45',
	left:'20',
	height:'20'
	
});

var fifthRowb = Titanium.UI.createTableViewRow({
	color: '#47042d',
	backgroundColor:'#ff6666',
	height:'80',
	title:'​Essential Glass Works Gallery'
});

var fifthInfob = Titanium.UI.createLabel({
	text:'Offering a FREE pair of Essential Works Dichroic Glass Mini Earrings, valued at $15, when you make a purchase over $25!',
	font:{fontSize:'13',fontWeight:'blod'},
	textAlign:'center',
	top:'45',
	left:'20',
	height:'20'
	
});

var sixthRowb = Titanium.UI.createTableViewRow({
	color: '#47042d',
	backgroundColor:'white',
	height:'80',
	title:'Latah Trail Foundation'
});

var sixthInfob = Titanium.UI.createLabel({
	text:'Offering a free group trail ride​​ from Moscow to Troy and back!',
	font:{fontSize:'13',fontWeight:'blod'},
	textAlign:'center',
	top:'45',
	left:'20',
	height:'20'
	
});

var seventhRowb = Titanium.UI.createTableViewRow({
	color: '#47042d',
	backgroundColor:'#ff6666',
	height:'80',
	title:'​Palouse Habitat for Humanity'
});

var seventhInfob = Titanium.UI.createLabel({
	text:'Offering $2 off each ticket purchased for the dinner and auction fundraiser taking place at the SEL Event Center in Pullman from 5:30-9 Saturday night! Just use offer code "Vandal Mom".',
	font:{fontSize:'13',fontWeight:'blod'},
	textAlign:'left',
	top:'45',
	left:'20',
	height:'30'
	
});

var eighthRowb = Titanium.UI.createTableViewRow({
	color: '#47042d',
	backgroundColor:'white',
	height:'80',
	title:'Oxfam'
});

var eighthInfob = Titanium.UI.createLabel({
	text:'Offering a free concert in the Clearwater/Whitewater room on Saturday the 18th at 6pm. Hillfolk Noir, a local band, will be performing.',
	font:{fontSize:'13',fontWeight:'blod'},
	textAlign:'center',
	top:'45',
	left:'20',
	height:'20'
	
});

var ninthRowb = Titanium.UI.createTableViewRow({
	color: '#47042d',
	backgroundColor:'#ff6666',
	height:'80',
	title:'Honors Leadership Council'
});

var ninthInfob = Titanium.UI.createLabel({
	text:'Offering 20% off drinks and merchandise!',
	font:{fontSize:'13',fontWeight:'blod'},
	textAlign:'center',
	top:'45',
	left:'20',
	height:'20'
	
});

var tenthRowb = Titanium.UI.createTableViewRow({
	color: '#47042d',
	backgroundColor:'white',
	height:'80',
	title:'Moscowrade'
});

var tenthInfob = Titanium.UI.createLabel({
	text:'Offering a free wearable art fashion show on Saturday the 18th! Reception will take place at 7pm with the show at 8pm in the Vandal Ballroom.',
	font:{fontSize:'13',fontWeight:'blod'},
	textAlign:'center',
	top:'45',
	left:'20',
	height:'20'
	
});

var elethRowb = Titanium.UI.createTableViewRow({
	color: '#47042d',
	backgroundColor:'#ff6666',
	height:'80',
	title:'Fencing Club'
});

var elethInfob = Titanium.UI.createLabel({
	text:'Offering a free fencing demonstration and fencing lessons on Saturday the 18th!​',
	font:{fontSize:'13',fontWeight:'blod'},
	textAlign:'center',
	top:'45',
	left:'20',
	height:'20'
	
});
firstSectionb.add(firstRowb);
firstSectionb.add(secondRowb);
firstSectionb.add(thirdRowb);
firstSectionb.add(fourthRowb);
firstSectionb.add(fifthRowb);
firstSectionb.add(sixthRowb);
firstSectionb.add(seventhRowb);
firstSectionb.add(eighthRowb);
firstSectionb.add(ninthRowb);
firstSectionb.add(tenthRowb);
firstSectionb.add(elethRowb);
firstRowb.add(firstInfob);
secondRowb.add(secondInfob);
thirdRowb.add(thirdInfob);
fourthRowb.add(fourthInfob);
fifthRowb.add(fifthInfob);
sixthRowb.add(sixthInfob);
seventhRowb.add(seventhInfob);
eighthRowb.add(eighthInfob);
ninthRowb.add(ninthInfob);
tenthRowb.add(tenthInfob);
elethRowb.add(elethInfob);
tableViewb.setData([firstSectionb]);
view3.add(tableViewb);

win3.add(view3);
win3.add(label3);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);


// open tab group
tabGroup.open();
