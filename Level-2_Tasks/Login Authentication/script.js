let loginContainerEl = document.getElementById("loginContainer");
let loginEmailEl = document.getElementById("loginEmail");
let loginPasswordEl = document.getElementById("loginPassword");
let loginErrorMessageEl = document.getElementById("loginErrorMessage");
let loginPasswordErrorMessageEl = document.getElementById("loginPasswordErrorMessage");
let alreadyExistErrorMessageEl = document.getElementById("alreadyExistErrorMessage");

let registerContainerEl = document.getElementById("registerContainer");
let registerEmailEl = document.getElementById("registerEmail");
let registerUserEl = document.getElementById("registerUser");
let registerPasswordEl = document.getElementById("registerPassword");
let registerErrorMessageEl = document.getElementById("registerErrorMessage");
let registerUserErrorMessageEl = document.getElementById("registerUserErrorMessage");
let registerPasswordErrorMessageEl = document.getElementById("registerPasswordErrorMessage");
let registrationMessageEl = document.getElementById("registrationMessage");
let registerRPasswordEl = document.getElementById("registerRPassword");
let registerRPasswordErrorMessageEl = document.getElementById("registerRPasswordErrorMessage");

let successDashboardEl = document.getElementById("successDashboard");
let loggedInUserEl = document.getElementById("loggedInUser");

function showRegisterForm() {
    console.log("showRegisterForm clicked");
    loginContainerEl.classList.add("d-none");
    registerContainerEl.classList.remove("d-none");
    registrationMessageEl.classList.add("d-none");
}

function showLoginForm() {
    console.log("showLoginForm clicked");
    loginContainerEl.classList.remove("d-none");
    registerContainerEl.classList.add("d-none");
}

function isValidPassword(password) {
    return /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password);
}
function isRepeatpassword(password,rpassword){
    return password==rpassword;
}

function isUsernameAvailable(username) {
    return !localStorage.getItem(username);
}
function isValidMail(usermail) {
    return /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/.test(usermail);
}


function register() {
    let usermail = registerUserEl.value;
    let username = registerEmailEl.value;
    let password = registerPasswordEl.value;
    let rpassword=registerRPasswordEl.value;
    let registrationMessage = registrationMessageEl;
    let registerErrorMessage = registerErrorMessageEl;
    let registerUserErrorMessage = registerUserErrorMessageEl;
    let registerPasswordErrorMessage = registerPasswordErrorMessageEl;
    let registerRPasswordErrorMessage = registerRPasswordErrorMessageEl;

    registrationMessage.classList.add("d-none"); 
    registerErrorMessage.textContent = ''; 
    registerUserErrorMessage.textContent = ''; 
    registerPasswordErrorMessage.textContent = '';
    registerRPasswordErrorMessage.textContent = '';

    if (!username) {
        registerErrorMessage.textContent = 'Please enter a username.';
    }else if(!usermail){
        registerUserErrorMessage.textContent='please enter you mail'
    } else if(isValidMail(usermail)==false){
        registerUserErrorMessage.textContent='please enter a valid Email'
    } else if (!isValidPassword(password)) {
        registerPasswordErrorMessage.textContent = 'Please enter an alphanumeric password of at least 8 characters.';
    } else if(isRepeatpassword(password,rpassword)== false){
        registerRPasswordErrorMessage.textContent='Password do not match';
    }
    else if (!isUsernameAvailable(username)) {
        registerErrorMessage.textContent = 'Username already exists. Please choose a different username.';
    } else {
        localStorage.setItem(username, password);
        localStorage.setItem(usermail, password);
        registrationMessage.textContent = 'Registration successful! You can now log in.';
        registrationMessage.classList.remove("d-none");;
        registerEmailEl.value = '';
        registerUserEl.value = '';
        registerPasswordEl.value = '';
        registerRPasswordEl.value='';
    }
}

function login() {
    let username = loginEmailEl.value;
    let password = loginPasswordEl.value;

    loginErrorMessageEl.textContent = ''; 
    loginPasswordErrorMessageEl.textContent = '';
    
    if (localStorage.getItem(username) === password) {
        loginContainerEl.classList.add("d-none");
        successDashboardEl.classList.remove("d-none");
        loggedInUserEl.textContent = username;
    } else if (!username) {
        alreadyExistErrorMessageEl.textContent = '';
        loginErrorMessageEl.textContent = 'Please enter a username.';  
    } else if (!isValidPassword(password)) {
        loginPasswordErrorMessageEl.textContent = 'Please enter an alphanumeric password of at least 8 characters.';
        alreadyExistErrorMessageEl.textContent = '';
    } else {
        alreadyExistErrorMessageEl.textContent = 'Invalid username or password.';
    }
    
}

function logout() {
    successDashboardEl.classList.add("d-none");
    loginContainerEl.classList.remove("d-none");
    loginEmailEl.value = '';
    loginPasswordEl.value = '';
}