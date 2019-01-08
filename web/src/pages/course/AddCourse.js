import React from 'react';
import DatePicker from 'react-datepicker';
import '../../assets/css/react-datepicker.min.css';
import { Header } from '../../components/common/Header.js';
import { Footer } from '../../components/common/Footer.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { postJson } from '../../utils/server.js';

export class AddCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            detail: '',
            coverImage: '',
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
        if (!/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9](0-9)?$)/.test(value)) {
            this.setState((state) => {
                return {
                    ...state,
                    priceMsg: '金额格式不正确。'
                };
            });
        }
    }

    handleImageChange(event) {
        console.log(event.target.value);
    }

    submitCourseInfo(event) {

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
                                               onChange={ this.handleInputChange } value={ this.state.price } onBlur={ this.handlePriceBlur } required />
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
                                                    return (
                                                        <option key={courseType} value={courseType}>{courseType}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                    </p>
                                    <p className="form-input">
                                        <DatePicker placeholderText="Course Collection Start Time" showTimeSelect dateFormat="yyyy-MM-dd HH:mm:ss"
                                                    selected={this.state.courseCollectionStartTime} onChange={this.handleCollectionStartTimeChange} />
                                    </p>
                                    <p className="form-input">
                                        <DatePicker placeholderText="Course Collection End Time" showTimeSelect dateFormat="yyyy-MM-dd HH:mm:ss"
                                                    selected={this.state.courseCollectionEndTime} onChange={this.handleCollectionEndTimeChange} />
                                    </p>
                                    <p className="form-input">
                                        <DatePicker placeholderText="Course Start Time" showTimeSelect dateFormat="yyyy-MM-dd HH:mm:ss"
                                                    selected={this.state.courseStartTime} onChange={this.handleStartTimeChange} />
                                    </p>
                                    <p className="form-input">
                                        <input type="number" name="courseDurationTime" id="course_duration_time" placeholder="Course Duration Time" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.courseDurationTime } required />
                                    </p>
                                    <p className="form-input">
                                        <input type="number" name="targetStudentAmount" id="target_student_amount" placeholder="Target Student Amount" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.targetStudentAmount } required />
                                    </p>
                                    <p className="form-input">
                                        <textarea id="course_detail" className="form-control" name="detail" placeholder="Course Detail" rows="8">
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
