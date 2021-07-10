import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class StudentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.students.map((student) => (
          <li key={student.id}>
            <div>
              <p>Name: {student.fullName}</p>
              <p>Email: {student.email}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state,
  };
};

export default connect(mapStateToProps)(StudentList);
