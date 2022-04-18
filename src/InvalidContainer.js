import React from "react";

function SubContainer() {
    return (
        <div className="row card d-flex flex-row p-3">
            <div className="col-sm-6 m-auto">
                <strong>Oops</strong> .. looks like the{" "}
                <strong>username</strong> you enter is{" "}
                <strong>not valid</strong>
                <br></br> please enter another username
            </div>
        </div>
    );
}

export default SubContainer;
