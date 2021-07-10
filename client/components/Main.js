import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import StudentList from "./StudentList.js";
import SingleStudent from "./SingleStudent";
import { fetchStudents } from "../redux/store";
import { connect } from "react-redux";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Student Dashboard</h1>
        </div>
        <Switch>
          <Route exact path="/" component={StudentList} />
        </Switch>
      </Router>
    );
  }
}

export default connect(null, { fetchStudents })(Main);
