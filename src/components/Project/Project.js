import React, { Component } from 'react';
import Cardtext from '../Cardtext';
import TechItem from './../TechItem';
import './style.css';

class Project extends Component {

    render() {

        return (
            <div className="row">
                <div className="col-12">
                    <div className="card card-shadow p-3">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <img className="card-img-top rounded" src={this.props.img1src}
                                    alt={this.props.img1alt} />
                            </div>
                            <hr className="portHr d-block d-lg-none" />
                            <div className="col-12 col-lg-6">
                                <img className="card-img-top rounded" src={this.props.img2src}
                                    alt={this.props.img2alt} />
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{this.props.title}</h5>
                            <div className="row card-opaque mb-3">
                                <div className="col-md-6">
                                    {this.props.paragraphs.map((paragraph) => {
                                        return (
                                            <Cardtext key={paragraph.id} content={paragraph.text} />
                                        )
                                    })}
                                </div>

                                <div className="col-md-6 mt-0 pl-md-5">
                                    <h6 className="card-text font-weight-bold mt-4 mb-1 mt-md-0">Technologies used:</h6>

                                    <div className="row">

                                        <div className="col">
                                            <ul className="card-text">
                                                {this.props.techitems1.map((listItem) => {
                                                    return (
                                                        <TechItem
                                                            key={listItem.id}
                                                            text={listItem.text} />
                                                    )
                                                })}
                                            </ul>

                                        </div>
                                        <div className="col">
                                            <ul className="card-text">
                                                {this.props.techitems2.map((listItem) => {
                                                    return (
                                                        <TechItem
                                                            key={listItem.id}
                                                            text={listItem.text} />
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <a href={this.props.applicationLink} className="btn portfolioButton m-1" target="_blank">Access application</a>
                            <a href={this.props.repoLink} className="btn portfolioButton m-1" target="_blank">Visit repository</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Project;