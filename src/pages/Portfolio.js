import React, { Component } from 'react';
import Project from './../components/Project/';
import img1 from './../assets/project-caps/national-parks/national-parks-app.png';
import img2 from './../assets/project-caps/national-parks/national-parks-app-cards.png';
import img3 from './../assets/project-caps/invitr/invitr-landing-page.png';
import img4 from './../assets/project-caps/invitr/invitr-summary.png';
import img5 from './../assets/project-caps/workout-tracker/workout-tracker-landing.png';
import img6 from './../assets/project-caps/workout-tracker/workout-tracker-graphs.png';
import img7 from './../assets/project-caps/budget-tracker/Budget-Tracker-landing.png';
import img8 from './../assets/project-caps/budget-tracker/Budget-Tracker-sw.png';
import img9 from './../assets/project-caps/employee-directory-generator/questions.png';
import img10 from './../assets/project-caps/employee-directory-generator/output.png';
import img11 from './../assets/project-caps/weather-tracker/landing-page.png';
import img12 from './../assets/project-caps/weather-tracker/tokyo.png';


class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    id: 101,
                    img1src: img1,
                    img1alt: "Landing page of National Parks app",
                    img2src: img2,
                    img2alt: "Search results for Utah",
                    title: "National Parks in the Pandemic",
                    paragraphs: [{
                        id: 200,
                        text: "The best way to get away from the bustle of daily life while maintaining social distance is visiting any of the nation's beautiful parks. Choose a state to view all of the parks and status of the coronavirus."
                    }, {
                        id: 201,
                        text: "This is a front-end application that was created by me and two other developers. We utilized UIkit for adaptability to large and small screens."
                    }, {
                        id: 202,
                        text: "My role in the team centered around utilizing plain JavaScript and jQuery to make AJAX requests to the National Parks API and other functions of the app. I also designed the landing page."
                    }],
                    techitems1: [{
                        id: 300,
                        text: "HTML"
                    }, {
                        id: 301,
                        text: "CSS"
                    }, {
                        id: 302,
                        text: 'jQuery'
                    }, {
                        id: 303,
                        text: 'AJAX Requests'
                    }, {
                        id: 304,
                        text: 'UIKit'
                    }],
                    techitems2: [{
                        id: 400,
                        text: "CSS Wand"
                    }, {
                        id: 401,
                        text: "Meyer Web CSS reset"
                    },
                    {
                        id: 402,
                        text: "Google Fonts"
                    }, {
                        id: 403,
                        text: "Covid Tracking API"
                    },
                    {
                        id: 404,
                        text: "National Park API"
                    }],
                    applicationLink: "https://abbynf.github.io/covid-travel/",
                    repoLink: "https://github.com/abbynf/covid-travel"
                },
                {
                    id: 1,
                    img1src: img3,
                    img1alt: "Application landing page",
                    img2src: img4,
                    img2alt: "Summary page displaying the total count",
                    title: "Invitr",
                    paragraphs: [
                        {
                            id: 203,
                            text: "Users can keep add and view wedding guests and view which guests still have yet to RSVP. Users can add guest's phone numbers, email addresses, and mailing addresses."
                        },
                        {
                            id: 204,
                            text: "This is a full-stack application that was created from scratch by me and my team. The front-end was created with Skeleton CSS for a responsive layout that easily adapts to large and small screens.",
                        },
                        {
                            id: 205,
                            text: "My role centered on the team on the function and design of the front-end, but I also wrote the Sequelize queries and set up the database.",
                        },
                        {
                            id: 206,
                            text: "To test this app, use the example account with the following credentials. Dummy data was provided by JSON Placeholder",
                        },
                        {
                            id: 207,
                            text: "Email: example@email.com",

                        },
                        {
                            id: 208,
                            text: "Password: Example"
                        }
                    ],
                    techitems1: [
                        {
                            id: 305,
                            text: "HTML"
                        },
                        {
                            id: 306,
                            text: "CSS",
                        },
                        {
                            id: 307,
                            text: "Skeleton CSS"
                        },
                        {
                            id: 308,
                            text: "JavaScript"
                        }, {
                            id: 309,
                            text: "jQuery"
                        },
                        {
                            id: 310,
                            text: "node.js"
                        },
                        {
                            id: 311,
                            text: "express.js"
                        }, {
                            id: 312,
                            text: "Handlebars.js"
                        },
                        {
                            id: 313,
                            text: "ESLint"
                        }],
                    techitems2: [
                        {
                            id: 405,
                            text: "Travis CI"
                        },
                        {
                            id: 406,
                            text: "Github"
                        },
                        {
                            id: 407,
                            text: "Heroku"
                        },
                        {
                            id: 408,
                            text: "JawsDB"
                        },
                        {
                            id: 409,
                            text: "MySQL"
                        },
                        {
                            id: 410,
                            text: "Sequelize"
                        },
                        {
                            id: 411,
                            text: "Passport.js"
                        },
                        {
                            id: 412,
                            text: "Nodemailer"
                        }],
                    applicationLink: "https://scary-cat-18885.herokuapp.com/",
                    repoLink: "https://github.com/jburz/Invitr"
                },
                {
                    id: 2,
                    img1src: img5,
                    img1alt: "Application landing page",
                    img2src: img6,
                    img2alt: "Graphs displaying the totals",
                    title: "Workout Tracker",
                    paragraphs: [
                        {
                            id: 209,
                            text: "This app enables the user to add and keep track of exercise routines. The routines are divided into two categories: resistance and cardio. The user adds the workout duration and other details about the workout. On the dashboard page of the application, the user can view the total statistics of the workouts throughout the usage of the app."
                        },
                        {
                            id: 210,
                            text: "The Workout Tracker is a full-stack application. The front-end was provided as starter-code, which gave me the opportunity to refine my skills as a back-end developer",
                        },
                        {
                            id: 211,
                            text: "I was given code that my instructors had written, and I was given the task to read and understand the front-end without any human explanation. Then I created the back-end to answer the many different calls and requests the front-end made.",
                        },
                        {
                            id: 212,
                            text: "The front-end comprised of HTML, CSS, and JavaScript. I developed an Express server that served up those pages and stored the data in MongoDB through Mongoose. The deployed application is hosted on Heroku and the database is on MongoDB Atlas."
                        }
                    ],
                    techitems1: [
                        {
                            id: 314,
                            text: "HTML"
                        },
                        {
                            id: 315,
                            text: "CSS"
                        },
                        {
                            id: 316,
                            text: "JavaScript"
                        },
                        {
                            id: 317,
                            text: "jQuery"
                        },
                        {
                            id: 318,
                            text: "Heroku"
                        },
                        {
                            id: 319,
                            text: "Github"
                        }],
                    techitems2: [{
                        id: 413,
                        text: "Fetch API"
                    },
                    {
                        id: 414,
                        text: "express.js"
                    },
                    {
                        id: 415,
                        text: "MongoDB"
                    },
                    {
                        id: 416,
                        text: "Mongoose"
                    },
                    {
                        id: 417,
                        text: "MongoDB Atlas"
                    }],
                    applicationLink: "https://murmuring-dusk-28274.herokuapp.com/?id=5fcd0b8049470700176434ce",
                    repoLink: "https://github.com/abbynf/workout-tracker"
                },
                {
                    id: 3,
                    img1src: img7,
                    img1alt: "Application landing page",
                    img2src: img8,
                    img2alt: "Screenshot displaying an active service worker",
                    title: "Budget Tracker",
                    paragraphs: [
                        {
                            id: 213,
                            text: "This application enables the traveller to add and subtract funds with or without internet. The app caluclates the running total and graphs the influx of funds.",
                        },
                        {
                            id: 214,
                            text: "Like Workout Tracker, this is a fullstack application, but Trilogy created much of the front-end as starter-code. Doing so left me free to practice creating service workers.",
                        },
                        {
                            id: 215,
                            text: "This application utilizes service workers and local storage. Doing so enables the user to still use the app without internet. The application adds all of the data to the database on MongoDB once a connection is established, so no data is ever lost."
                        }
                    ],
                    techitems1: [
                        {
                            id: 320,
                            text: "HTML"
                        },
                        {
                            id: 321,
                            text: "CSS"
                        },
                        {
                            id: 322,
                            text: "JavaScript"
                        },
                        {
                            id: 323,
                            text: "jQuery"
                        },
                        {
                            id: 324,
                            text: "Github"
                        },
                        {
                            id: 325,
                            text: "Heroku"
                        },
                        {
                            id: 326,
                            text: "Service Workers"
                        }],
                    techitems2: [{
                        id: 418,
                        text: "Local storage"
                    },
                    {
                        id: 419,
                        text: "express.js"
                    },
                    {
                        id: 420,
                        text: "MongoDB"
                    },
                    {
                        id: 421,
                        text: "Mongoose"
                    },
                    {
                        id: 422,
                        text: "MongoDB Atlas"
                    },
                    {
                        id: 423,
                        text: "Web manifest"
                    },
                    {
                        id: 424,
                        text: "caches"
                    }],
                    applicationLink: "https://ancient-ravine-55722.herokuapp.com/",
                    repoLink: "https://github.com/abbynf/budget-tracker"
                },
                {
                    id: 4,
                    img1src: img9,
                    img1alt: "Screenshot of the questions asked by the generator",
                    img2src: img10,
                    img2alt: "Screenshot of the web page generated",
                    title: "Employee Directory Generator",
                    paragraphs: [
                        {
                            id: 216,
                            text: "This application asks the user a series of questions about employees. The questions asked depend on what kind of employee is being described. There are three employee types: managers, engineers, and interns. After all of the employees have been described, the application creates an html page with all of the information displayed."
                        },
                        {
                            id: 217,
                            text: "This application was a full-stack application. The questions are asked in the command line and the html file is generated within the application."
                        },
                        {
                            id: 218,
                            text: "To use this application, the code must be forked from the github repository and ran in a node environment."
                        }
                    ],
                    techitems1: [
                        {
                            id: 327,
                            text: "HTML"
                        },
                        {
                            id: 328,
                            text: "CSS"
                        },
                        {
                            id: 329,
                            text: "Bootstrap"
                        }
                    ],
                    techitems2: [
                        {
                            id: 425,
                            text: "JavaScript"

                        },
                        {
                            id: 426,
                            text: "node.js"
                        },
                        {
                            id: 427,
                            text: "Inquirer"
                        }
                    ],
                    applicationLink: "#",
                    repoLink: "https://github.com/abbynf/employee-roster-generator"
                },
                {
                    id: 5,
                    img1src: img11,
                    img1alt: "Search results for Chicago",
                    img2src: img12,
                    img2alt: "Search results for Tokyo",
                    title: "Weather Dashboard",
                    paragraphs: [
                        {
                            id: 219,
                            text: "This application allows the user to see the weather predictions for the next week for any city. After searching for the city, the city is saved on the left-hand side for easy re-navigation back to the results."
                        },
                        {
                            id: 220,
                            text: "This application is front-end only."
                        }
                    ],
                    techitems1: [
                        {
                            id: 330,
                            text: "HTML"
                        },
                        {
                            id: 331,
                            text: "CSS"
                        },
                        {
                            id: 332,
                            text: "JavaScript"
                        },
                        {
                            id: 333,
                            text: "Open Weather API"
                        }
                    ],
                    techitems2: [
                        {
                            id: 428,
                            text: "Bootstrap"
                        },
                        {
                            id: 429,
                            text: "jQuery"
                        },
                        {
                            id: 430,
                            text: "moment.js"
                        }
                    ],
                    applicationLink: "https://abbynf.github.io/weather-dashboard/",
                    repoLink: "https://github.com/abbynf/weather-dashboard"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <header>
                    <div className="row">
                        <div className="col">
                            <h1 className="portHead text-white text-center" id="pushDown">My Projects</h1>
                        </div>
                    </div>
                </header>

                <main>
                    {this.state.projects.map((project) => {
                        return (
                            <Project
                                key={project.id}
                                img1src={project.img1src}
                                img1alt={project.img1alt}
                                img2src={project.img2src}
                                img2alt={project.img2alt}
                                title={project.title}
                                paragraphs={project.paragraphs}
                                techitems1={project.techitems1}
                                techitems2={project.techitems2}
                                applicationLink={project.applicationLink}
                                repoLink={project.repoLink}
                            />
                        )
                    })}

                </main>

            </div>
        );
    }
}

export default Portfolio;