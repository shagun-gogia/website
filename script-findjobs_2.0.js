console.log("Time to do scripting");


let y1 = `<div id="container-content-1" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Pharmacist</h1>
    <span class="content1">PGIMER</span><br>
    <span class="content1">Chandigarh</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
</div>
</div>`;
let y2 = `<div id="container-content-2" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Software Analyst</h1>
    <span class="content1">Google</span><br>
    <span class="content1">Mumbai</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`;

let y3 = `<div id="container-content-3" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Physics Teacher</h1>
    <span class="content1">Sacred Heart School</span><br>
    <span class="content1">Chandigarh</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`;

let y4 = `<div id="container-content-4" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Human Resource Executive</h1>
    <span class="content1">Accenture</span><br>
    <span class="content1">Bengaluru</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`;

let y5 = `<div id="container-content-5" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Business Analyst</h1>
    <span class="content1">World Health Organisation</span><br>
    <span class="content1">New Delhi</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`

let y6 = `<div id="container-content-6" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Graphic Designer</h1>
    <span class="content1">Bluesteak Media</span><br>
    <span class="content1">Kolkata</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`;

let y7 = `<div id="container-content-7" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Business Manager</h1>
    <span class="content1">Microsoft</span><br>
    <span class="content1">Hyderabad</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`;

let y8 = `<div id="container-content-8" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Resource Analyst</h1>
    <span class="content1">World Health Organisation</span><br>
    <span class="content1">New Delhi</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`

let y9 = `<div id="container-content-9" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Process Analyst</h1>
    <span class="content1">Genpact</span><br>
    <span class="content1">New Delhi</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`

let y10 = `<div id="container-content-10" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Executive - learning Support</h1>
    <span class="content1">Indigo Airlines</span><br>
    <span class="content1">Bengaluru</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`;

let y11 = `<div id="container-content-11" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Associate Professor</h1>
    <span class="content1">Chandigarh University</span><br>
    <span class="content1">Chandigarh</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`;

let y12 = `<div id="container-content-12" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Talent Research Executive</h1>
    <span class="content1">Mckinsey and Co.</span><br>
    <span class="content1">Gurugram,Haryana</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`

let y13 = `<div id="container-content-13" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">PR Assistant</h1>
    <span class="content1">Kering Group</span><br>
    <span class="content1">Mumbai</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`;

let y14 = `<div id="container-content-14" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Content Writer</h1>
    <span class="content1">Siemens</span><br>
    <span class="content1">New Delhi</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now(this.id)" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`;

let y15 = `<div id="container-content-15" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Learning Coordinator</h1>
    <span class="content1">ZM Finance</span><br>
    <span class="content1">Bengaluru</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now()" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`

let y16 = `<div id="container-content-16" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Senior Associate Merger</h1>
    <span class="content1">TCS</span><br>
    <span class="content1">Pune</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now()" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`

let y17 = `<div id="container-content-17" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Campus Hiring</h1>
    <span class="content1">ITC Infotech</span><br>
    <span class="content1">Kolkata</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now()" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`

let y18 = `<div id="container-content-18" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Project Manager</h1>
    <span class="content1">HDFC Bank</span><br>
    <span class="content1">Mohali,Punjab</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now()" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`

let y19 = `<div id="container-content-19" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Project Associate</h1>
    <span class="content1">Cognizat</span><br>
    <span class="content1">New Delhi</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now()" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`

let y20 = `<div id="container-content-20" class="container-content">
<div id="fixed_top">
    <i class="fas fa-times" id="close_btn" onclick="close_btn()"></i>
    <h1 style="padding-left: 5px;">Engagement Manager</h1>
    <span class="content1">Google</span><br>
    <span class="content1">Gurugram</span></br>
    <input type="button" id="Apply-now_btn" onclick="apply_now()" value="Apply now">
</div>
<div id="info_part">
    
</div>
</div>`



// Button working
let x1 = document.getElementById("div1");
x1.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y1;
})

let x2 = document.getElementById("div2");
x2.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y2;
})

let x3 = document.getElementById("div3");
x3.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y3;
})

let x4 = document.getElementById("div4");
x4.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y4;
})

let x5 = document.getElementById("div5");
x5.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y5;
})

let x6 = document.getElementById("div6");
x6.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y6;
})

let x7 = document.getElementById("div7");
x7.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y7;
})

let x8 = document.getElementById("div8");
x8.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y8;
})

let x9 = document.getElementById("div9");
x9.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y9;
})

let x10 = document.getElementById("div10");
x10.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y10;
})

let x11 = document.getElementById("div11");
x11.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y11;
})

let x12 = document.getElementById("div12");
x12.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y12;
})

let x13 = document.getElementById("div13");
x13.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y13;
})

let x14 = document.getElementById("div14");
x14.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y14;
})

let x15 = document.getElementById("div15");
x15.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y15;
})

let x16 = document.getElementById("div16");
x16.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y16;
})

let x17 = document.getElementById("div17");
x17.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y17;
})

let x18 = document.getElementById("div18");
x18.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y18;
})

let x19 = document.getElementById("div19");
x19.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y19;
})

let x20 = document.getElementById("div20");
x20.addEventListener("click", function display() {
    document.getElementById("aside-section").innerHTML = y20;
})


// Search Button

let tosearch = document.getElementsByClassName("all-divs");
let test11 = document.getElementById("find-job_btn");

test11.addEventListener("click", function () {
    Array.from(tosearch).forEach(function (divs_search1) {
        let first = divs_search1.firstElementChild.firstElementChild.textContent.toLowerCase();
        let first2 = divs_search1.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent.toLowerCase();
        if (document.getElementById("search-bar1").value.toLowerCase() == "" && document.getElementById("search-bar2").value.toLowerCase() == "") {
            window.location.reload();
        } else if (document.getElementById("search-bar1").value.toLowerCase().includes(first) || document.getElementById("search-bar2").value.toLowerCase().includes(first2)) {
            divs_search1.style.display = "block";
        } else {
            divs_search1.style.display = "none";
        }
    })
});





let display_pop = document.getElementById("back-container");

function apply_now() {
    if(sessionStorage.name == undefined){
        alert("Please login or create your account");
    }else{
        display_pop.style.display = "block";
    }
}

function close_btn(){
    document.getElementById("aside-section").innerHTML = "";
}

function close_btn_popup(){
    display_pop.style.display = "none"
}

let easy = document.getElementById("easy-btn");
easy.addEventListener("click", function(){
    alert("Your Application is submitted")
    window.location.reload();
})

let edit = document.getElementById("edit-btn");
edit.addEventListener("click", function(){
    document.getElementById("form-container").setAttribute("action", "profile22.html")
})