import React, { Component } from 'react';
import Method from './../components/Method';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
    constructor(){
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
                    icon: faLinkedin,
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

    render(){
        return (
            <div>
                <h1>Contact Me</h1>
                {/* <Method icon={faEnvelopeSquare}/> */}
            </div>

        );
    }
}

export default Contact;