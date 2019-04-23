import { hot } from "react-hot-loader";

// @hot 可以是react组件热重载
@hot(module)
class HomePage extends React.Component {
  state = {
    text: "Hello React"
  };

  /** 组件生命周期钩子函数：在组件挂载完成后立即被调用 */
  componentDidMount() {
    console.log("组件挂载完成！");
  }

  render() {
    return (
      <div>{this.state.text}, I am {this.props.author}!</div>
    )
  }
}

export default HomePage;