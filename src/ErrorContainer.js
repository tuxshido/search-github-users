import React from "react";

function SubContainer() {
    return (
        <div className="row card d-flex flex-row p-3">
            <div className="col-sm-6 m-auto">
                <strong>Oops</strong> .. looks like the <strong>user</strong>{" "}
                you are looking <strong>does not exit</strong>, <br></br> please
                enter another username
            </div>
        </div>
    );
}

export default SubContainer;
