let body = document.querySelectorAll("body")[0];
let themeMeta = document.querySelectorAll("meta[name=color-scheme]")[0];
let themeBtn = document.querySelectorAll("button[id=themeToggle]")[0];
let html = document.querySelector("html");
// post
let postBtn = document.querySelector("#postBtn");
let newPost = document.querySelector("textarea");
let postB = document.getElementById("postB");
let post = document.getElementById("post");
let postControl = document.querySelector("#postControl");
let posts = document.querySelectorAll("div[id=posts]")[0];

// user react 
let commentIn = document.querySelector("input[id=commentIn]");
let commentBox = document.querySelector("#commentBox");
let commentButton = document.querySelector("input[value=✈]");
let seeComment = document.getElementById("seeComments");
let comment = [];

let like = document.getElementById("like");

// profile
let profiler = document.querySelector("input[id=profiler]");
let signIn = document.querySelectorAll("input")[2];
let signUp = document.querySelectorAll("input")[3];
let profille = document.getElementById("proFile");

let profile = {
    signInForm: document.querySelectorAll("form")[0],
    signUpForm: document.querySelectorAll("form")[1],

    signInEmail: document.querySelectorAll("input[id=email]")[0],
    signUpEmail: document.querySelectorAll("input[type=email]")[1],

    signInPassword: document.querySelectorAll("input[type=password]")[0],
    signUpPassword: document.querySelectorAll("input[type=password]")[1],

    signInUserName: document.querySelectorAll("input[id=Username]")[0],
    signUpName: document.querySelectorAll("input[id=name]")[0],

    profileSpace: document.querySelectorAll("div[id=proFile]")
}

let signInStuff = [profile.signInForm, profile.signInEmail, profile.signInPassword, profile.signInUserName];
let signUpStuff = [profile.signUpForm, profile.signUpEmail, profile.signUpPassword, profile.signUpName];


let Username = document.querySelectorAll("input[id=Username]")[0];
let UserName = document.querySelectorAll("input[id=name]")[0];
let signin = document.getElementById("submit");
let signup = document.getElementById("suBmit");
let logOut = document.querySelectorAll("input[id=logOut]")[0];
let signups = [signin, signup];

// post mechanism
postBtn.addEventListener("click", function () {
    postControl.classList.toggle("appear");
    newPost.classList.toggle("appear");
    postB.classList.toggle("appear");

    profille.classList.toggle("appear");

    signIn.classList.add("appear");
    signUp.classList.add("appear");
    signup.classList.add("appear");
    signin.classList.add("appear");

    for (let i = 0; i < signInStuff.length; i++) {
        signInStuff[i].classList.add("appear");
        signUpStuff[i].classList.add("appear");
    }
});

postB.addEventListener("click", function () {
    signIn.classList.add("appear");
    signUp.classList.add("appear");
    profille.classList.remove("appear");

    let Post = newPost.value.length

    if (Post < 1) {
        alert("Error 403: No empty posts allowed");
    }
    else {
        postControl.classList.toggle("appear");
        newPost.classList.toggle("appear");
        postB.classList.toggle("appear");

        posts.innerHTML +=
            '<div class="postSection">' +
            '<p class="post">' +
            newPost.value +
            '</p>' +
            '<div class="commentSection">' +
            '<div class="commentInput">' +
            '<hr>' +
            '<button class="like">🤍</button>' +
            '<input type="text" class="commentsIn" placeholder="comment">' +
            '<input type="button" value="✈" class="subMit">' +
            '<input type="button" value="See Comments" class="seeComments">' +
            '</div><div class="commentBox"></div></div></div>';
        newPost.value = "";

    }
});


        // virtual DOM attempt
        let commentsIn = document.querySelector("input[class=commentIn]");
        let commentsBox = document.getElementsByClassName("commentBox");
        let commentsButton = document.getElementsByClassName("subMit");
        let seeComments = document.getElementsByClassName("seeComments");
        let comments = [];
        let likes = document.getElementsByClassName("like");

        let likeTrackers = 1;

        for (let i = 0; i < likes.length; i++) {
            likes[i].addEventListener("click", function () {
                likeTrackers++;
    
                alert(likeTrackers);
            });
            
        }

// userProfile mechanism
profiler.addEventListener("click", function () {
    signIn.classList.toggle("appear");
    signUp.classList.toggle("appear");
    profille.classList.toggle("appear");

    postControl.classList.add("appear");
    newPost.classList.add("appear");
    postB.classList.add("appear");

    signup.classList.add("appear");
    signin.classList.add("appear");

    for (let i = 0; i < signInStuff.length; i++) {
        signInStuff[i].classList.add("appear");
        signUpStuff[i].classList.add("appear");
    }
});

