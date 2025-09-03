import { Component } from "react";

type ClassProperties = {
  name?: string;
};

export default class ClassComponent extends Component<ClassProperties> {
  constructor(props: ClassProperties) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  static defaultProps = {
    name: "kyra",
  };

  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidMount(): void {
    console.log("mounted");
  }

  componentDidUpdate(): void {
    console.log("updated");
  }

  componentWillUnmount(): void {
    console.log("unmounted");
  }

  render() {
    return (
      <div>
        hi, {this.props.name}
        <p>count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>increment</button>
      </div>
    );
  }
}
