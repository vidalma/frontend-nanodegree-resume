/*
	VIDALMA
*/
var bio =
{
	"name": "Vidalma",
	"role": "UX Nerd",
	"contacts":
	{
		"mobile": "323.374.5134",
		"email": "vivi@vidalma.biz",
		"github": "vidalma",
		"twitter": "coutureyouth",
		"location": "Los Angeles"
	},
	"welcomeMessage": "Looking to collaborate with brilliant minds, brave visionaries and determined artists.",
	"skills": [" awesomeness "," user experience "," saving the universe ", "taking on the world"],
	"bioPic": "../frontend-nanodegree-resume/images/vidalma.jpg"
};

var work =
{
	"card":
		{
			"name": "CARD",
			"title" : "UX Nerd",
			"dates" : "Oct. 2013 to present",
			"location" : "Woodland Hills",
			"description": "- Multi-Media Design - User Research & Content Strategy - Interface Design & Front End Development - Usability Analysis & Information Architecture - Interaction Design"
		},
	"converse":
		{
			"name": "Converse",
			"title" : "Maestro",
			"dates" : "Mar. 2012 to Oct. 2013",
			"location" : "Santa Monica",
			"description" : "- Creating unique designs for print on a variety of merchandise - Ambassador for customization and brand - Service customers by identifying their personalization needs - Operated various commercial garment printers"	
		}
};

var education = 
{
	"schools": 
	[
		{
			"name": "Art Institute",
			"location": "Santa Monica",
			"degree": "Associate",
			"dates" : "summer 2011 to summer 2013",
			"major" : "Web Design-Interactive"
		},
		{
			"name": "Fashion Institute",
			"location": "Los Angeles",
			"degree": "N/A",
			"dates" : "summer 2004 to summer 2005",
			"major" : "Fashion Design"
		}
	
	],

	"onlineCourses" :
	[
		{
			"title" : "Front-End Development",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

var projects =
{
	"oneproj" :
	{
		"title" : "brain",
		"dates" : "April 2015 to August 2015",
		"description" : "Brain graphic made in illustrator to be used as an svg.",
		"image" : "../frontend-nanodegree-resume/images/brain-inside.jpg"
	},
	"twoproj" :
	{
		"title" : "iBehavioral training mobile app" ,
		"dates" : "March 2014 to September 2014",
		"description" : "Mobile App interface design for The Institute for Behavioral Training (IBT).",
		"image" : "../frontend-nanodegree-resume/images/ibt-mobile.jpg"
	},
	"threeproj" :
	{
		"title" : "Continuing Education for Licensed Professionals",
		"dates" : "March 2014 to September 2014",
		"description" : "Responsive (layout shifter) prototype website created to be as part of a presentation in a new product proposal.",
		"image" : "../frontend-nanodegree-resume/images/celp.jpg"
	}
	
};

function displayContact() 
{
	for (var i in bio.contacts)
	{
		var formatContact = HTMLcontactGeneric.replace("%contact%" , i);
		var formatContact = formatContact.replace("%data%" , bio.contacts[i]);
		$("#topContacts").append(formatContact);
		$("#footerContacts").append(formatContact);
	}
}

function displayWork() 
{
	for(i in work) 
	{
		console.log(work[i]);
		var employerFormat = HTMLworkEmployer.replace("%data%", work[i].name);
		var titleFormat = HTMLworkTitle.replace("%data%", work[i].title);
		var datesFormat = HTMLworkDates.replace("%data%", work[i].dates);
		var descriptionFormat = HTMLworkDescription.replace("%data%", work[i].description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append( employerFormat + titleFormat);
		$(".work-entry:last").append(datesFormat);
		$(".work-entry:last").append(descriptionFormat);
	}
};

function displayProject() 
{
	for (project in projects)
	{
		console.log(projects[project]);
		if(projects[project].title)
		{
			$("#projects").append(HTMLprojectStart);
			
			var formatTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
			$(".project-entry:last").append(formatTitle);
			
			var formatDates = HTMLprojectTitle.replace("%data%", projects[project].dates);
			$(".project-entry:last").append(formatDates);
			
			var formatDescription = HTMLprojectDescription.replace("%data%" , projects[project].description);
			$(".project-entry:last").append(formatDescription);
			
			if (projects[project].image)
			{
				if (projects[project].image.length > 0)
				{
					var formatImage = HTMLprojectImage.replace("%data%" , projects[project].image);
						$(".project-entry:last").append(formatImage);
						
				}
			}
		}
	}
}

function displayEducation()
{
	for (var i in education.schools)
	{
		$("#education").append(HTMLschoolStart);	
		var formatSchName = HTMLschoolName.replace("%data%", education.schools[i].name );
		var formatSchDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree );
		var formatSchDates= HTMLschoolDates.replace("%data%", education.schools[i].dates );
		var formatSchLocation= HTMLschoolLocation.replace("%data%", education.schools[i].location );
		var formatSchMajor= HTMLschoolMajor.replace("%data%", education.schools[i].major );
		$(".education-entry:last").append(formatSchName);
		$(".education-entry:last").append(formatSchDegree);
		$(".education-entry:last").append(formatSchDates);
		$(".education-entry:last").append(formatSchLocation);
		$(".education-entry:last").append(formatSchMajor);
	}
	for ( var i in education.onlineCourses)
	{
		$("#education").append( HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		var formatOnlTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formatOnlSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formatOnlDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		var formatOnlUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formatOnlTitle + formatOnlSchool);	
		$(".education-entry:last").append(formatOnlDates);
		$(".education-entry:last").append(formatOnlUrl);	
	}
}

function displayHeader()
{
	var formattedName = HTMLheaderName.replace("%data%", "VIDALMA");
	var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Rockstar");
	var formatBioImage = HTMLbioPic.replace("%data%", bio.bioPic);
	var formatWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	
	$("#header").prepend(formattedName + "  " + formattedRole );
	$("#header").append(formatBioImage);
	$("#header").append(formatWelcome);
	$("#header").append(HTMLskillsStart);
}

function displaySkills() 
{
	for(var i in bio.skills)
	{
		var skillsNew = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(skillsNew);
	}
}

function inName(first, last) 
{
	var casedLast = last.toUpperCase();
	var casedFirst = first.charAt(0).toUpperCase();
	casedFirst = casedFirst + first.substring(1, first.length-1);
	
	return casedFirst + " " + casedLast;
}

displayHeader();
displaySkills();
displayContact();
displayWork();
displayProject();
displayEducation();

$("#mapDiv").append(googleMap);

//$("#main").append(internationalizeButton);