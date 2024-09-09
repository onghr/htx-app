import { Link } from 'react-router-dom';
import React from 'react';
import AudioData from "./AudioData";

export default function AudioList(props) {
    return (
      <div className="container-fluid p-0 content-display" id="audio-main">
        <div className="row">
          <div className="col"><h1 className="h3 mb-3"><strong>Audio List</strong></h1></div>
          <div className="col-auto mb-2">
            <Link data-id="add-audio" className="btn btn-primary btn-lg" to={"upload"}><i className="bi bi-upload"></i> Upload Audio</Link>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="row">
              <div className="col-12 d-flex">
                <div className="card flex-fill">
                  <table className="table table-hover my-0" id="audioDataTbl">
                    <thead>
                      <tr>
                        <th>File Name</th>
                        <th>Description</th>
                        <th width="180">Category</th>
                        <th width="180" className="d-none d-xl-table-cell">Date Uploaded</th>
                        <th width="100" className="d-none d-xl-table-cell">Size</th>
                        <th width="180" className="audio-delete"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <AudioData />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}