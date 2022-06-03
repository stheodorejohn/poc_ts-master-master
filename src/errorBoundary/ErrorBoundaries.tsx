import { Component, ErrorInfo } from "react";

export default class ErrorBoundaries extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isErrorOccured: false,
    };
  }

  static getDerivedStateFromError(errorInfor: any) {
    return { isErrorOccured: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("inside Component did mount===>>>$", error, errorInfo);
  }

  render() {
    return (
      <>
        {this.state.isErrorOccured ? (
          <div>
            {" "}
            Oops Something went wrong <br />
            Try again after some time
          </div>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}
