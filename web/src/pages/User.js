import React from 'react';
import { withRouter } from 'react-router';
import { withAlert } from 'react-alert';
import { Header } from '../components/common/Header.js';
import { Footer } from '../components/common/Footer.js';
import { getUserInfo, postJson, uploadImage } from '../utils/server.js';


const nickNameBtn = {
    marginLeft: "20px"
};

let loginUserID;

function isFan(fans, fanID) {
    if (!fanID) { return false; }
    return fans.some((fan) => {
        return fan.id === fanID;
    });
}

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickName: '',
            headImage: '',
            type: '',
            cellPhone: '',
            email: '',
            status: '',
            fans: [],
            releaseCourses: [],
            ownArticles: [],
            collectedArticles: [],
            isEdit: false,
            isStartUpload: false,
            isFan: false,
            tempNickName: '',
            tempImage: null
        };
        this.changeNickName = this.changeNickName.bind(this);
        this.changeUserState = this.changeUserState.bind(this);
        this.saveUserName = this.saveUserName.bind(this);
        this.startUploadImage = this.startUploadImage.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.uploadImg = this.uploadImg.bind(this);
        this.addFan = this.addFan.bind(this);
        this.deleteFan = this.deleteFan.bind(this);
    }

    startUploadImage() {
        this.setState((state) => {
           return {
               ...state,
               isStartUpload: true
           }
        });
    }

    changeNickName(event) {
        let value = event.target.value;
        this.setState((state) => {
            return {
                ...state,
                tempNickName: value
            }
        });
    }

    handleImageChange(event) {
        let tempImage = event.target.files[0];
        this.setState((state) => {
            return {
                ...state,
                tempImage
            }
        });
    }

    uploadImg() {
        uploadImage(this.state.tempImage)
            .then((data) => {
                if (data.status === 'success') {
                    postJson('/updateUserHeadImage', {
                        id: this.props.match.params.userID,
                        headImage: data.data
                    }).then((data1) => {
                        if (data1.status === 'success') {
                            this.setState((state) => {
                                return {
                                    ...state,
                                    headImage: data.data,
                                    isStartUpload: false
                                }
                            })
                        } else {
                            this.props.alert.error(data1.errorMsg || data1.error);
                        }
                    }).catch((error) => {
                        this.props.alert.error('更新用户头像失败。');
                    });
                } else {
                    this.props.alert.error(data.errorMsg || data.error);
                }
            }).catch((error) => {
                this.props.alert.error('上传图片失败。');
            });
    }

    saveUserName() {
        postJson('/updateUserNickname', {
            id: this.props.match.params.userID,
            nickName: this.state.tempNickName
        }).then((data) => {
            if (data.status === 'success') {
                this.setState((state) => {
                    return {
                        ...state,
                        isEdit: false
                    }
                });
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.props.alert.error('更新用户名失败。');
        });
    }

    changeUserState() {
        this.setState((state) => {
            return {
                ...state,
                isEdit: !state.isEdit
            }
        });
    }

    addFan() {
        if (!loginUserID) {
            this.props.alert.error('请登录再关注。');
            sessionStorage.removeItem('jsUser');
            return;
        }
        postJson('/addFan', {
            ownerId: this.props.match.params.userID,
            fanId: loginUserID
        }).then((data) => {
            if (data.status === 'success') {
                this.setState((state) => {
                    return {
                        ...state,
                        isFan: true
                    }
                });
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.props.alert.error('关注失败');
        });
    }

    deleteFan() {
        if (!loginUserID) {
            this.props.alert.error('请登录再取消关注。');
            sessionStorage.removeItem('jsUser');
            return;
        }
        postJson('/deleteFan', {
            ownerId: this.props.match.params.userID,
            fanId: loginUserID
        }).then((data) => {
            if (data.status === 'success') {
                this.setState((state) => {
                    return {
                        ...state,
                        isFan: false
                    }
                });
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.props.alert.error('取消关注失败');
        });
    }

    componentDidMount() {
        let userID = this.props.match.params.userID;
        try {
            loginUserID = (JSON.parse(sessionStorage.getItem('jsUser'))).id;
        } catch (e) {
            loginUserID = '';
        }
        getUserInfo(userID)
            .then((data) => {
                if (data.status === 'success') {
                    let d = data.data;
                    this.setState((state) => {
                        return {
                            ...state,
                            nickName: d.nickName,
                            tempNickName: d.nickName,
                            headImage: d.headImage,
                            type: d.type,
                            cellPhone: d.cellPhone,
                            email: d.email,
                            status: d.status
                        }
                    });
                }
            });
        postJson('/getFans', {
            ownerId: userID
        }).then((data) => {
            if (data.status === 'success') {
                let fans = data.data || [];
                this.setState((state) => {
                   return {
                       ...state,
                       fans,
                       isFan: isFan(fans, loginUserID)
                   }
                });
            }
        });
        postJson('/getCreatedCourses', {
            id: userID
        }).then((data) => {
            if (data.status === 'success') {
                this.setState((state) => {
                    return {
                        ...state,
                        releaseCourses: data.data || []
                    }
                })
            }
        });
        postJson(`/userAllArticles?uid=${userID}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            ownArticles: data.data && data.data.list ? data.data.list : []
                        }
                    });
                }
            });
        postJson(`/userAllCollectArticles?uid=${userID}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            collectedArticles: data.data && data.data.list ? data.data.list : []
                        }
                    });
                }
            });
    }

    render() {
        return (
        <div>
            <Header activeTitle="me" />
            <section className="page-name background-bg" data-image-src="../images/breadcrumb.jpg">
                <div className="overlay">
                    <div className="section-padding">
                        <div className="container">
                            <h2 className="section-title">{this.state.nickName}</h2>
                            <span className="designation">{this.state.type}</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="instructor-details">
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 pr-5">
                                <div className="avatar text-center">
                                    {
                                        this.state.isStartUpload ?
                                            <div className="text-center">
                                                <input id="img" name="img" type="file"
                                                       accept="image/jpeg,image/x-png,image/gif"
                                                       onChange={ this.handleImageChange } />
                                                <input type="button" style={{marginTop: '5px'}} className="btn btn-default btn-xs" value="Save" onClick={ this.uploadImg } />
                                            </div>
                                            :
                                            <img src={this.state.headImage ? 'http://' + this.state.headImage: ''} alt="Upload Image" onClick={this.startUploadImage} />
                                    }
                                </div>
                                <div className="social text-center">
                                    {
                                        this.state.isFan ?
                                            <a style={{color: 'red'}} onClick={this.deleteFan}><i className="fa fa-heartbeat"></i></a> :
                                            <a onClick={this.addFan}><i className="far fa-heart"></i></a>
                                    }
                                </div>
                            </div>
                            <div className="col-md-8 pl-4">
                                <div className="meta">
                                    <ul>
                                        <li><span className="meta-id">Fans</span> {this.state.fans.length}</li>
                                        <li><span className="meta-id">Courses</span> {this.state.releaseCourses.length}</li>
                                    </ul>
                                </div>
                                <p>
                                    <strong>UserName: </strong>
                                    {
                                        this.state.isEdit ?
                                            <span>
                                                <input className="form-control" style={{display: 'inline-block', width: 'auto'}} onChange={this.changeNickName} value={this.state.tempNickName} />
                                                <input type="button" className="btn btn-default btn-xs" style={nickNameBtn} onClick={this.saveUserName} value="Save" />
                                                <input type="button" className="btn btn-default btn-xs" style={{marginLeft: "10px"}} onClick={this.changeUserState} value="Cancel" />
                                            </span> :
                                            <span>
                                                {this.state.nickName}
                                                <input type="button" className="btn btn-default btn-xs" style={nickNameBtn} onClick={this.changeUserState} value="Edit" />
                                            </span>
                                    }
                                </p>
                                <p>
                                    <strong>Phone:</strong> {this.state.cellPhone}
                                </p>
                                <p>
                                    <strong>Email:</strong> {this.state.email}
                                </p>
                                <p>
                                    <strong>Status:</strong> {this.state.status}
                                </p>
                                <div className="course-single-details">
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-1" data-toggle="tab" href="#fan" role="tab" aria-controls="fan" aria-selected="true">粉丝列表</a>
                                        <a className="nav-item nav-link" id="nav-2" data-toggle="tab" href="#follow" role="tab" aria-controls="follow" aria-selected="false">关注列表</a>
                                        <a className="nav-item nav-link" id="nav-3" data-toggle="tab" href="#releaseCourse" role="tab" aria-controls="releaseCourse" aria-selected="false">发布课程列表</a>
                                        <a className="nav-item nav-link" id="nav-4" data-toggle="tab" href="#post" role="tab" aria-controls="post" aria-selected="false">发布帖子列表</a>
                                        <a className="nav-item nav-link" id="nav-5" data-toggle="tab" href="#collection" role="tab" aria-controls="collection" aria-selected="false">收藏列表</a>
                                    </div>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="fan" role="tabpanel" aria-labelledby="fan">
                                            {
                                                this.state.fans.map((fan) => {
                                                    return <p key={fan.id}>{fan.nickName}</p>
                                                })
                                            }
                                        </div>
                                        <div className="tab-pane fade" id="follow" role="tabpanel" aria-labelledby="follow">
                                        </div>
                                        <div className="tab-pane fade" id="releaseCourse" role="tabpanel" aria-labelledby="releaseCourse">
                                            {
                                                this.state.releaseCourses.map((course) => {
                                                    return (
                                                        <div style={{width: '100%', borderBottom: '1px solid #cfd8dc', padding: '10px 0 15px'}} key={course.id}>
                                                            <h3 style={{color: '#37474f'}}>{course.title}</h3>
                                                            <p>{ course.detail }</p>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                        <div className="tab-pane fade" id="post" role="tabpanel" aria-labelledby="post">
                                            {
                                                this.state.ownArticles.map((article) => {

                                                })
                                            }
                                        </div>
                                        <div className="tab-pane fade" id="collection" role="tabpanel" aria-labelledby="collection">
                                            {
                                                this.state.collectedArticles.map((article) => {

                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        );
    }
}

const UserWithRouter = withRouter(withAlert(User));
export default UserWithRouter;




