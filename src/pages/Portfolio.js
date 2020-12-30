import React, { Component } from 'react';
import Project from './../components/Project/';
import img1 from './../assets/project-caps/national-parks/national-parks-app.png';
import img2 from './../assets/project-caps/national-parks/national-parks-app-cards.png';

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