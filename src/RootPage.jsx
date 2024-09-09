import { NavLink } from 'react-router-dom';

export default function RootPage(props) {
  return (
    <div className="main">
        <main className="content">
          <div className="container d-flex flex-column">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
                <div className="d-table-cell align-middle">

                  <div className="text-center mt-4">
                    <h1 className="h2">Welcome back!</h1>
                    <p className="lead">
                      Sign in to your account to continue
                    </p>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <div className="m-sm-3">
                        <form>
                          <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" />
                          </div>
                          <div className="d-grid gap-2 mt-3">

                            <NavLink to={"/dashboard"} className={"btn btn-lg btn-primary"}>Sign in</NavLink>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}
