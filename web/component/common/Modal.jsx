import React, { Component } from 'react';
import './../../assets/component.css';
export class Modal extends React.Component {
    render() {
        return <div className="modal-wrapper">
            <div className="modal">
                <div className="close-topRight">
                    <img src={require("../../assets/images/guanbi1.png")} alt=""/>
                </div>
                <div className="modal-content">这是modal内容</div>
            </div>
            <div className="close-bottom">
                <img src={require("../../assets/images/guanbi1@2x.png")} alt=""/>
            </div>
            <div className="mask"></div>
        </div>
    }
}