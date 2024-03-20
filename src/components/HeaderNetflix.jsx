import Dropdown from "react-bootstrap/Dropdown";

const HeaderNetflix = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>

          {/*  */}

          <Dropdown role="group">
            <div className="dropdown ms-4 mt-1">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#comedy">Comedy</Dropdown.Item>
                <Dropdown.Item href="#drama">Drama</Dropdown.Item>
                <Dropdown.Item href="#thriller">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </Dropdown>
          {/*  */}
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>
    </>
  );
};

export default HeaderNetflix;
