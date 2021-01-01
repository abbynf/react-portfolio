import React, { Component } from 'react';
import Method from './../components/Method';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            methods: [
                {
                    id: 0,
                    link: "mailto:abbynfrandsen@gmail.com",
                    icon: faEnvelopeSquare,
                    title: "Email",
                    handle: "abbynfrandsen@gmail.com"
                },
                {
                    id: 1,
                    link: "https://github.com/abbynf",
                    icon: faGithub,
                    title: "Github Profile",
                    handle: "github.com/abbynf"
                },
                {
                    id: 2,
                    link: "https://www.linkedin.com/in/abby-frandsen-815a44158/",
                    icon: faLinkedinIn,
                    title: "LinkedIn",
                    handle: "My Linkedin Profile"
                },
                {
                    id: 3,
                    link: "tel:8014252714",
                    icon: faPhone,
                    title: "Phone",
                    handle: "801.425.2714"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container text-white text-center">
                <header className="row">
                    <div className="col">
                        <h1 className="portHead" id="pushDown">Contact Me</h1>
                    </div>
                </header>
                <main className="row">

                    {this.state.methods.map((method) => {
                        return (
                            <Method 
                                key={method.id}
                                link={method.link}
                                icon={method.icon}
                                title={method.title}
                                handle={method.handle}
                            />
                        )
                    })}

                </main>

            </div>

        );
    }
}

export default Contact;