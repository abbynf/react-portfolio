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

class Portfolio extends Component {
    constructor(){
        super();
        this.state = {
            projects: [
                {
                    img1src: img1,
                    img1alt: "Landing page of National Parks app",
                    img2src: img2,
                    img2alt: "Search results for Utah",
                    title: "National Parks in the Pandemic",
                    paragraphs: ["The best way to get away from the bustle of daily life while maintaining social distance is visiting any of the nation's beautiful parks. Choose a state to view all of the parks and status of the coronavirus.",
                    "This is a front-end application that was created by me and two other developers. We utilized UIkit for adaptability to large and small screens.",
                    "My role in the team centered around utilizing plain JavaScript and jQuery to make AJAX requests to the National Parks API and other functions of the app. I also designed the landing page."
                    ],
                    techitems1: ["HTML", "CSS", 'jQuery', 'AJAX Requests', 'UIKit'],
                    techitems2: ["CSS Wand", "Meyer Web CSS reset", "Google Fonts", "Covid Tracking API", "National Park API"],
                    applicationLink: "https://abbynf.github.io/covid-travel/",
                    repoLink: "https://github.com/abbynf/covid-travel"
                },
                {
                    img1src: img3,
                    img1alt: "Application landing page",
                    img2src: img4,
                    img2alt: "Summary page displaying the total count",
                    title: "Invitr",
                    paragraphs: [
                        "Users can keep add and view wedding guests and view which guests still have yet to RSVP. Users can add guest's phone numbers, email addresses, and mailing addresses.",
                        "This is a full-stack application that was created from scratch by me and my team. The front-end was created with Skeleton CSS for a responsive layout that easily adapts to large and small screens.",
                        "My role centered on the team on the function and design of the front-end, but I also wrote the Sequelize queries and set up the database.",
                        "To test this app, use the example account with the following credentials. Dummy data was provided by JSON Placeholder",
                        "Email: example@email.com",
                        "Password: Example"
                        ],
                    techitems1: ["HTML", "CSS", "Skeleton CSS", "JavaScript", "jQuery", "node.js", "express.js", "Handlebars.js", "ESLint"],
                    techitems2: ["Travis CI", "Github", "Heroku", "JawsDB", "MySQL", "Sequelize", "Passport.js", "Nodemailer"],
                    applicationLink: "https://scary-cat-18885.herokuapp.com/",
                    repoLink: "https://github.com/jburz/Invitr"
                },
                {
                    img1src: img5,
                    img1alt: "Application landing page",
                    img2src: img6,
                    img2alt: "Graphs displaying the totals",
                    title: "Workout Tracker",
                    paragraphs: [
                        "This app enables the user to add and keep track of exercise routines. The routines are divided into two categories: resistance and cardio. The user adds the workout duration and other details about the workout. On the dashboard page of the application, the user can view the total statistics of the workouts throughout the usage of the app.",
                        "The Workout Tracker is a full-stack application. The front-end was provided as starter-code, which gave me the opportunity to refine my skills as a back-end developer",
                        "I was given code that my instructors had written, and I was given the task to read and understand the front-end without any human explanation. Then I created the back-end to answer the many different calls and requests the front-end made.",
                        "The front-end comprised of HTML, CSS, and JavaScript. I developed an Express server that served up those pages and stored the data in MongoDB through Mongoose. The deployed application is hosted on Heroku and the database is on MongoDB Atlas."
                    ],
                    techitems1: ["HTML", "CSS", "JavaScript", "jQuery", "Heroku", "Github"],
                    techitems2: ["Fetch API", "express.js", "MongoDB", "Mongoose", "MongoDB Atlas"],
                    applicationLink: "https://murmuring-dusk-28274.herokuapp.com/?id=5fcd0b8049470700176434ce",
                    repoLink: "https://github.com/abbynf/workout-tracker"
                },
                {
                    img1src: img7,
                    img1alt: "Application landing page",
                    img2src: img8,
                    img2alt: "Screenshot displaying an active service worker",
                    title: "Budget Tracker",
                    paragraphs: [
                        "This application enables the traveller to add and subtract funds with or without internet. The app caluclates the running total and graphs the influx of funds.",
                        "Like Workout Tracker, this is a fullstack application, but Trilogy created much of the front-end as starter-code. Doing so left me free to practice creating service workers.",
                        "This application utilizes service workers and local storage. Doing so enables the user to still use the app without internet. The application adds all of the data to the database on MongoDB once a connection is established, so no data is ever lost."
                    ],
                    techitems1: ["HTML", "CSS", "JavaScript", "jQuery", "Github", "Heroku", "Service Workers"],
                    techitems2: ["Local storage", "express.js", "MongoDB", "Mongoose", "MongoDB Atlas", "Web manifest", "caches"],
                    applicationLink: "https://ancient-ravine-55722.herokuapp.com/",
                    repoLink: "https://github.com/abbynf/budget-tracker"
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
                    <Project 
                        img1src={this.state.projects[0].img1src}
                        img1alt={this.state.projects[0].img1alt}
                        img2src={this.state.projects[0].img2src}
                        img2alt={this.state.projects[0].img2alt}
                        title={this.state.projects[0].title}
                        paragraphs={this.state.projects[0].paragraphs}
                        techitems1={this.state.projects[0].techitems1}
                        techitems2={this.state.projects[0].techitems2}
                        applicationLink={this.state.projects[0].applicationLink}
                        repoLink={this.state.projects[0].repoLink}
                    />

                </main>

            </div>
        );
    }
}

export default Portfolio;