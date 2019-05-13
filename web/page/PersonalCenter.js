import React from 'react';
import { Avator as AvatorWeb } from '../component/Avator/Web.js';
import { Avator as AvatorMobile } from '../component/Avator/Mobile.js';
import { withRouter } from 'react-router';
import { withAlert } from 'react-alert';
import { Item } from '../component/Item.js';
import { getUser } from '../utils/http.js';

const test_tabTitles = ['粉丝列表','我的关注','我的订单','我的课程','我的帖子','我的收藏'];
const contents = [0,1,2,3,4];

class PersonalCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            avator: {}
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
        this.setState((state) => {
            return {
                ...state,
                width
            };
        });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    render() {
        return (
            <div>
                { this.state.width > 768 ? <AvatorWeb {...this.state.avator} /> : <AvatorMobile {...this.state.avator} /> }
                <div className="personal-center_tab-title-container">
                    {
                        test_tabTitles.map((title, index) => {
                            return (
                                <span key={title} className={index === 0 ? 'tab-title__selected' : 'tab-title'}>{title}</span>
                            );
                        })
                    }
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

const PersonalCenterPage = withRouter(withAlert(PersonalCenter));
export default PersonalCenterPage;