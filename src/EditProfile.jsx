import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function EditProfile() {
  return (
    <div className="main">
      <main className="content">
        <div className="container-fluid p-0 content-display" id="edit-profile">
          <div className="row">
            <div className="col"><h1 className="h3 mb-3"><strong>Edit Profile</strong></h1></div>
            <div className="col-auto mb-2">
              <Link data-id="add-audio" className="btn btn-primary btn-lg" to={"/upload"}><i className="bi bi-upload"></i> Upload Audio</Link>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
