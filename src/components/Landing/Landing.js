import React from 'react';
import './style.css';

function Landing() {
    return (
        <div className="container landing-top text-center">
            <header>
                <div class="row">
                    <div class="col">
                        <h1 class="text-white landing-head">Hello, I am <span class="name">Abby Jo Frandsen</span></h1>
                    </div>
                </div>
            </header>

            <section>
                <div class="row">
                    <div class="col mx-auto">
                        <h2 class="mt-sm-5 text-white subHead">A full stack developer in Salt Lake City, Utah</h2>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="row">
                    <div class="col mx-auto">
                        <h3 class="text-white text-center tagline">Beautiful applications with a human feel.</h3>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Landing;