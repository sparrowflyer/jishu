import React from 'react';
import Editor from 'react-umeditor';
import { withAlert } from 'react-alert';
import { withRouter } from 'react-router';
import { Header } from '../../components/common/Header.js';
import { Footer } from '../../components/common/Footer.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { postJson, getArticleType, uploadImage } from '../../utils/server.js';

class AddBlog extends React.Component {
    constructor(props) {
        super(props);
        let blogInfo = this.props.location.state;
        this.state = {
            blog: blogInfo,
            blogTitle: blogInfo ? 'Edit Article' : 'Add Article',
            title: blogInfo ? blogInfo.title : '',
            content: blogInfo ? blogInfo.content : '',
            typeId: blogInfo ? blogInfo.typeId : 0,
            image: '',
            showImage: blogInfo ? blogInfo.imagesrc : '',
            articleTypes: [],
            isLoading: false
        };
        this.getPlugins = this.getPlugins.bind(this);
        this.submitArticleInfo = this.submitArticleInfo.bind(this);
        this.addArticle = this.addArticle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
    }

    componentDidMount() {
        getArticleType()
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            articleTypes: data.data || []
                        }
                    });
                }
            });
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

    getPlugins() {
        return {
            image: {
                uploader: {
                    name: 'file',
                    url: '/jishu/upload',
                    filter: (res) => 'http://' + res.data
                }
            }
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

    handleContentChange(content) {
        this.setState((state) => {
            return {
                ...state,
                content
            }
        });
    }

    submitArticleInfo(event) {
        if (!(this.state.title && this.state.title[0])) {
            this.props.alert.error('Article Title is required.');
            return ;
        }
        if (!this.state.content) {
            this.props.alert.error('Article Content is required.');
            return ;
        }
        if (this.state.blog) {
            this.editArticle();
        } else {
            if (this.state.image) {
                uploadImage(this.state.image)
                    .then((data) => {
                        if (data.status === 'success') {
                            this.addArticle(data.data);
                        } else {
                            this.props.alert.error(data.errorMsg || data.error);
                        }
                    }).catch((error) => {
                        this.props.alert.error('上传图片失败。');
                    });
            } else {
                this.addArticle();
            }
        }
    }

    addArticle(image = '') {
        this.setState((state) => {
            return {
                ...state,
                isLoading: true
            }
        });
        postJson('/tieba/addArticle', {
            "title": this.state.title[0],
            "content": this.state.content,
            "imagesrc": image,
            "typeId": this.state.typeId ? this.state.typeId[0] : 0
        }).then((data) => {
            this.setState((state) => {
                return {
                    ...state,
                    isLoading: false
                }
            });
            if (data.status === 'success') {
                this.props.history.push('/blog');
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
            this.props.alert.error('添加博客失败。');
        });
    }

    editArticle() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: true
            }
        });
        postJson('/tieba/updateArticle', {
            "aid": this.state.blog.aid,
            "uid": this.state.blog.uid,
            "title": this.state.title[0],
            "content": this.state.content,
            "imagesrc": this.state.showImage,
            "typeId": Array.isArray(this.state.typeId) ? this.state.typeId[0] : (this.state.typeId || 0)
        }).then((data) => {
            this.setState((state) => {
                return {
                    ...state,
                    isLoading: false
                }
            });
            if (data.status === 'success') {
                this.props.history.push('/blog');
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
            this.props.alert.error('编辑博客失败。');
        });
    }

    render() {
        let plugins = this.getPlugins();
        return (
            <div>
                <Header activeTitle="blog" />
                <BreadCrumb title="学生博客" />
                <section className="login-register">
                    <div className="section-padding">
                        <div className="container">
                            <div className="contents text-center">
                                <h2 className="section-title">{this.state.blogTitle}</h2>
                                <form className="sign-in-form" id="sign-in-form">
                                    <p className="form-input">
                                        <input type="text" name="title" id="blog_title" placeholder="Article Title" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.title } required />
                                    </p>
                                    <p className="form-input" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                                        <span style={{fontWeight: '600'}}>Article Type:</span>
                                        <select style={{float: 'right'}} className="filter-select" name="typeId" value={ this.state.typeId } onChange={ this.handleInputChange }>
                                            <option value={0}> </option>
                                            {
                                                this.state.articleTypes.map((articleType) => {
                                                    return (
                                                        <option key={articleType.id} value={articleType.id}>{articleType.value}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                    </p>
                                    {
                                        this.state.showImage ? null : <p className="form-input">
                                            <input id="img" name="img" type="file"
                                                   accept="image/jpeg,image/x-png,image/gif"
                                                   onChange={ this.handleImageChange } />
                                        </p>
                                    }
                                </form>
                                <Editor value={ this.state.content } onChange={ this.handleContentChange } plugins={plugins} />
                                <p className="form-input" style={{marginTop: '20px'}}>
                                    <input type="submit" name="wp-submit" id="wp-submit" className="btn"
                                           value={this.state.isLoading ? "Loading..." : this.state.blogTitle}
                                           disabled={this.state.isLoading} onClick={this.submitArticleInfo} />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

const AddBlogWithRouter = withRouter(withAlert(AddBlog));
export default AddBlogWithRouter;

