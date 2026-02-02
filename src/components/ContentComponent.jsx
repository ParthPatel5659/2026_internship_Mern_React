import React from 'react'
import myImage from '../assets/profile.jpeg';
export default function ContentComponent() {
    var student={
    name:"Parth Patel",
    age:21,
    enrollment:212203116061,
    branch:"ICT Engineering",
    college:"GEC BHAVNAGAR"
   }

   var education={
    highschool:{
        schoolname:"Ash High School",
        yearofpassing:2022,
        percentage:88
    },
    college:{
        collegename:"GEC BHAVNAGAR",
        yearofpassing:2026,
        cgpa:9.1
    }
  }

  var skills=["HTML","CSS","JavaScript","ReactJS","NodeJS","ExpressJS","MongoDB"];

  var contact={
    email:"ps9484157@gmail.com",
    phone:+919484157457,
    address:"Bhavnagar,Gujarat,India"
  }
  return (
    <div style={{backgroundColor:"white",border:"1px solid black",minHeight:"500px",width:"100%",height:"auto",padding:"10px"}}>
         <div>
          <img src={myImage} alt="profile" style={{width:"150px",height:"150px",borderRadius:"50%",float:"right",marginRight:"20px"}}/>
         </div>
      <h1>student detail</h1>
      <h3> Name:{student.name}</h3>
      <h3> Age:{student.age}</h3>
      <h3> Enrollment No:{student.enrollment}</h3>
      <h3> Branch:{student.branch}</h3>
      <h3> College:{student.college}</h3>
      <br></br>

      <h1>Education detail</h1>
      <h3> High School Name:{education.highschool.schoolname}</h3>
      <h3> Year of Passing:{education.highschool.yearofpassing}</h3>
      <h3> Percentage:{education.highschool.percentage}%</h3>
      <h3> College Name:{education.college.collegename}</h3>
      <h3> Year of Passing:{education.college.yearofpassing}</h3>
      <h3> CGPA:{education.college.cgpa}</h3>

      <br></br>
      <h1>Skill</h1>
      <h3> {skills[0]}</h3>
      <h3> {skills[1]}</h3>
      <h3> {skills[2]}</h3>
      <h3> {skills[3]}</h3>
      <h3> {skills[4]}</h3>
      <h3> {skills[5]}</h3>
      <h3> {skills[6]}</h3>

      <h1>Contect details</h1>
      <h3> Email:{contact.email}</h3>
      <h3> Phone:{contact.phone}</h3>
      <h3> Address:{contact.address}</h3>
    </div>
  )
}
