import React from 'react';
import { withRouter } from 'react-router';
import  { ModalMobile } from '../component/Modal/Mobile.jsx';
import  { ModalWeb } from '../component/Modal/Web.jsx';
import { Avator } from '../component/Avator.js';

class StudentDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            evaluations: [],
            visible: false
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount() {
        if (this.props.match.params.userID) {
            window.addEventListener('resize', this.updateDimensions);
        } else {
            this.props.history.push('/');
        }
    }
    updateDimensions() {
        var width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        this.setState(state => {
            return {
                ...state,
                width
            }
        });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    showModal() {
        this.setState(state => {
            return {
                ...state,
                visible: true
            }
        })
    }

    render() {
        const { visible } = this.state;
        const spacing = this.state.width > 768 ? [80, 50, 80, 75] : [15, 16, 24, 16];
        return (
            <div>
                <Avator parent="StudentDetail" isWeb={this.state.width > 768} userID={props.match.params.userID} />
                <SubTitle cn="他的话题" en="Topic of conversation" top={spacing[0]} bottom={spacing[1]} />
                <div className="conversation-container">
                    <Conversation title="专业" desc={""} />
                    <Conversation title="话题" desc={""} />
                    <Conversation title="荣誉" desc={""} />
                </div>
                <SubTitle cn="他的评价" en="Evaluation" top={spacing[2]} bottom={spacing[3]} />
                <div className="evaluation-container">
                    {
                        this.state.evaluations.map((evaluation, index) => {
                            return (
                                <Evaluation key={evaluation.name} {...evaluation} isActive={index === 1}/>
                            );
                        })
                    }
                </div>
                {
                    this.state.width <= 768
                        && <button className="know-btn">认识他</button>
                }
                {
                    this.state.width > 768 ? <ModalWeb visible={visible} type={"PaySuccess"}/> : <ModalMobile visible={visible} type={"PaySuccess"}/>
                }
            </div>
        );
    }
}

const StudentDetailPage = withRouter(StudentDetail);
export default StudentDetailPage;