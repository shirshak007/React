{
"SocialMedias": [
  "https://github.com/",
  "https://www.linkedin.com/",
  "https://www.facebook.com/"
],
"Experiences": [
  {
	"companyName": "Demo1 Technologies",
	"logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
	"url": "https://www.google.com/",
	"roles": [
	  {
		"title": "Full Stack Developer",
		"description": "Built and updated various Chrome Extensions.",
		"startDate": "2017-01-01",
		"endDate": "2017-05-01",
		"location": "New York, USA"
	  }
	]
  },
  {
	"companyName": "Demo2 Technologies",
	"logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
	"url": "https://www.google.com/",
	"roles": [
	  {
		"title": "UI Designer",
		"description": "Design user-fridendly web page",
		"startDate": "2016-05-01",
		"endDate": "2016-09-01",
		"location": "Beijing, China"
	  }
	]
  }
],
"Skills": [
  {
	"Area": "Programming Language",
	"SkillSet": [
	  {
		"Name": "Java",
		"Hot": true
	  },
	  {
		"Name": "C#",
		"Hot": false
	  },
	  {
		"Name": "Python",
		"Hot": false
	  }
	]
  },
  {
	"Area": "Web-Based Application Development",
	"SkillSet": [
	  {
		"Name": "JavaScript (ES5, ES6)",
		"Hot": true
	  },
	  {
		"Name": "TypeScript",
		"Hot": false
	  },
	  {
		"Name": "HTML5",
		"Hot": true
	  },
	  {
		"Name": "CSS (SCSS/SASS)",
		"Hot": true
	  },
	  {
		"Name": "React",
		"Hot": true
	  }
	]
  }      
]   
}


import React, { Component } from 'react';
import data from "./data"; 

const socialMediaList = data.SocialMedias;

class Example1 extends Component {
	render() {
		return (
            <ul>
                {socialMediaList.map(s => (<li>{s}</li>))}
            </ul>
        );
    }
} 
export default Example1;




import React, { Component } from 'react';
import data from "./data"; 

class Example2 extends Component {
	render() {
		return (
            <div>
                {
					data.Experiences.map((experience, i) => {
						return (
							<div key={i}>
								<div>
									<a href={experience.url}>
										<img src={experience.logo} alt={experience.companyName} />
									</a>
									<div>
										<div>
											<a href={experience.url}>{experience.companyName}</a>
										</div>
											{experience.roles.map(function (role, i) { 
												return <div key={i}>
													<h5>{role.title}</h5>
													<span>{role.startDate}</span>
													<span>{role.location}</span>
													<p>{role.description}</p>
												</div>
											})}
									</div>
								</div>
							</div>
						);
					})
				}
            </div>
        );
    }
} 
export default Example2;


import React, { Component } from 'react';
import data from "./data"; 

class Example3 extends Component {
	render() {
		return (
            <div>
                {
                  data.Skills.map((skill) => {
                    return (
                      <div>
                        <h4>{skill.Area}</h4>
                        <ul>
                          {
                            skill.SkillSet.map((skillDetail) => {
                              return (
                                  <li>
                                    {skillDetail.Name}
                                  </li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  })
                } 
            </div>
        );
    }
} 
export default Example3;