import React, { Component } from 'react';
import Project from './../components/Project/';

class Portfolio extends Component {

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
                    <Project/>


                </main>

            </div>
        );
    }
}

export default Portfolio;