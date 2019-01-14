import React from 'react';
import { withAlert } from 'react-alert';
import { withRouter } from 'react-router';
import DatePicker from 'react-datepicker';
import '../../assets/css/react-datepicker.min.css';
import { Header } from '../../components/common/Header.js';
import { Footer } from '../../components/common/Footer.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { formatDateTime } from '../../utils/time.js';
import { postJson, uploadImage } from '../../utils/server.js';

class AddCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            detail: '',
            image: null,
            price: '',
            type: '',
            courseCollectionStartTime: null,
            courseCollectionEndTime: null,
            courseStartTime: null,
            courseDurationTime: '',
            targetStudentAmount: '',
            isLoading: false,
            courseTypes: [],
            priceMsg: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitCourseInfo = this.submitCourseInfo.bind(this);
        this.handleCollectionStartTimeChange = this.handleCollectionStartTimeChange.bind(this);
        this.handleCollectionEndTimeChange = this.handleCollectionEndTimeChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handlePriceBlur = this.handlePriceBlur.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.addCourse = this.addCourse.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState((state) => {
            return {
                ...state,
                [name]: [value]
            };
        });
    }

    handleCollectionStartTimeChange(datetime) {
        this.setState((state) => {
            return {
                ...state,
                courseCollectionStartTime: datetime
            }
        });
    }

    handleCollectionEndTimeChange(datetime) {
        this.setState((state) => {
            return {
                ...state,
                courseCollectionEndTime: datetime
            }
        });
    }

    handleStartTimeChange(datetime) {
        this.setState((state) => {
            return {
                ...state,
                courseStartTime: datetime
            }
        });
    }

    handlePriceBlur(event) {
        this.setState((state) => {
            return {
                ...state,
                priceMsg: ''
            };
        });
        const value = event.target.value;
        if (!value) { return ; }
        if (!/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(value)) {
            this.setState((state) => {
                return {
                    ...state,
                    priceMsg: '金额格式不正确。'
                };
            });
        }
    }

    handleImageChange(event) {
        let image = event.target.files[0];
        this.setState((state) => {
            return {
                ...state,
                image
            }
        });
    }

    addCourse(image = '') {
        let price = this.state.price[0] || 0;
        this.setState((state) => {
            return {
                ...state,
                isLoading: true
            }
        });
        postJson('/addCourse', {
            'title': this.state.title[0],
            'detail': this.state.detail[0],
            'coverImage': image,
            'price': price,
            'type': this.state.type ? this.state.type[0] : '',
            'courseCollectionStartTime': formatDateTime(this.state.courseCollectionStartTime),
            'courseCollectionEndTime': formatDateTime(this.state.courseCollectionEndTime),
            'courseStartTime': formatDateTime(this.state.courseStartTime),
            'courseDurationTime': this.state.courseDurationTime[0],
            'targetStudentAmount': this.state.targetStudentAmount[0]
        }).then((data) => {
            this.setState((state) => {
                return {
                    ...state,
                    isLoading: false
                }
            });
            if (data.status === 'success') {
                this.props.history.push('/course');
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.setState((state) => {
                return {
                    ...state,
                    isLoading: false
                }
            });
            this.props.alert.error('添加课程失败。');
        });
    }

    submitCourseInfo(event) {
        event.preventDefault();
        if (!this.state.courseCollectionStartTime) {
            this.props.alert.error('Course Collection Start Time is required');
            return;
        }
        if (!this.state.courseCollectionEndTime) {
            this.props.alert.error('Course Collection End Time is required');
            return;
        }
        if (this.state.courseCollectionEndTime - this.state.courseCollectionStartTime < 0) {
            this.props.alert.error('Collection Time is wrong');
            return;
        }
        if (!this.state.courseStartTime) {
            this.props.alert.error('Course Start Time is required');
            return;
        }
        if (this.state.image) {
            uploadImage(this.state.image)
                .then((data) => {
                    if (data.status === 'success') {
                        this.addCourse(data.data);
                    } else {
                        this.props.alert.error(data.errorMsg || data.error);
                    }
                }).catch((error) => {
                    this.props.alert.error('上传图片失败。');
                });
        } else {
            this.addCourse();
        }
    }

    componentDidMount() {
        postJson('/getCourseTypes')
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            courseTypes: data.data
                        };
                    });
                }
            });
    }

    render() {
        return (
            <div>
                <Header activeTitle="course" />
                <BreadCrumb title="Add Course" subItem="课程信息" currentItem="Add Course" />
                <section className="login-register">
                    <div className="section-padding">
                        <div className="container">
                            <div className="contents text-center">
                                <h2 className="section-title">Add Course</h2>
                                <form className="sign-in-form" id="sign-in-form" onSubmit={ this.submitCourseInfo }>
                                    <p className="form-input">
                                        <input type="text" name="title" id="course_title" placeholder="Course Title" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.title } required />
                                    </p>
                                    <p className="form-input">
                                        <input type="text" name="price" id="course_price" placeholder="Course Price" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.price } onBlur={ this.handlePriceBlur } />
                                    </p>
                                    {
                                        this.state.priceMsg ? <div className="alert alert-danger" role="alert">{this.state.priceMsg}</div> : null
                                    }
                                    <p className="form-input" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                                        <span style={{fontWeight: '600'}}>Course Type:</span>
                                        <select style={{float: 'right'}} className="filter-select" name="type" value={ this.state.type } onChange={ this.handleInputChange }>
                                            <option value="">All</option>
                                            {
                                                this.state.courseTypes.map((courseType) => {
                                                    console.log(courseType);
                                                    return (
                                                        <option key={courseType.id} value={courseType.id}>{courseType.value}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                    </p>
                                    <div className="form-input" style={{marginBottom: '20px'}}>
                                        <DatePicker placeholderText="Course Collection Start Time" showTimeSelect dateFormat="yyyy-MM-dd HH:mm:ss"
                                                    selected={this.state.courseCollectionStartTime} onChange={this.handleCollectionStartTimeChange} />
                                    </div>
                                    <div className="form-input" style={{marginBottom: '20px'}}>
                                        <DatePicker placeholderText="Course Collection End Time" showTimeSelect dateFormat="yyyy-MM-dd HH:mm:ss"
                                                    selected={this.state.courseCollectionEndTime} onChange={this.handleCollectionEndTimeChange} />
                                    </div>
                                    <div className="form-input" style={{marginBottom: '20px'}}>
                                        <DatePicker placeholderText="Course Start Time" showTimeSelect dateFormat="yyyy-MM-dd HH:mm:ss"
                                                    selected={this.state.courseStartTime} onChange={this.handleStartTimeChange} />
                                    </div>
                                    <p className="form-input">
                                        <input type="number" name="courseDurationTime" id="course_duration_time" placeholder="Course Duration Time" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.courseDurationTime } required />
                                    </p>
                                    <p className="form-input">
                                        <input type="number" name="targetStudentAmount" id="target_student_amount" placeholder="Target Student Amount" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.targetStudentAmount } required />
                                    </p>
                                    <p className="form-input">
                                        <textarea id="course_detail" className="form-control" name="detail" placeholder="Course Detail" rows="8"
                                                  onChange={ this.handleInputChange } value={ this.state.detail }>
                                        </textarea>
                                    </p>
                                    <p className="form-input">
                                        <input id="img" name="img" type="file"
                                               accept="image/jpeg,image/x-png,image/gif"
                                               onChange={ this.handleImageChange } />
                                    </p>
                                    <p className="form-input">
                                        <input type="submit" name="wp-submit" id="wp-submit" className="btn"
                                               value={this.state.isLoading ? "Loading..." : "Add Course"} disabled={this.state.isLoading} />
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

const AddCourseWithRouter = withRouter(withAlert(AddCourse));
export default AddCourseWithRouter;
