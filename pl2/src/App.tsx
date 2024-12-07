import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { AppRoutes } from "./routes";

export class App extends Component {
  render() {
    return (
      <div>
        <AppRoutes />
      </div>
    );
  }
}
