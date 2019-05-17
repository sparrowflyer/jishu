import React from 'react';
import { withRouter } from 'react-router';
import { withAlert } from 'react-alert';
import { Avator } from '../component/Avator.js';
import { Item } from '../component/Item.js';
import { postUrl } from '../utils/http.js';

const contents = [0,1,2,3,4];

class PersonalCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            userID: '',
            following: [],
            fans: []
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount() {
        let userID = '';
        try {
            userID = JSON.parse(sessionStorage.getItem('jeeUser')).id
        } catch (e) {
            sessionStorage.removeItem('jeeUser');
        }
        if (userID) {
            this.setState((state) => {
               return { ...state, userID }
            });
            window.addEventListener('resize', this.updateDimensions);
        } else {
            this.props.history.push('/');
        }
    }
    updateDimensions() {
        var width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        this.setState((state) => {
            return { ...state, width };
        });
    }
    getFans(likeStudentId, pageNo, pageAmount) {
        this.setState((state) => {
           return {
               ...state,
               fans: []
           }
        });
        postUrl('/likeStudentUserList', {
            likeStudentId,
            pageNo,
            pageAmount
        }).then((response) => {
            if (response.status === 200) {
                this.setState((state) => {
                    return {
                        ...state,
                        fans: response
                    }
                });
            }
        }).catch((error) => {
            console.error('获取粉丝列表：', error);
        });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    render() {
        return (
            <div>
                <Avator parent="PersonalCenter" isWeb={this.state.width > 768} userID={this.state.userID} />
                <div className="personal-center_tab-title-container">
                    <span className='tab-title__selected' onClick=''>粉丝列表</span>
                    <span className='tab-title' onClick=''>我的关注</span>
                    <span className='tab-title' onClick=''>我的订单</span>
                </div>
                <div className="personal-center-content">
                    {
                        contents.map((content, index) => {
                            return (
                                <Item key={index} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

const PersonalCenterPage = withAlert()(withRouter(PersonalCenter));
export default PersonalCenterPage;