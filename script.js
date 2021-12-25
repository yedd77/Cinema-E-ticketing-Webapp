var enter = document.getElementById("submit");

enter.addEventListener("click", ()=>{
    if (document.getElementById('name').value == ""){
        alert("Please insert your name");
        return false;
    }

    if(document.getElementById('mail').value == ""){
        alert("Please insert your email");
        return false;
    }

    if(document.getElementById('SeatRow').value == ""){
        alert("Please select your preferred seat row");
        return false;
    }

    if(document.getElementById('SeatNum').value == ""){
        alert("Please select your preferred seat number");
        return false;
    }

    if(document.getElementById('Movie').value == ""){
        alert("Please select your preferred Movie");
        return false;
    }
})