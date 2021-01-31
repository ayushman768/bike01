function mybtnshow() {

    var color_plt = document.getElementById('myhide');

    if (color_plt.style.display === "none") {
        color_plt.style.display = "block";


    } else {
        color_plt.style.display = "none";


    }
}

function mytab(evt, colorNamme) {
    var i, tabcontent, color_btn, df;
    df = document.querySelector('.default');
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    color_btn = document.getElementsByClassName('color_bt');
    for (i = 0; i < color_btn.length; i++) {
        color_btn[i].className = color_btn[i].className.replace(" active", " ");
    }
    document.getElementById(colorNamme).style.display = "block";
    df.style.display = "none";


    evt.currentTarget.className += " active";




}


function menu() {
    var nav;
    nav = document.querySelector('.navigation');
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none"
    }
}