import React, { Component } from 'react';
import SideNav from '../layout/sidenav'

class ProjectDetails extends Component {
  state = {

  }


  render() {
    return (
      <div className='row'>
      <div className='col fixed l2 xl2 m4 white-text black darken sidenavi'>
      <SideNav/>
      </div>
      <div className='col right l10 '>
          <div className=''>
          <table className="centered responsive-table section highlight white-text">
            <thead className='blue darken-4'>
              <tr>
                  <th colspan="3">Project Title</th>
                  <th>Start date</th>
                  <th>End date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colspan="5">Project Desription</td>
              </tr>
              <tr>
                <td colspan="3">Target 1</td>
                <td>Start date</td>
                <td>End date</td>
              </tr>
              <tr>
                <td colspan="3">Target 2</td>
                <td>Start date</td>
                <td>End date</td>
              </tr>
              <tr>
                <td colspan="3">Target 3</td>
                <td>Start date</td>
                <td>End date</td>
              </tr>
              <tr>
                <td colspan="3">Target 4</td>
                <td>Start date</td>
                <td>End date</td>
              </tr>
              <tr>
                <td colspan="3">Target 5</td>
                <td>Start date</td>
                <td>End date</td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>
      </div>
    );
  }
}

export default ProjectDetails;
