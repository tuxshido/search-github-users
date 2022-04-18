import React, { useState } from "react";
import UserContainer from "../UserContainer";
import DefaultContainer from "../DefaultContainer";
import SearchBar from "./SearchBar";
import ErrorContainer from "../ErrorContainer";
import InvalidContainer from "../InvalidContainer";
//import {useState} from "react";

function Home() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [repoData, setRepoData] = useState(null);
    const [errorUser, setErrorUser] = useState(null);
    const [errorRepo, setErrorRepo] = useState(null);
    const [validUsername, setValidUsername] = useState(true);
    const [resultValid, setResultValid] = useState(true);
    const urlApi1 = "https://api.github.com/users/";
    const urlApiRepo = "/repos";
    const urlApi2 =
        "?client_id=99c3ae6b86d8e5124261&client_secret=7b8a2a264b655ce9fb352d25855721533a15ef31";

    const handleReturn = () => {
        if (validUsername) {
            setResultValid(true);
            let request = urlApi1 + username + urlApi2;
            setErrorUser(false);
            setErrorRepo(false);
            fetch(request)
                .then((response) => response.json())
                .then((userData) => setUserData(userData))
                .catch((errorUser) => {
                    console.log("Error from user request!!");
                    setErrorUser(errorUser);
                });
            request = urlApi1 + username + urlApiRepo + urlApi2;
            fetch(request)
                .then((response) => response.json())
                .then((data) => setRepoData(data.slice(0, 7)))
                .catch((errorRepo) => {
                    console.log("Error from repo request !!");
                    setErrorRepo(errorRepo);
                });
        } else {
            setUserData(null);
            setRepoData(null);
            setResultValid(false);
        }
    };

    return (
        <div className="container d-block mt-4">
            <SearchBar
                username={username}
                setUsername={setUsername}
                handleReturn={handleReturn}
                validUsername={validUsername}
                setValidUsername={setValidUsername}
            />
            {errorUser || errorRepo ? (
                <ErrorContainer />
            ) : userData && repoData ? (
                <UserContainer userData={userData} repoData={repoData} />
            ) : !resultValid ? (
                <InvalidContainer />
            ) : (
                <DefaultContainer />
            )}
        </div>
    );
}

export default Home;
