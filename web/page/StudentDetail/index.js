import React from 'react';
import { Web } from './Web.js';
import { Mobile } from './Mobile.js';
import  { ModalMobile } from '../../component/Modal/Mobile.jsx';
import  { ModalWeb } from '../../component/Modal/Web.jsx';
import { getUser } from '../../utils/http.js';
import { withRouter } from 'react-router';
import { withAlert } from 'react-alert';

export class StudentDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            avator: {}
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount() {
        let userID = this.props.match.params.userID || '';
        if (userID) {
            getUser(userID)
                .then(response => {
                    let data = response.data;
                    if (data.status === 'success') {
                        this.setState((state) => {
                            return {
                                ...state,
                                avator: data.data
                            }
                        });
                    } else {
                        this.props.alert.error(`获取${userID}的个人信息失败,原因为${data.errorMsg || `${response.status}${response.statusText}`}`);
                    }
                }).catch(error => {
                    console.error('获取个人信息', error);
                });
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
    render() {
        return (
            <div>
                {
                    this.state.width > 768 ? <Web {...this.state.avator} /> : <Mobile {...this.state.avator} />
                }
                {
                    this.state.width > 768 ? <ModalWeb type={"Advisory"}/> : <ModalMobile type={"Advisory"}/>
                }
            </div>
        );
    }
}
