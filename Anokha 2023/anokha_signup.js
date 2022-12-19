function myFunc() {
    var name = document.anokha.name.value;
    var mail = document.anokha.email.value;
    var gen = document.anokha.gender.value;
    var dob = document.anokha.dob.value;
    var year = document.anokha.year.value;
    var pass = document.anokha.pswd.value;
    var cpass = document.anokha.pass.value;
    var num = document.anokha.num.value;
    var chk = document.anokha.chk.value;

    var letters = /^[A-Za-z ]+$/;
    var tele = /^[0-9]+$/;

    if (name.length < 3 || name.length > 20) {
        alert("username should contain 4-20 letters");
        name.focus();
        return false;
    }

    else if (gen == '' || gen == null) {
        alert('Gender is not filled');
        return false;
    }

    else if (pass.length < 8 || pass.length > 24) {
        alert('password should contain 8-24 characters');
        return false;
    }

    else if (year == 'empty') {
        alert('please select the studying year');
        return false;
    }

    else if (pass != cpass) {
        alert('Enter correct confirm password');
        return false;
    }

    else if(num.length < 5 || num.length > 10){
        alert('Enter valid ph no.');
        return false;
    }
    else {
        if(name.match(letters)) {
            if(num.match(tele)) {
                alert('success');
                return true;
            }
            else{
                alert('ph no. invalid');
                return false;
            }
        }
        else{
            alert('Enter valid name');
            return false;
        }
    }
    
}
/*
else {
    alert("Successful submission");
    window.location.replace('file:///Users/macbook/Desktop/A/programs/html/anokha_home.html');
    return true;
}
*/
