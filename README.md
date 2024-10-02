

#app html

<!DOCTYPE html>
<html>

<head>
    <title>My PortFolio</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/d555876da5.js" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
</head>

<body>
    <div class="bg">
        <div class="container-fluid">
            <div id="section1" class="row">
                <!--For Laptop-->
                <div class="col-md-12 d-none d-md-block">
                    <nav class="fixed-top navbar navbar-expand-lg bgnav">
                        <h1 class="port">PortFolio <i class="fa-solid fa-bolt icn"></i></h1>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link txt" href="#section1"> Home </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link txt" href="#section2">About Me</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link txt" href="#section3">Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link txt" href="#section3">Certificates</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link txt" href="#section4">Projects</a>
                                </li>
                            </ul>
                            <a href="#sectioncontact" class="butn"><i class="fa-solid fa-phone-volume"></i> Contact Me</a>
                        </div>
                    </nav>
                </div>
                <div class="col-12 useless"></div>

                <div class="d-none d-md-block col-md-4 p-5">
                    <div class="bordr">
                        <img src="https://res.cloudinary.com/dhahendfa/image/upload/v1711387026/i3opjgyritkoqeasjirw.png" class="w-100" />
                    </div>
                </div>
                <div class="d-none d-md-block col-md-8 p-5">
                    <h1 class="introtxt">Hello, I am</h1>
                    <span class="nametxt">"Karan Verma"</span>
                    <h1 class="introtxt mt-1">I'm a <span class="roletxt"> Full Stack Developer</span></h1>
                    <p class="desceiption mt-5">As a Full Stack Developer, I'm passionate about crafting seamless digital experiences that blend innovation with functionality. Welcome to my portfolio, where I showcase my expertise, creativity, and dedication to building robust web solutions.
                    </p>
                    <button id="downRes" class="glowing-btn">Downolad Resume <i class="fa-solid fa-cloud-arrow-down"></i></button>
                </div>
                <!--For Phone-->
                <div id="section1" class="col-12 d-md-none">
                    <nav class="fixed-top navbar navbar-expand-lg bgnav2">
                        <h1 class="port2">PortFolio <i class="fa-solid fa-bolt icn"></i></h1>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa-solid fa-bars icn"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link txt" href="#section1">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link txt" href="#section2">About Me</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link txt" href="#section3">Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link txt" href="#section4">Projects</a>
                                </li>
                            </ul>
                            <div class="text-center">
                                <a href="#sectioncontact" class="butn0"><i class="fa-solid fa-phone-volume"></i> Contact Me</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="d-md-none col-12">
                    <div class="bordr2 ml-auto mr-auto">
                        <img src="https://res.cloudinary.com/dhahendfa/image/upload/v1711387026/i3opjgyritkoqeasjirw.png" class="w-100" />
                    </div>
                </div>
                <div class="d-md-none col-12 mt-3 text-center">
                    <h1 class="introtxt2">Hello, I am</h1><span class="nametxt2">"Karan Verma"</span>
                    <h1 class="introtxt2 mt-1">I'm a <span class="roletxt2"> - Full Stack Developer</span></h1>
                    <p class="desceiption2 mt-5">As a Full Stack Developer, I'm passionate about crafting seamless digital experiences that blend innovation with functionality. Welcome to my portfolio, where I showcase my expertise, creativity, and dedication to building robust web solutions.
                    </p>
                    <button class="glowing-btn">Downolad Resume <i class="fa-solid fa-cloud-arrow-down"></i></button>
                </div>
                <!--Second container For Laptop-->
                <div class="col-12 useless"></div>
                <div class="container-fluid p-5">
                    <div class="row" id="section2">
                        <div class="col-12 useless"></div>

                        <div class="d-none d-md-block col-md-9 text-center p-5">
                            <h1 class="nametxt mt-3">About Me</h1>
                            <p class="desceiption mt-3">
                                I'm a seasoned Full Stack Developer with a wealth of experience in both front-end and back-end development. With a strong foundation in programming languages such as JavaScript, Python, and Java, I thrive on translating complex ideas into elegant, user-friendly applications.
                            </p>
                            <p class="desceiption mt-5" style="font-style:italic;">
                                " The Most Expensive, Thing In The World <br>
                                is Trust Cheap People Cant't Affoed It "</p>
                        </div>
                        <div class="d-none d-md-block col-md-3 bgim mt-3">
                            <img src="https://res.cloudinary.com/dhahendfa/image/upload/v1713028990/IMG_20240413_224515_pz0yep.jpg" class="w-100" />
                        </div>
                        <!--Second-container-For Phone-->
                        <div id="section2" class="d-md-none col-12 bgim mt-3">
                            <img src="https://res.cloudinary.com/dhahendfa/image/upload/v1713028990/IMG_20240413_224515_pz0yep.jpg" class="w-100" />
                        </div>
                        <div class="d-md-none col-12 text-center">
                            <h1 class="nametxt2 mt-3">About Me</h1>
                            <p class="desceiption2 mt-3">
                                I'm a seasoned Full Stack Developer with a wealth of experience in both front-end and back-end development. With a strong foundation in programming languages such as JavaScript, Python, and Java, I thrive on translating complex ideas into elegant, user-friendly applications.


                            </p>
                            <p class="desceiption2 mt-5" style="font-style:italic;">
                                " The Most Expensive, Thing In The World <br>
                                is Trust Cheap People Cant't Affoed It "</p>
                        </div>
                    </div>
                </div>
                <!--Third container-->
                <div class="col-12 useless"></div>
                <div class="container-fluid">
                    <div class="row" id="section3">
                        <div class="d-none d-md-block col-md-12 text-center">
                            <div class="col-12 useless"></div>
                            <h1 class="nametxt">Skills:-</h1>
                            <div class="row mt-5">
                                <div class="col-md-3 text-center"><i class="fa-brands fa-html5 icn2"></i>
                                    <p class="desceiption">HTML</p>
                                </div>
                                <div class="col-md-3 text-center"><i class="fa-brands fa-css3-alt icn2"></i>
                                    <p class="desceiption">CSS</p>
                                </div>
                                <div class="col-md-3 text-center"><i class="fa-brands fa-bootstrap icn2"></i>
                                    <p class="desceiption">BOOTSTRAP</p>
                                </div>
                                <div class="col-md-3 text-center"><i class="fa-brands fa-js icn2"></i>
                                    <p class="desceiption">JAVASCRIPT</p>
                                </div>

                                <div class="col-md-3 text-center mt-5"><i class="fa-brands fa-python icn2"></i>
                                    <p class="desceiption">PYTHON</p>
                                </div>
                                <div class="col-md-3 text-center mt-5"><i class="fa-brands fa-react icn2"></i>
                                    <p class="desceiption">REACT</p>
                                </div>
                                <div class="col-md-3 text-center mt-5"><i class="fa-brands fa-angular icn2"></i>
                                    <p class="desceiption">ANGULAR</p>
                                </div>
                                <div class="col-md-3 text-center mt-5"><i class="fa-brands fa-node icn2"></i>
                                    <p class="desceiption">NODE JS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Third container For Phone-->
                    <div class="d-md-none col-12 text-center">
                        <div class="col-12 useless"></div>
                        <h1 class="nametxt2">Skills:-</h1>
                    </div>
                    <div class="d-md-none row col-12 mt-5">
                        <div class="col-3 text-center"><i class="fa-brands fa-html5 icn3"></i>
                            <p class="desceiption3">HTML</p>
                        </div>
                        <div class="col-3 text-center"><i class="fa-brands fa-css3-alt icn3"></i>
                            <p class="desceiption3">CSS</p>
                        </div>
                        <div class="col-3 text-center"><i class="fa-brands fa-bootstrap icn3"></i>
                            <p class="desceiption3">BOOTSTRAP</p>
                        </div>
                        <div class="col-3 text-center"><i class="fa-brands fa-js icn3"></i>
                            <p class="desceiption3">JAVASCRIPT</p>
                        </div>

                        <div class="col-3 text-center mt-5"><i class="fa-brands fa-python icn3"></i>
                            <p class="desceiption3">PYTHON</p>
                        </div>
                        <div class="col-3 text-center mt-5"><i class="fa-brands fa-react icn3"></i>
                            <p class="desceiption3">REACT</p>
                        </div>
                        <div class="col-3 text-center mt-5"><i class="fa-brands fa-angular icn3"></i>
                            <p class="desceiption3">ANGULAR</p>
                        </div>
                        <div class="col-3 text-center mt-5"><i class="fa-brands fa-node icn3"></i>
                            <p class="desceiption3">NODE JS</p>
                        </div>
                    </div>
                    <div class="col-12 useless"></div>
                </div>
            </div>
            <!--Fourth container-->
            <div class="col-12 useless"></div>
            <div class="container-fluid">
                <div class="row" id="section4">
                    <div class="d-none d-md-block col-md-12 text-center">
                        <div class="col-12 useless"></div>
                        <h1 class="nametxt">My Projects :-</h1>
                    </div>
                    <div class="d-none d-md-block col-md-12 p-5">
                        <a class="newpro mt-5" href="instagramorg.ccbp.tech" target="_blank">Instagram (Clone)</a><br>
                        <a class="newpro mt-5" href="myformxyz.ccbp.tech" target="_blank">Form</a><br>
                        <a class="newpro mt-5" href="fbforpconlyxyz.ccbp.tech" target="_blank">Facebook</a><br>
                        <a class="newpro mt-5" href="myfmovies.ccbp.tech" target="_blank">Movie Website</a><br>
                        <div class="col-12 useless"></div>
                    </div>

                    <!--Fourth container For Phone-->
                    <div class="d-md-none col-12 text-center">
                        <h1 class="nametxt2">My Projects :-</h1>
                    </div>
                    <div class="d-md-none col-12 p-5">
                        <a class="newpro2 mt-5" href="instagramorg.ccbp.tech" target="_blank">Instagram (Clone)</a><br>
                        <a class="newpro2 mt-5" href="myformxyz.ccbp.tech" target="_blank">Form</a><br>
                        <a class="newpro2 mt-5" href="fbforpconlyxyz.ccbp.tech" target="_blank">Facebook</a><br>
                        <a class="newpro2 mt-5" href="myfmovies.ccbp.tech" target="_blank">Movie Website</a><br>
                        <div class="col-12 useless"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 useless"></div>
        <div id="sectioncontact" class="container-fluid pt-5 pb-5 contact-con">
            <h1 class="con-hed text-center">Connect With Me :</h1>
            <div class="row d-flex flex-row">
                <div class="col-md-6 mt-3 p-3">
                    <p class="con-para ml-5"><i class="fa-solid fa-mobile-screen-button"></i> Contact No : 750-566-5517</p>
                    <p class="con-para ml-5"><i class="fa-solid fa-envelope"></i> Email : 099karanverma@gmail.com</p>
                    <p class="con-para ml-5"><i class="fa-solid fa-location-dot"></i> Address : Uttar Pradesh, Firozabad</p>
                </div>
                <div class="col-md-6 mt-3 p-3 d-flex flex-column">
                    <a class="con-para2 ml-5" href="https://www.instagram.com/mr.karan.14/?next=%2F&hl=en" target="_blank"><i class="fa-brands fa-instagram"></i> Instagram</a>
                    <a class="con-para2 ml-5 mt-3" href="https://x.com/KaranVerma5517?t=ppncxtoeOIkaWd_pzKkC6g&s=08" target="_blank"><i class="fa-brands fa-twitter"></i> X (Twitter)</a>
                    <a class="con-para2 ml-5 mt-3" href="https://www.linkedin.com/in/karan-verma-65b821249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i class="fa-brands fa-linkedin"></i> Linkdin</a>
                </div>
            </div>
        </div>
    </div>
