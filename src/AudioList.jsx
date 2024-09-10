import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import AudioData from "./AudioData";
import DeleteAudio from './DeleteAudio';



export default function AudioList(props) {
    const audios = useSelector((store) => {
      return store.audio.value;
    });
    const [audiolist, setAudiolist] = React.useState(audios);
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
                        <th width="180" className="audio-delete">Delete?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AudioData />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <DeleteAudio selectedAudios={function(deleteAudios) {
              for(let da = 0; deleteAudios.length > da; da++) {
                console.log(audiolist[3].deleted);
                console.log(deleteAudios);
                audiolist[deleteAudios[da]].deleted = true; // get audio index
                setAudiolist([...audiolist]);
              }
            }} />
          </div>
        </div>
      </div>
    );
}