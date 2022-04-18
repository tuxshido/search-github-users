import React from "react";

function UserCard({ userData }) {
    const GitHubUser = {
        name: userData.login,
        url: userData.avatar_url,
        profile: [
            ["Role", userData.bio],
            ["Company", userData.company],
            ["Location", userData.location],
            ["Homepage", userData.blog],
            ["email", userData.email],
        ],
        link: userData.html_url,
    };

    return (
        <div>
            <div className="card d-flex justify-content-center align-items-center border-0">
                <img
                    src={GitHubUser.url}
                    className="card-img-top img-sm rounded-circle w-75 mt-3"
                    alt="Github User"
                />
                <div
                    className="card-body d-flex flex-column"
                    style={{ width: "100%" }}>
                    <h3 className="card-title">{GitHubUser.name}</h3>

                    <ol className="list-group list-inline">
                        {GitHubUser.profile.map((item) =>
                            item[1] != null && item[1] != "" ? (
                                <li
                                    className="list-group-item d-flex justify-content-between align-items-start"
                                    key={item[0]}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{item[0]}</div>
                                        {item[1]}
                                    </div>
                                </li>
                            ) : (
                                ""
                            )
                        )}
                    </ol>

                    <a
                        href={GitHubUser.link}
                        className="btn btn-primary btn-lg mt-4"
                        tabIndex="-1"
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-disabled="true">
                        View Profile
                    </a>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
