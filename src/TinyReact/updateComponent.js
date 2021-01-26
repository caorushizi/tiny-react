import diff from "./diff";

export default function updateComponent(
  virtualDOM,
  oldComponent,
  oldDOM,
  container
) {
  oldComponent.componentWillReceiveProps(virtualDOM.props)

  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
    // 未更新前的 props
    let prevProps = oldComponent.props
    oldComponent.componentWillUpdate(virtualDOM.props)
    // 组件更新
    oldComponent.updateProps(virtualDOM.props)
    let nextVirtualDOM = oldComponent.render()
    nextVirtualDOM.component = oldComponent
    diff(nextVirtualDOM, container, oldDOM)

    oldComponent.componentDidUpdate(prevProps)
  }

}
