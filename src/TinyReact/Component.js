import diff from "./diff";

export default class Component {
  constructor(props) {
    this.props = props
  }

  setState(state) {
    this.state = Object.assign({}, this.state, state)
    // 获取最新的要渲染的 virtualDOM 对象
    let virtualDOM = this.render()
    // 获取旧的 virtualDOM 对象进行比对
    let oldDOM = this.getDOM()

    // 获取容器
    const container = oldDOM.parentNode
    // 实现对比
    diff(virtualDOM, container, oldDOM)
  }

  setDOM(dom) {
    this._dom = dom
  }

  getDOM() {
    return this._dom
  }

  render() {
    throw new Error("请实现子类 render 函数")
  }

  updateProps(props) {
    this.props = props
  }

  // 生命周期函数
  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, preState) {
  }

  componentWillUnmount() {
  }
}
