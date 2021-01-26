import diff from "./diff";

export default function render(
  virtualDOM,
  container,
  oldDOM = container.firstChild
) {
  console.log("render: ", virtualDOM)
  diff(virtualDOM, container, oldDOM)
}
