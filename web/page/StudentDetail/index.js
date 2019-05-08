import React from 'react';
import { Web } from './Web.js';
import { Mobile } from './Mobile.js';
import  { ModalMobile } from '../../component/Modal/Mobile.jsx';
import  { ModalWeb } from '../../component/Modal/Web.jsx';

export class StudentDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    updateDimensions() {
        var width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        this.setState({ width });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    render() {
        return (
            <div>
                {
                    this.state.width > 768 ? <Web /> : <Mobile />
                }
                {
                    this.state.width > 768 ? <ModalWeb /> : <ModalMobile />
                }
            </div>
        );
    }
}
