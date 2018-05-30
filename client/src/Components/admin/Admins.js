import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export class Admins extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      admins: null
    };
  }
  getAllAdmins = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/alladmins`)
      .then(admins => {
        this.setState({ admins: admins.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
 
  componentDidMount() {
    this.getAllAdmins();
  }


  render() {
    return this.state.admins ? (
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="card mb-3">
            <div className="card-header">
              <div>
                <i className="fa fa-table" />Admins
                <Link
                  to="/admin/admins/add-admin"
                  className="btn btn-info float-right btn-sm"
                >
                  Add New Admin
                </Link>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th style={{ width: "30%" }}>Username</th>
                      <th style={{ width: "50%" }}>Password</th>
                     
                      <th style={{ width: "8.33%" }}>Actions</th>
                      <th style={{ width: "8.33%" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.admins.map((admin, key) => {
                      return (
                        <tr key={key}>
                          <td>{admin.username}</td>
                          <td>{admin.password} </td>
                         
                          <td>
                            <Link
                              to={"/admin/admins/edit/" + admin._id}
                              className="btn btn-warning"
                            >
                              Edit
                            </Link>
                          </td>
                          <td>
                            
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <h1>Loading</h1>
    );
  }
}

export default Admins;
