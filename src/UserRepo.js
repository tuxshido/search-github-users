import React from "react";

function UserRepo({ userData, repoData }) {
    const GitInfo = [
        [
            "danger",
            userData.html_url + "?tab=followers",
            "Followers",
            userData.followers,
        ],
        [
            "warning",
            userData.html_url + "?tab=following",
            "Following",
            userData.following,
        ],
        [
            "success",
            userData.html_url + "?tab=repositories",
            "Repos",
            userData.public_repos,
        ],
        [
            "info",
            "https://gist.github.com/" + userData.login,
            "Gists",
            userData.public_gists,
        ],
    ];

    return (
        <div>
            {" "}
            <div className="card border-0">
                <div className="card-body">
                    <div className="d-flex flex-row w-100 justify-content-center gap-4">
                        {GitInfo.map((item, index) => (
                            <a
                                href={item[1]}
                                className={"btn btn-" + item[0]}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}>
                                {item[2]}: {item[3]}
                            </a>
                        ))}
                    </div>

                    <div>
                        <h3
                            className="text-center"
                            style={{ marginTop: "40px" }}>
                            Some Repositories
                        </h3>
                        <div className="users">
                            <table className="table test-xsmall">
                                <thead>
                                    <tr>
                                        <th width="22%">Repo</th>
                                        <th>About</th>
                                        <th>
                                            <small>Watchers</small>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {repoData.map((repo, index) => (
                                        <tr key={index}>
                                            <td>
                                                <a
                                                    href={repo.html_url}
                                                    className="btn btn-secondary"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <small>
                                                        {repo.name.length > 18
                                                            ? repo.name.slice(
                                                                  0,
                                                                  15
                                                              ) + " .."
                                                            : repo.name}
                                                    </small>
                                                </a>
                                            </td>
                                            <td>
                                                <small>
                                                    {repo.description}
                                                </small>
                                            </td>
                                            <td>{repo.watchers_count}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserRepo;
