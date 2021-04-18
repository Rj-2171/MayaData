import React from "react";
import { Link } from "react-router-dom";

export default class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: this.props.employeeData
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      employeeData: nextProps.employeeData
    });
  }
  deleteHandler(employee) {
    const conformation = window.confirm("Are you sure? You want to delete");
    if (conformation) {
      const filteredEmployee = this.state.employeeData.filter(employeeData => {
        return employeeData.name.toLowerCase() !== employee.name.toLowerCase();
      });
      this.setState({
        employeeData: filteredEmployee
      });
      if (typeof Storage !== "undefined") {
        localStorage.setItem("employeeData", JSON.stringify(filteredEmployee));
      }
    }
  }
  renderTableData() {
    return this.props.employeeData.map(employee => {
      return (
        <tr>
          <td>{employee.name}</td>
          <td>{employee.designation}</td>
          <td>{employee.salary}</td>
          <td>
            <Link
              className="action-btn edit-btn icon edit"
              to={
                "/edit/" +
                employee.name +
                "/" +
                employee.designation +
                "/" +
                employee.salary
              }
            />
          </td>
          <td>
            <button
              className="action-btn del-btn"
              onClick={() => {
                this.deleteHandler(employee);
              }}
            >
              <i className="icon trash" />
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 board">
            <table id="simple-board" className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Salary</th>
                  <th colSpan="2" />
                </tr>
              </thead>
              <tbody>{this.renderTableData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
