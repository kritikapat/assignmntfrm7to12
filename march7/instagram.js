

    function change(div_id) {
        var div1 = document.getElementById('home');
        var div2 = document.getElementById('search');
        var div3 = document.getElementById('reels');
        var div4 = document.getElementById('not');
        var div5 = document.getElementById('profile');

        if(div_id == "01") {
            div1.style.display = "initial";
            div2.style.display = "none";
            div3.style.display = "none";
            div4.style.display = "none";
            div5.style.display = "none";
        } else if(div_id == "02") {
            div1.style.display = "none";
            div2.style.display = "initial";
            div3.style.display = "none";
            div4.style.display = "none";
            div5.style.display = "none";
        } else if(div_id == "03"){
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "initial";
            div4.style.display = "none";
            div5.style.display = "none";
        }
        else if(div_id == "04"){
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "none";
            div4.style.display = "initial";
            div5.style.display = "none";
        }
        else{
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "none";
            div4.style.display = "none";
            div5.style.display = "initial";
        }
    }
