import React from "react";
import githubUsernameRegex from "github-username-regex";

function SearchBar({
    username,
    setUsername,
    handleReturn,
    validUsername,
    setValidUsername,
}) {
    return (
        <div>
            <div className="input-group mb-3">
                <span
                    className="input-group-text"
                    id="inputGroup-sizing-default">
                    Github Username
                </span>
                <input
                    type="text"
                    className={
                        validUsername
                            ? "form-control"
                            : "form-control is-invalid"
                    }
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setValidUsername(
                            githubUsernameRegex.test(e.target.value)
                        );
                    }}
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            handleReturn();
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default SearchBar;
