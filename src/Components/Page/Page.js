import React, { Component } from 'react'

import './Page.css'
import Body from './Body/Body'
import Nav from './Nav/Nav'
class Page extends Component {
  urly = str => {
    if (str === 'home') {
      return '/'
    }
    return '/' + str.toLowerCase().split(' ').join('')
  }
  titley = str => {
    return str
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase())
      })
      .join(' ')
  }
  myBodies = {
    home: [
      {
        type: 'splash',
        headOne: 'Evan',
        headTwo: 'Susag',
        img: require('./Pics/world.png'),
        logOne: '☮',
        logTwo: '🌐',
        body: [],
        children: [{}]
      }
    ],
    'about me': [
      {
        type: 'intro',
        children: [
          {
            title: 'About Me',
            img: require('./Pics/evan.jpg'),
            subtitle: 'Growing up in a military family provided me a unique environment that nurtured my technical skills and instilled in me a strong sense of unity with my fellow man. This compassion has driven me to put giving back above all else. I believe I am well equipped to do so by applying my skills to the software industry, so we can usher in a new age of accessibility with regards to our computing machines. I have lived in Colorado, New York and Hawaii. '
          }
        ]
      }
      // { type: 'sandbox', children: [] }
    ],
    projects: [
      // { type: 'intro', children: [] },
      {
        type: 'catalog',
        children: [
          {
            head: 'XML File Transfer',
            gitLink: 'https://github.com/emscook/java-xml-file-transfer-assessment-emscook',
            gitText: 'Click here for the repository of my solution',
            img: 'fas fa-download',
            body: [
              {
                head: '',
                body: [
                  'The student will create an application that inspects a directory, reads in the contents of a file, uses JAXB to create an XML document for that file which contains a username (the name of the student), the date in yyyy-MM-dd format, the filename, and the contents of the file itself (stored as a byte array). The application will then open a Socket, write that XML document to that Socket, and then close the Socket. The application will repeat this process for each file in the designated directory.'
                ]
              },
              {
                head: '',
                body: [
                  'The student will then create an application that hosts a ServerSocket that listens for incoming connections. When a connection is received, it will spawn a client handler thread to interact with the client and then return to listening for new connections. The client handler thread will read an XML document from the connection. The XML document will contain a username, a date, a filename, and the contents of the file. The application will first create a directory for the username if it does not already exist. The application will then create a subdirectory for the date if it does not already exist. Finally, the application will recreate the file in that directory by decoding the Base64 encoded contents and writing the decoded contents to the file.'
                ]
              },
              {
                head: 'Important Topics',
                body: ['Jaxb', 'Marshalling and Unmarshalling', 'Threads']
              }
            ]
          },
          {
            head: 'Quizler',
            gitLink: 'https://github.com/emscook/js-assessment-quizler-emscook',
            gitText: 'Click here for the repository of my solution',
            img: 'fas fa-question',
            body: [
              {
                head: '',
                body: [
                  'In this assessment students are tasked with using the helper functions they created in their lib.js file throughout this module to build a command line application which builds quizzes and allows the user to take quizzes they have built or pull random questions from multiple quizzes and take a random quiz.'
                ]
              },
              {
                head: '',
                body: [
                  'Students will use inquirer.js and vorpal.js to build their command line tool. The documentation for each will be very useful for students when completing this assessment. A skeleton is provided which sets ups a command line interface for the students is provided.'
                ]
              },
              {
                head: 'Goals',
                body: [
                  'To assess the students knowledge of the JavaScript language',
                  'To assess the students ability to write and use Node as a JavaScript environment',
                  'To to assess students ability to adapt to new technologies and read documentation of libraries curated for the requirements of this assessment',
                  'To assess students abilities to combine external libraries with their own custom libraries in order to build an application.'
                ]
              },
              {
                head: 'Important Topics',
                body: ['Promises', 'Async', 'Node']
              }
            ]
          },
          {
            head: 'Service Creation',
            gitLink: 'https://github.com/emscook/AssessmentTwoSubmit',
            gitText: 'Click here for the repository of my solution',
            img: 'fas fa-database',
            body: [
              {
                head: '',
                body: [
                  'Create a service that will handle storing data on Users and their Addresses.'
                ]
              },
              {
                head: 'A Client entity must have the following properties:',
                body: [
                  'Name: The name of the client',
                  'Password: The password of the client',
                  'Birthday: Date of birth',
                  'Address: Reference to a single Address object',
                  'Relations: A list of other Client entities that this client is related to'
                ]
              },
              {
                head: 'The Address entity will have the following properties:',
                body: [
                  'Street: This will be the street address, such as ‘221b Baker Street”',
                  'City: The city in which this address exists',
                  'State: The state in which the City exists',
                  'Residents: The User entities associated with this Address',
                  'Relations: A list of other Client entities that this client is related to'
                ]
              },
              {
                head: 'When returning a User object, make sure that the DTO you return only contains the following fields:',
                body: ['Name', 'Birthday']
              },
              {
                head: 'When returning an Address object, make sure that the DTO you return only contains the following fields:',
                body: ['Street', 'City', 'State']
              },
              {
                head: 'Implement the following endpoints:',
                body: [
                  'GET /user: Returns all User DTOs',
                  'GET /user/{id}: Returns a single User DTO by their unique id',
                  'GET /user/{id}/address: Returns the Address DTO associated with a User',
                  'GET /user/{id}/relations: Returns a list of User DTO  this User is related to',
                  'GET /address?city=___&state=___: Returns a list of all addresses. f the optional ‘city’ parameter is provided, the list of addresses must all belong to that particular city. If the optional ‘state’ parameter is provided, the list of addresses must all belong to that particular state.',
                  'GET /address/{id}: Returns an address by it’s unique id',
                  'GET /address/{id}/residents: Returns a list of User DTOs associated with this address',
                  'POST /user: Accepts a User DTO that contains the following fields(Name, Password, Birthday)',
                  'POST /address: Accepts an Address DTO that contains the following fields(Street, City, State)',
                  'POST /user/{id}/relations/{relationId}: Adds a relation to another user. {relationId} must point to a valid User',
                  'POST /user/{id}/address/{addressId}: Sets the address of the referenced User',
                  'PUT /user/{id}: Replaces the User entity at the given id with updated information. Accepts a User DTO that contains the following fields(Name, Password, Birthday, Administrator)',
                  'PUT /address/{id}: Replaces the Address entity at the given id with updated information. Accepts an Address DTO that contains the following fields(Street, City, State)',
                  'DELETE /user/{id}: Deletes the User at the given id',
                  'DELETE /address/{id}: Deletes the Address at the given id'
                ]
              },
              {
                head: 'Important Topics',
                body: ['REST', 'Spring', 'IoC']
              }
            ]
          },
          {
            head: 'Personal Portfolio Site',
            gitLink: 'https://github.com/emscook/react-assessment-emscook',
            gitText: 'Click here for the repository of my solution',
            img: 'fas fa-folder-open',
            body: [
              {
                head: '',
                body: [
                  'This assessment serves as the capstone of the interpersonal and technical lecture modules by combining the “Tell Your Story” module and the React/Redux, front-end development, module. Students will be recieve requirements to design and develop a personal portfolio page on Monday of the second week of the module. This portfolio page will contain their biographies, stories (Maybe in a blog format), resumes, descriptions of the assignments and assessments they completed, any previous projects they built, and professional images of themselves. The students should develop their own user stories and design the portfolio site themselves. On assessment day, students will take a short exam over terms from the React/Redux module and then each student will present their portfolio pages along with their stories and experiences through FastTrack’D to the class and any internal Cook employees that wish to come and watch.'
                ]
              },
              {
                head: 'Goal',
                body: [
                  'Students will create their own portfolio page/site and prepare a presentation in which they will cover their experiences at FastTrack’D, their story which they have developed throughout the course, and their technical abilities by using their portfolio sites to effectively guide and support their presentation. This will serve as a great resource for representing each student individually and their experience throughout the lecture modules of FastTrack’D.'
                ]
              },
              {
                head: 'Tasks',
                body: [
                  'Create user stories for your personal portfolio site',
                  'Create a style guide and use it to make a design template',
                  'Include your Story, Biography, Resume, and past coding projects (including assignments and assessment descriptions) in your design.',
                  'Take your design and break it into React Components.',
                  'Implement your components using React and Redux.'
                ]
              },
              {
                head: 'Important Topics',
                body: ['React', 'Redux', 'JSX', 'Components']
              }
            ]
          },
          {
            head: 'AU Photo Upload',
            gitLink: 'https://github.com/zealousduck/AUPhotoUpload',
            gitText: 'Click here for the repository.',
            img: 'fab fa-dropbox',
            body: [
              {
                head: '',
                body: [
                  'Senior Design Project for Auburn University -- Upload pictures to a shared resource wirelessly soon after taking them.'
                ]
              },
              {
                head: 'My Responsibilities',
                body: [
                  'All interactions with dropbox',
                  'Queue based multiprocess communication'
                ]
              },
              {
                head: 'Important Topics',
                body: [
                  'Tkinter',
                  'Dropbox API',
                  'Multiprocessing',
                  'Exponential Backoff',
                  'Worker Threads: batch upload'
                ]
              }
            ]
          }
        ]
      }
    ],
    education: [
      {
        type: 'features',
        titleLink: require('./Docs/ems0025v4.docx'),
        title: 'My Resume',
        children: [
          {
            head: 'Auburn University',
            body: [
              {
                head: '',
                body: [
                  'My experiences in academia while acheiving my degree in Software Engineering instilled me with a passion for personal development and lifelong learning.'
                ]
              },
              {
                head: '',
                body: [
                  'The curriculum, while challenging compared to a typical Computer Science degree, introduced me to a wide rage of domains and industry practices.'
                ]
              },
              {
                head: 'Topics Studied',
                body: [
                  'General: Algorithms, Modeling and Design, Discrete Structures, Formal Languages, Operating Systems, Computer Architecture, Software Construction, Principals of Programming Languages',
                  'Specialized Topics: Software Quality Assurance, Software Processes, Computer Graphics, Computer Networks '
                ]
              }
            ],
            img: 'fa fa-graduation-cap'
          },
          {
            head: 'Internet Communities',
            body: [
              {
                head: '',
                body: [
                  'As an avid netizen, my participation in virtual communities has shaped who I am as a person.'
                ]
              },
              {
                head: '',
                body: [
                  'A deep connection to these groups from an early age has equipped me with considerable skill in navigating, maintaining and utilizing the net to achieve my goals.'
                ]
              },
              {
                head: 'Notable Communities',
                body: [
                  'Raspberry Pi: This community is one of the most welcoming maker communities out there. My time spent there gave me the confidence to dive into topics that challenge me, so I can come out stronger.',
                  'Code Fights: The competitive atmosphere provided by this site gave me an appreciation for healthy competition.'
                ]
              }
            ],
            img: 'fab fa-stack-overflow'
          },
          {
            head: 'Cook Systems',
            body: [
              {
                head: '',
                body: [
                  "The rigorus course of study provided to me in the FastTrack'D program has allowed me to map my programming skills into the essential tools that the software industry demands."
                ]
              },
              {
                head: '',
                body: [
                  'Specifically, this training has augmented my capabilities when it comes to web development and functional programming.'
                ]
              },
              {
                head: 'Course of Study',
                body: [
                  'Essential Topics: Object Oriented Programming, I/O, Reflection, XML, Concurrency, RDBMS, Transducers, REST, IoC',
                  'Java: Collections, Design Patterns, Generics, JAXB',
                  'Javascript: Node, FP libraries, Promies',
                  'React: Components, Routing, Networking, Redux, Webpack',
                  'Spring: Controllers, Services, Repositories, ORM'
                ]
              }
            ],
            img: 'fa fa-user-tie'
          }
        ]
      }
      // { type: 'intro', children: [] },
      // { type: 'sandbox', children: [] }
    ]
  }
  mySections = Object.keys(this.myBodies)
  state = {
    nav: {
      bar: {
        brand: {
          text: 'Evan Susag'
        },
        burger: {
          targetID: 'menuID'
        },
        menu: {
          id: 'menuID',
          sections: this.mySections.map(someStr => ({
            title: this.titley(someStr),
            ref: this.urly(someStr)
          }))
        }
      }
    },
    bodies: this.myBodies
  }
  render () {
    return (
      <div>
        <Nav value={this.state.nav} />
        <Body value={{ bodies: this.state.bodies, url: this.urly }} />
      </div>
    )
  }
}
export default Page