signIn.addEventListener("click", function () {

    signIn.classList.add("appear");
    signUp.classList.add("appear");
    profille.classList.add("appear");

    signup.classList.add("appear");
    signin.classList.remove("appear");

    for (let i = 0; i < signInStuff.length; i++) {
        signInStuff[i].classList.remove("appear");
        signUpStuff[i].classList.add("appear");
    }
});

signUp.addEventListener("click", function () {

    signIn.classList.add("appear");
    signUp.classList.add("appear");
    profille.classList.add("appear");


    signup.classList.remove("appear");
    signin.classList.add("appear");

    for (let i = 0; i < signInStuff.length; i++) {
        signInStuff[i].classList.add("appear");
        signUpStuff[i].classList.remove("appear");
    }

});

let seCheck;
let leCheck;

function userIn(x) {

    if (x === 0) {
        signups[x].addEventListener("click", function () {
            leCheck = profile.signInEmail.value;
            if (leCheck.indexOf("@gmail.com") > -1) {
                profille.innerHTML =
                    "<div id='profileBox'>" +
                    "<div class='profilePic'>" +
                    "<img src='profilePic.jpg' id='proPic' class='proPic'>" +
                    "<span class='proName'>" +
                    Username.value +
                    "</span>" +
                    "<br><span class='proMail'>" +
                    profile.signInEmail.value +
                    "</span>" +
                    "</div>" +
                    "</div>";
                profiler.setAttribute("value", "👱🏻‍♂️ " + UserName.value);
                profiler.setAttribute("value", Username.value);
                profille.classList.remove("appear");
                signIn.classList.add("appear");
                signUp.classList.add("appear");
                signup.classList.add("appear");
                signin.classList.add("appear");

                for (let i = 0; i < signInStuff.length; i++) {
                    signInStuff[i].classList.add("appear");
                    signUpStuff[i].classList.add("appear");
                }
                profile.signInForm.classList.add("appear");
                profile.signUpForm.classList.add("appear");
            }
            else {
                alert("Error 405: your email is not complete, please include @gmail.com");
            }
        });
    }
    else {
        signups[x].addEventListener("click", function () {
            seCheck = profile.signUpEmail.value;
            if (seCheck.indexOf("@gmail.com") > -1) {
                profille.innerHTML =
                    "<div id='profileBox'>" +
                    "<div class='profilePic'>" +
                    "<img src='profilePic.jpg' id='proPic' class='proPic'>" +
                    "<span class='proName'>" +
                    UserName.value +
                    "</span>" +
                    "<br><span class='proMail'>" +
                    profile.signUpEmail.value +
                    "</span>" +
                    "</div>" +
                    "</div>";
                profiler.setAttribute("value", "👱🏻‍♂️ " + UserName.value);
                profille.classList.remove("appear");
                signIn.classList.add("appear");
                signUp.classList.add("appear");
                signup.classList.add("appear");
                signin.classList.add("appear");

                for (let i = 0; i < signInStuff.length; i++) {
                    signInStuff[i].classList.add("appear");
                    signUpStuff[i].classList.add("appear");
                }
                profile.signInForm.classList.add("appear");
                profile.signUpForm.classList.add("appear");
            }
            else {
                alert("Error 405: your email is not complete, please include @gmail.com");
            }
        });
    }
}

userIn(0);
userIn(1);

// user react mechanism
let commentTrecker = -1;

seeComment.addEventListener("click", function () {
    alert("This feature is temporally unavailable. Try again in a few days");

    signIn.classList.add("appear");
    signUp.classList.add("appear");
    profille.classList.add("appear");
});

commentButton.addEventListener("click", function () {

    signIn.classList.add("appear");
    signUp.classList.add("appear");
    profille.classList.add("appear");

    comment.push(commentIn.value);

    if (commentIn.value.length < 1) {
        alert("Error 404: You can not post an empty comment");
        comment.splice(comment.length - 1);
    }

    else {

        if (comment[commentTrecker].indexOf()) {
            
        }
        commentBox.innerHTML =
            "<div class='coMMent'>" +
            "    Comment  " + comment.length +
            "<br>" +
            "    " + comment[commentTrecker] +
            "<br>" +
            "</div>" +
            commentBox.innerHTML;

    }
    commentIn.value = "";
});

let likeTracker = 1;
like.addEventListener("click", function () {
    likeTracker++;

    if (likeTracker % 2 === 0) {
        like.textContent = "🧡 Liked";
    }
    else {
        like.textContent = "🤍 Like"
    }
});

// theme mechanism
let themeTracker = 1;

themeBtn.addEventListener("click", function () {
    themeTracker++;

    if (themeTracker % 2 === 0) {
        themeBtn.textContent = "⚫ Toggle theme";
        themeMeta.setAttribute("content", "light")
        html.style.background = "#D8D9DF"
    }
    else {
        themeBtn.textContent = "🔘 Toggle theme";
        themeMeta.setAttribute("content", "light dark")
        html.style.background = "#1e1f22"
    }
});