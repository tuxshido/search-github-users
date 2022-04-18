import React from "react";

function DefaultCard({ userData }) {
    return (
        <div>
            <div className="card d-flex justify-content-center align-items-center border-0">
                <img
                    src="https://avatars.githubusercontent.com/u/583231"
                    className="card-img-top img-sm rounded-circle w-75 mt-3"
                    alt="Github User"
                />
            </div>
        </div>
    );
}

export default DefaultCard;
