import { hot } from "react-hot-loader";
import './homePage.css';

// @hot 可以是react组件热重载
@hot(module)
class HomePage extends React.Component {
  state = {
    text: "Hello React"
  };

  /** 组件生命周期钩子函数：在组件挂载完成后立即被调用 */
  componentDidMount() {
    // console.log("组件挂载完成！");
  }

  render() {
    return (
      <div>
        <header>
          <div className="home-title">UNCLEJEE</div>
          <ul className="home-menu">
            <li className="active">主页</li>
            <li>课程信息</li>
            <li>学生博客</li>
            <li>关于我们</li>
          </ul>
          <div className="home-btn"></div>
        </header>
        {/* 輪播部分 */}
        <main>
          <img src="./images/l@2x.png" style="float:left;" alt="" />
          <img src="./images/r@2x.png" style="float:right;" alt=""/>
          <div className="home-banner">
             <div className="banner-item"></div>
          </div>
          <ul className="banner-btn">
            <li className="active"></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </main>
      </div>
    )
  }
}

export default HomePage;