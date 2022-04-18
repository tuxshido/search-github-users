import React from "react";

function DefaultRepo() {
    return (
        <div>
            {" "}
            <div className="card border-0">
                <div className="card-body text-center">
                    <h1>Hello friends</h1>
                    <br></br>
                    <h3>Search for a github profile ?</h3>
                    <h3>But you're too shy to ask directly ?</h3>
                    <br></br>
                    <h3>Just the type a username and hit Enter !</h3> <br></br>
                    <h4>
                        {" "}
                        Please, don't forget that Octocat's friends <br></br>{" "}
                        have 20 characters max for their username.
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default DefaultRepo;
