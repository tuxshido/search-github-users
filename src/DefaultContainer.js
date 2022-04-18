import React from "react";
import DefaultRepo from "./DefaultRepo";
import DefaultCard from "./DefaultCard";

function DefaultContainer() {
    return (
        <div className="row card d-flex flex-row">
            <div className="col-sm-8">
                <DefaultRepo />
            </div>
            <div className="col-sm-4">
                <DefaultCard />
            </div>
        </div>
    );
}

export default DefaultContainer;
