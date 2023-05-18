function LoginLogout() {

    const loggedInObj = JSON.parse(localStorage.getItem("isLoggedIn"));
    let loggedIn;
    if (loggedInObj) {
        loggedIn = loggedInObj.value;
    }

    const logOut = async () => {
        await fetch('/login/logout', {
            method: "GET",
            headers: { "Content-Type": "application/json"}
        })
        localStorage.removeItem('isLoggedIn');
        window.location.replace("/")
        console.log("Hello")
    }

    if (loggedIn) {
        return (
            <div className="button d-flex">
                <div className="content-button tertiary-btn mx-1" onClick={logOut}>Log out</div>
            </div>
        )
    } else {
        return (
            <div className="button d-flex">
                <a className="content-button tertiary-btn mx-1" href='/login'>Login</a>
            </div>
        )
    }
};

export default LoginLogout;