import React, { Component } from 'react';
import Cardtext from '../Cardtext';
import TechItem from './../TechItem';
import './style.css';

class Project extends Component {

    render() {

        console.log(this.props)

        return (
            <div class="row">
                <div class="col-12">
                    <div class="card card-shadow p-3">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <img class="card-img-top rounded" src={this.props.img1src}
                                    alt={this.props.img1alt} />
                            </div>
                            <hr class="portHr d-block d-lg-none" />
                            <div class="col-12 col-lg-6">
                                <img class="card-img-top rounded" src={this.props.img2src}
                                    alt={this.props.img2alt} />
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">{this.props.title}</h5>
                            <div class="row card-opaque mb-3">
                                <div class="col-md-6">
                                    {this.props.paragraphs.map((paragraph) => {
                                        return (
                                            <Cardtext paragraphtext={paragraph} />
                                        )
                                    })}
                                </div>

                                <div class="col-md-6 mt-0 pl-md-5">
                                    <h6 class="card-text font-weight-bold mt-4 mb-1 mt-md-0">Technologies used:</h6>

                                    <div class="row">

                                        <div class="col">
                                            <ul class="card-text">
                                                {this.props.techitems1.map((listItem) => {
                                                    return (
                                                        <TechItem text={listItem} />
                                                    )
                                                })}
                                            </ul>

                                        </div>
                                        <div class="col">
                                            <ul class="card-text">
                                                {this.props.techitems2.map((listItem) => {
                                                    return (
                                                        <TechItem text={listItem} />
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <a href={this.props.applicationLink} class="btn portfolioButton" target="_blank">Access application</a>
                            <a href={this.props.repoLink} class="btn portfolioButton" target="_blank">Visit repository</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Project;