</body>

</html>

#app.css

@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');

.port {
    font-family: "Verdana";
    font-size: 30px;
    font-weight: 700;
    color: #4efa0a;
}

.useless {
    background-color: black;
    height: 25vh;
}

.port2 {
    font-family: "Verdana";
    font-size: 20px;
    font-weight: 700;
    color: #4efa0a;
}

.bgnav {
    background-color: black;
    border: 5px solid transparent;
    border-color: #4efa0a;
    border-image-slice: 1;
    padding: 25px;
}

.txt {
    border-width: 0px;
    background-color: black;
    font-family: Sans-Serif;
    color: white;
}

.butn {
    padding: 8px;
    text-align: center;
    background-color: #4efa0a;
    color: black;
    font-weight: 700;
    font-size: 17px;
    height: 40px;
    width: 150px;
    border-radius: 30px;
    border-width: 0px;
}

.butn0 {
    padding: 8px;
    text-align: center;
    background-color: #4efa0a;
    color: black;
    font-weight: 700;
    font-size: 17px;
    height: 35px;
    width: 140px;
    border-radius: 25px;
    border-width: 0px;
}

.colored {
    border: 1px;
    height: 5px;
    width: 100%;
    background: -webkit-linear-gradient(right, #feda75, #fa7e1e, #962fbf, #4f5bd5);
}

.bg {
    background-color: black;
    height: 100%;
}

.bg2 {
    background-color: black;
    height: 100vh;
}

.bordr {
    border-radius: 2000px;
    height: 300px;
    width: 300px;
    border-width: 5px;
    border-style: solid;
    border-color: #4efa0a;
}

.bordr2 {
    border-radius: 2000px;
    height: 200px;
    width: 200px;
    border-width: 5px;
    border-style: solid;
    border-color: #4efa0a;
}

.introtxt {
    font-family: "Roboto";
    font-weight: bold;
    color: white;
    font-size: 40px;
}

.introtxt2 {
    font-family: "Roboto";
    font-weight: bold;
    color: white;
    font-size: 20px;
}

.nametxt {
    font-family: Arial;
    font-weight: bold;
    color: #4efa0a;
    font-size: 50px;
}

.nametxt2 {
    font-family: Arial;
    font-weight: bold;
    color: #4efa0a;
    font-size: 25px;
}

.roletxt {
    font-family: Arial;
    font-weight: bold;
    color: #4efa0a;
    font-size: 35px;
}

.roletxt2 {
    font-family: Arial;
    font-weight: bold;
    color: #4efa0a;
    font-size: 20px;
}

.desceiption {
    font-family: "Roboto";
    color: white;
    font-size: 25px;
}

.desceiption2 {
    font-family: "Roboto";
    color: white;
    font-size: 13px;
}

.desceiption3 {
    font-family: "Roboto";
    color: white;
    font-size: 8px;
}


/* button */
.glowing-btn {
    margin: 100px;
    padding: 12px 38px;
    border-width: 0px;
    outline: none;
    color: #4efa0a;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 12px;
}

.glowing-btn::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #333;
    left: 0;
    top: 0;
    border-radius: 10px;
}

