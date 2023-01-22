// Question 2. Create your own resume in Json format

var resume = {
    "Name": "Faiza Afrin",
    "Qualification": "English and Communication",
    "Email": "faizaafrin123@gmail.com",
    "Phone":"+91-9876534679",
    "Summary":["self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowlege and intelligence in the growth of the organization"],
    "EDUCATION": {
        "Institution": "Annamalai University",
        "University":"Annamalai University",
        "Degree": "BA",
        "Duration": "2013-2016",
        
    },

     "CERTIFICATIONS" : {
        "Certificate" : "Salesforce Developer",
        "Institution" : "Trialhead by Salesforce",
        "Year" : "2022",
      },

      "LANGUAGES": {
        "language": ("Tamil =>read,write,speak"),
        "language1": ("English =>read,write,speak"),
        "language2": ("Hindi=>read,write"),
      },

      "SKILLS": {
         "Name" : ["Content writting",
               "Blogging",
               "Photography",
               "Salesforce Apex"],
      },
     
      "LOCATION": {
        "Address": "2/3 Pudhunagar main road, kuttalam",
        "PostalCode": "609 801",
        "City": "Mayiladudurai",
        "District":"Mayiladudurai",
        "State":"Tamilnadu",
       
      },

    }
     console.log(resume);