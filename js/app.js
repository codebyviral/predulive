function returnNav() {
    const retNavbar = `
    <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./index.html"><img src="./img/logo3.png" alt="logo" height="50" id="logo" /></a>
                    <a class="navbar-brand webName" href="./index.html">PREDULIVE LABS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./index.html">HOME</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PRODUCTS
                                </a>
                                <ul class="dropdown-menu">
                                    <!-- <li><a class="dropdown-item" href="./about.html">ABOUT US</a></li> -->
                                    <li>
                                        <a class="dropdown-item" href="./krishi-drone.html">KRISHI DRONE</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="./spectra.html">SPECTRA-90</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="./daas.html">DAAS PLATFORM</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SERVICES
                                </a>
                                <ul class="dropdown-menu">
                                    <!-- <li><a class="dropdown-item" href="./about.html">ABOUT US</a></li> -->
                                    <li>
                                        <a class="dropdown-item" href="./inspection.html">INFRASTRUCTURE INSPECTION</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="./precision.html">PRECISION AGRICULTURE</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="./mapping.html">MAPPING & SURVEY</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item text-uppercase" href="./surveillance.html">Surveillance & Monitoring </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a style="font-weight: bolder !important;" class="nav-link" href="./events.html">
                                    <strong>THE DRONE ERA</strong>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./blog.html">
                                    BLOGS
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./about.html">ABOUT US</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MORE
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="./contact.html">CONTACT US</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="./career.html">CAREER</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;
    document.getElementById('navbar').innerHTML = retNavbar;
}

function returnFooter() {
    const retFooter = `
    <!-- Footer -->
    <footer class="text-center text-lg-start text-white" style="background-color: #45526e;">
        <div class="container  p-4 pb-0">
            <section class="">
                <div class="row">
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-warning text-uppercase mb-4 font-weight-bold">
                            <iframe
                                id="main-office-gmap"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4469710883022!2d81.06472961452015!3d26.889306267571744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3cebefbb1f5%3A0xb8d92d5145d3bc9f!2sPredulive%20Labs!5e0!3m2!1sen!2sin!4v1662614935890!5m2!1sen!2sin"
                                width="150"
                                height="75"
                                style="border: 0; float: left !important;"
                            >
                            </iframe>
                            <br />
                            <br />
                            <br />
                        </h6>
                        <h6 class="text-warning">
                            Predulive Innovations Pvt. Ltd.
                        </h6>
                        <p>
                            PLOT NO. 3B, KAPEESH VIHAR COLONY UATTARDHONA, LUCKNOW, UTTAR PRADESH,INDIA, 226028

                            <br />
                            +91 9918443373
                            <br />
                            +91 6306104928
                        </p>
                    </div>
                    <hr class="w-100 clearfix d-md-none" />
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 class="text-warning text-uppercase mb-4 font-weight-bold">
                            SERVICES
                        </h6>
                        <p>
                            <a class="text-white pe-auto" role="button" href="./precision.html">
                                PRECISION AGRICULTURE
                            </a>
                        </p>
                        <p>
                            <a class="text-white pe-auto" role="button" href="./inspection.html">
                                INFRASTRUCTURE INSPECTION
                            </a>
                        </p>
                        <p>
                            <a class="text-white pe-auto" role="button" href="./mapping.html">
                                MAPPING & SURVEY
                            </a>
                        </p>
                        <p>
                            <a class="text-white pe-auto" role="button" href="./surveillance.html">
                                SURVEILLANCE & MONITORING
                            </a>
                        </p>
                        <p>
                            <a class="text-white pe-auto" role="button" href="./events.html">
                                DRONE PILOT WORKSHOP
                            </a>
                        </p>
                    </div>
                    <hr class="w-100 clearfix d-md-none" />
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 class="text-uppercase text-warning mb-4 font-weight-bold">
                            COMPANY
                        </h6>
                        <p>
                            <a class="text-white pe-auto" role="button" href="./index.html">
                                HOME
                            </a>
                        </p>
                        <!-- <p>
        <a class="text-white pe-auto " role="button">
          PRODUCT
        </a>
      </p> -->
                        <p>
                            <a class="text-white pe-auto" role="button" href="./career.html">
                                CAREER
                            </a>
                        </p>
                        <p>
                            <a class="text-white pe-auto" role="button" href="./contact.html">
                                PARTNERSHIP
                            </a>
                        </p>
                        <p>
                            <a class="text-white pe-auto" role="button" href="./blog.html">
                                BLOGS
                            </a>
                        </p>
                        <!-- <p>
        <a class="text-white pe-auto " role="button">
          GALLERY
        </a>
      </p> -->
                    </div>
                    <hr class="w-100 clearfix d-md-none" />
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-warning text-uppercase mb-4 font-weight-bold">
                            TERMS & CONDITIONS
                        </h6>
                        <p>
                            <a class="text-white" href="./termsofuse.html">TERMS OF USE</a>
                        </p>
                        <p>
                           <a href="./privacypolicy.html" class="text-white"> PRIVACY POLICY</a>
                        </p>
                    </div>
                </div>
            </section>
            <hr class="my-3" />
            <section class="p-3 pt-0">
                <div class="row d-flex align-items-center">
                    <div class="col-md-7 col-lg-8 text-center text-md-start">
                        <div class="p-3">
                            Copyright © 2023 All rights reserved:
                            <a class="text-white" href="https://mdbootstrap.com/">
                                Predulive Innovations Pvt. Ltd.
                            </a>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                        <!-- Facebook -->
                        <a href="https://www.facebook.com/profile.php?id=100087626822031" target="_blank" class="btn btn-outline-light btn-floating m-1" class="text-white" role="button">
                            <img width="32px" src="https://img.icons8.com/?size=512&id=uLWV5A9vXIPu&format=png" alt="" />
                        </a>
                        <!-- Twitter -->
                        <a href="https://www.twitter.com/predulive" target="_blank" class="btn btn-outline-light btn-floating m-1" class="text-white" role="button">
                            <img width="32px" src="https://img.icons8.com/?size=512&id=5MQ0gPAYYx7a&format=png" alt="" />
                        </a>
                        <!-- Instagram -->
                        <a target="_blank" href="https://www.instagram.com/predulivelabs" class="btn btn-outline-light btn-floating m-1" class="text-white" role="button">
                            <img width="32px" src="https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png" alt="" />
                        </a>
                        <!-- youtube -->
                        <a target="_blank" href="https://www.youtube.com/@predulivelabs1524" class="btn btn-outline-light btn-floating m-1" class="text-white" role="button">
                            <img width="32px" src="https://img.icons8.com/?size=512&id=qLVB1tIe9Ts9&format=png" alt="" />
                        </a>
                        <!-- linkedin -->
                        <a target="_blank" href="https://www.linkedin.com/company/predulive-labs/" class="btn btn-outline-light btn-floating m-1" class="text-white" role="button">
                            <img width="32px" src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png" alt="" />
                        </a>
                    </div>
                    <!-- Grid column -->
                </div>
            </section>
            <!-- Section: Copyright -->
        </div>
        <!-- Grid container -->
    </footer>
    <!-- Footer -->
</main>
<!-- End of .container -->
    `;
    document.getElementById('footer').innerHTML = retFooter;
}
returnNav();
returnFooter();

const redirectContact=()=>{
    window.location.href = `../contact.html`;
}
// CHAT APP //
const Replies={
    contact:` Predulive Innovations Pvt. Ltd.
    PLOT NO. 3B, KAPEESH VIHAR COLONY UATTARDHONA, LUCKNOW, UTTAR PRADESH,INDIA, 226028 <br>
    +91 9918443373 <br>
    +91 6306104928 <br/>
    However you can get in touch with us on our contact page <br>
    <a class='mt-2' href="https://www.predulivelabs.in/contact.html">Get in Touch</a>`,
    hello:`Hello, how may I help you?`,
    event:`Drone <b>Era</b> is Asia's biggest drone event by Predulive Labs. <br>
    The event will be held from July 3 - July 8, 2023 <br/>
    <a href='https://www.predulivelabs.in/events.html'>click to know more</a> <br/>
    Location: Goel Institue of Technology, and management,Lucknow U.P<br>
    <a class='mt-1' href="https://docs.google.com/forms/d/e/1FAIpQLSdTragUnJY-FclnKomFAbfsXH9-iI6IWjYEwDHklnoVdWY8RQ/viewform">Click To Join Event</a>`,
    about:` <p>Our vision at Predulive Labs is to revolutionize the world of drone technology and transform the way people interact with the environment around them.</p>
    <br>
    <a href='../about.html'>Click Here To know About Us</a>`,
    out:`Chatbot is under development.
    Please message something short and relative.
    ref: phone,drone era,etc.`
}
function chat() {
    document.getElementById('chat-screen').hidden = false;
}

function closeChat() {
    document.getElementById('chat-screen').hidden = true;
}

function send() {
    let userMessage = document.getElementById('user-msg').value;
    const processMessage=userMessage.toLowerCase();
    document.getElementById('msg-screen').innerText = userMessage;
    if (processMessage == 'hi' || processMessage=='hello') {
        document.getElementById('reply-screen').hidden = false
        document.getElementById('reply-screen').innerText = Replies.hello
    } else if (processMessage == 'contact' || processMessage == 'phone'|| processMessage == 'call') {
        function contactReply() {
            document.getElementById('reply-screen').hidden = false;
            document.getElementById('reply-screen').innerHTML = Replies.contact;
     }
        contactReply();
    } 
    
    else if (processMessage=='drone era' || processMessage=='era' || processMessage=='event'){
        document.getElementById('reply-screen').hidden = false;
            document.getElementById('reply-screen').innerHTML = Replies.event;
    } else if(processMessage=='about us'||processMessage=='about'||processMessage=='us'){
        const aboutReply=`
       
        `;
        document.getElementById('reply-screen').hidden = false;
            document.getElementById('reply-screen').innerHTML = Replies.about;
    }
     else{
        let outerReply=`
        
        `;
        document.getElementById('reply-screen').hidden = false;
            document.getElementById('reply-screen').innerHTML = Replies.out;
    }
    document.getElementById('user-msg').value = null;
}

function clearChat() {
    document.getElementById('msg-screen').innerText = null;
    document.getElementById('user-msg').value = null;
    document.getElementById('reply-screen').innerText = "";
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        send();
    }
})