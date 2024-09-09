import Footer from './Footer';
// import { Link } from 'react-router-dom';
const fileChangedHandler = (event) => {
  let fileSize = (parseInt(event.target.files[0].size) / 1000 / 1000).toFixed(2);
  document.getElementById('audioFileSize').value = fileSize;
};

let today = new Date();
let day = String(today.getDate()).padStart(2, '0');;
let month = String(today.getMonth() + 1).padStart(2, '0');;
let year = today.getFullYear();
const dateUpload = day + '/' + month + '/' + year

export default function Upload(props) {
  return (
    <div className="main">
      <main className="content">
        <>
          <div className="row">
            <div className="col"><h1 className="h3 mb-3"><strong>Add Audio</strong></h1></div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Audio details</h5>
                </div>
                <div className="card-body">
                  <div className="mb-3 row">
                    <label htmlFor="audioUpload" className="col-sm-3 col-form-label">Choose audio file</label>
                    <div className="col-sm-9">
                      <input className="form-control form-control-lg" id="audioUpload" type="file" accept=".wma,.mp3,.mp4,.m4a,.aac,.amr" onChange={fileChangedHandler} />
                      <input type="hidden" id="audioFileSize" value="" />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label htmlFor="audioTitle" className="col-sm-3 col-form-label">Title</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="audioTitle" placeholder="" />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label htmlFor="audioDesc" className="col-sm-3 col-form-label">Description</label>
                    <div className="col-sm-9">
                    <textarea className="form-control" id="audioDesc" rows="3"></textarea>
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label htmlFor="audioCat" className="col-sm-3 col-form-label">Category</label>
                    <div className="col-sm-9">
                      <div className="input-group mb-3 mt-2" id="audioCat">
                        <label className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="category" value="Voice Recording"/>
                          <span className="form-check-label">Voice Recording</span>
                        </label>

                        <label className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="category" value="Music"/>
                          <span className="form-check-label">Music</span>
                        </label>

                        <label className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="category" value="Others"/>
                          <span className="form-check-label">Others</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <div className="col-sm-5 offset-sm-3">
                      <input type="hidden" id="dateUpload" value={dateUpload} />
                      <button className="btn btn-primary btn-lg" onClick={function() {
                        /* prepare genre data */
                        let audioCats = [];
                        let catEle = document.querySelectorAll("input[name='category']:checked");
                        for (let i = 0; catEle.length > i; i++) {
                          audioCats.push(catEle[i].value);
                        };
                        let newAudioData = {
                          "audio": document.getElementById("audioUpload").value,
                          "title": document.getElementById("audioTitle").value,
                          "description": document.getElementById("audioDesc").value,
                          "category": audioCats.toString(),
                        };
                        props.onUpload(newAudioData)
                      }}>Upload</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
      <Footer />
    </div>
  );
}
