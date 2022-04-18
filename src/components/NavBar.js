import React from "react";

function NavBar() {
    const refreshPage = () => {
        window.location.reload(false);
    };

    return (
        <nav className="navbar navbar-dark bg-dark flex-row ">
            <div className="col-2 d-flex justify-content-end">
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    className="rounded-circle"
                    alt="Github User"
                    style={{ height: "40px", width: "40px" }}
                />
            </div>
            <div className="container-fluid col-10">
                <button
                    className="navbar-brand btn btn-dark"
                    onClick={refreshPage}>
                    <h2>Github Profile Search</h2>
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
