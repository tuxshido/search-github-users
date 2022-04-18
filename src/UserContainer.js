import React from "react";
import UserRepo from "./UserRepo";
import UserCard from "./UserCard";

function UserContainer({ userData, repoData }) {
    return (
        <div className="row card d-flex flex-row border-dark">
            <div className="col-sm-4">
                <UserCard userData={userData} />
            </div>
            <div className="col-sm-8">
                <UserRepo userData={userData} repoData={repoData} />
            </div>
        </div>
    );
}

export default UserContainer;