/* glow */
.glowing-btn::before {
    content: "";
    background: linear-gradient(45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #78048c,
            #48ff00,
            #00ffd5,
            #002bff,
            #ff00c8,
            #ff0000);

    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: glowing 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
    opacity: 0;
}

@keyframes glowing {
    0% {
        background-position: 0 0;
    }

    50% {
        background-position: 400% 0;
    }

    100% {
        background-position: 0 0;
    }
}

/* hover */
.glowing-btn:hover::before {
    opacity: 1;
}

.glowing-btn:active:after {
    background: transparent;
}

.glowing-btn:active {
    color: #000;
    font-weight: bold;
}

.butn2 {
    background-color: #4efa0a;
    color: black;
    font-weight: 600;
    font-size: 17px;
    height: 40px;
    width: 200px;
    border-radius: 30px;
    border-width: 0px;
}

.icn {
    font-size: 25px;
    color: #4efa0a;
}

.icn2 {
    font-size: 90px;
    color: #4efa0a;
}

.icn3 {
    font-size: 40px;
    color: #4efa0a;
}

.welcm {
    color: #4efa0a;
    font-size: 35px;
    font-family: Comic Sans MS;
}

.bgnav2 {
    background-color: black;
    width: 100%;
    border: 2px solid transparent;
    border-color: #4efa0a;
    border-image-slice: 1;
    padding: 25px;
}

.bgim {
    height: 100%;
    border-radius: 10px;
    border: 3px solid transparent;
    border-color: #4efa0a;
    border-image-slice: 1;
    padding: 25px;
}

.newpro {
    color: #4efa0a;
    font-size: 30px;
}

.newpro2 {
    color: #4efa0a;
    font-size: 20px;
}

.contact-con {
    height: 100%;
    border-radius: 20px;
    background-color: #4efa0a;
}

.con-hed {
    font-weight: bold;
    font-size: 25px;
    color: black;
    font-family: "Monospace";
}

.con-para {
    font-weight: 500;
    font-size: 15px;
    font-family: "Verdana";
}

.con-para2 {
    color: black;
    font-weight: 700;
    font-size: 15px;
    font-family: "Verdana";
}
const mypfpUrl = "https://res.cloudinary.com/dhahendfa/image/upload/v1711387026/i3opjgyritkoqeasjirw.png"

const mydescription = As a Full Stack Developer, I'm passionate about crafting seamless digital experiences that blend innovation with functionality. Welcome to my portfolio, where I showcase my expertise, creativity, and dedication to building robust web solutions.