import React from 'react';
import './style.css';
import headshot from './../../assets/headshot/brick-headshot.png';

function About() {
    return (
        <div>
            <hr className="hrAbout mt-5" />
            <div className="container aboutContainer mt-5">
                <article className="px-5">

                    <div className="row">


                        <div className="col-lg-4">
                            <h2 className="aboutHead text-white text-center">About Me</h2>

                        </div>


                        <div className="col-lg-8 opaque">
                            <p className="bio">
                                Full Stack Web Developer with a Bachelor's degree in psychology working towards a Full
                                Stack Web Development certificate. Participation in the bootcamp has enabled me to
                                develop a working knowledge of front-end and back-end technologies like HTML, CSS,
                                jQuery, JavaScript, and more. My Bachelor's degree helped me refine my organizational
                                and problem-solving skills as a lab manager for the behavioral psychology lab. I've
                                taken classes in mediation and social psychology to better communicate with my
                                teammates. I enjoy the problem-solving aspect of coding and can barely feel the hours
                                pass as I work with JavaScript.

                                I look forward to a career in full-stack development, creating applications designed
                                with psychological principles in mind.

                            </p>
                            <a href="assets/Resume.pdf" target="_blank">Click here to view my resume.</a>
                        </div>

                    </div>

                </article>
                <aside className="px-5 mb-5">
                    <div className="row mt-5">


                        <div className="col-sm-6">
                            <div className="listContainer opaque pt-4">
                                <h3 className="font-weight-bold">Technical skills</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootstrap</li>
                                    <li>Statistics</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>SQL</li>
                                    <li>node.js</li>
                                    <li>Inquirer</li>
                                    <li>Express.js</li>
                                    <li>Postman</li>
                                    <li>MySQL</li>
                                    <li>Sequelize</li>
                                    <li>Handlebars.js</li>
                                    <li>Model-View-Controller design pattern</li>
                                    <li>MongoDB</li>
                                    <li>Mongoose.js</li>
                                    <li>Travis CI</li>
                                    <li>Github and Git Bash</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col m-auto text-center pt-5">
                                    <img className="headshot" src={headshot} alt="My headshot" />
                                </div>

                            </div>
                            <div className="row">

                                <div className="col">
                                    <div className="listContainer opaque">
                                        <h3 className="font-weight-bold">Soft skills</h3>
                                        <ul>
                                            <li>Teamwork</li>
                                            <li>Attention to detail</li>
                                            <li>Communication</li>
                                            <li>Problem-Solving</li>
                                            <li>Adaptability</li>
                                            <li>Leadership</li>
                                            <li>Grant-Writing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </aside>

            </div>
        </div>
    )
};

export default About;