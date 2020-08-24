document.getElementById("start").addEventListener("click", () => {
    document.getElementById("start_container").style.position = "relative"
    document.getElementById("start").style.display = "none";
    document.getElementById("section1").style.display = "block";
});

document.getElementById("welcome").addEventListener("click", () => {
    document.getElementById("welcome").style.color = "#D40000";
    setTimeout(() => {
        alert("Congrats on solving the first puzzle!");
        document.querySelectorAll(".remove1").forEach((e) => {
            e.style.display = "none";
        });
        document.getElementById("section2").style.display = "block";
    }, 500);
});

document.getElementById("flower_button").addEventListener("click", () => {
    let answer = document.getElementById("flower_number").value;
    if (answer == 102) {
        document.getElementById("flower_answer_text").style.color = "lightgreen";
        document.getElementById("flower_answer_text").innerHTML = "Correct!";
        setTimeout(() => {
            document.querySelectorAll(".remove2").forEach((e) => {
                e.style.display = "none";
            });
            document.getElementById("section3").style.display = "block";
            document.getElementById("flower_answer_text").innerHTML = "<span id='correct'>C</span>orrect!";
            document.getElementById("correct").style.color = "lightgreen";
            document.getElementById("flower_answer_text").style.color = "black";
        }, 1000);
    }
    else {
        document.getElementById("flower_answer_text").style.color = "red";
        document.getElementById("flower_answer_text").innerHTML = "Incorrect";
    }
});

document.getElementById("key_image").addEventListener("click", () => {
    document.getElementById("key_image").style.opacity = "1.0";
    document.querySelectorAll(".remove3").forEach((e) => {
        e.style.display = "none";
    });
    document.getElementById("section4").style.display = "block";
});

document.getElementById("explore_button").addEventListener("click", () => {
    document.querySelectorAll(".search").forEach((e) => {
        e.style.display = "none";
    });
    document.getElementById("section5").style.display = "block";
    setTimeout(() => {
        document.getElementById("searching").innerHTML = "After much searching...";
        document.querySelectorAll(".lock").forEach((e) => {
            e.style.display = "block";
        });
    }, 3000);
});

let dragged = null;
let unlocked = false;

document.getElementById("key_image").addEventListener("dragstart", (e) => {
    dragged = document.getElementById("key_image");
    setTimeout(() => {
        dragged.style.display = 'none';
    });
});

document.getElementById("key_image").addEventListener('dragend', () => {
    setTimeout(() => {
        if (unlocked) {
            dragged.style.display = 'none';
        }
        else {
            dragged.style.display = 'block';
        }
    });
});

document.getElementById("lock1").addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.getElementById("lock1").addEventListener('dragenter', (e) => {
    e.preventDefault();
});

document.getElementById("lock1").addEventListener('dragleave', (e) => {
    e.preventDefault();
});

document.getElementById("lock1").addEventListener('drop', (e) => {
    if (dragged.id == "key_image") {
        unlocked = true;
        document.getElementById("searching").style.display = "none";
        document.getElementById("lock1").style.display = "none";
        document.getElementById("section6").style.display = "block";
    }
});

document.getElementById("proceed").addEventListener("click", () => {
    document.getElementById("proceed").style.display = "none";
    document.getElementById("section7").style.display = "block";
});

document.getElementById("candle").addEventListener("click", () => {
    let f51 = document.getElementById("f51").checked;
    let f36 = document.getElementById("f36").checked;
    let f45 = document.getElementById("f45").checked;
    let f42 = document.getElementById("f42").checked;

    let age = document.getElementById("age").value;
    let conversation = document.getElementById("conversation").value;
    let birthdate = document.getElementById("birthdate").value;

    let yearsAgo = document.getElementById("yearsAgo").value;

    let passed = (f51 && !f36 && !f45 && f42)
        && (age == 12)
        && (conversation == "2019-01-01" && birthdate == "1995-12-31")
        && (yearsAgo == 41)

    if (passed) {
        document.getElementById("riddle_text").style.color = "lightgreen";
        document.getElementById("riddle_text").innerHTML = "Correct!";
        setTimeout(() => {
            document.querySelectorAll(".remove7").forEach((e) => {
                e.style.display = "none";
            });
            document.getElementById("section8").style.display = "block";
        }, 2000);
    }
    else {
        document.getElementById("riddle_text").style.color = "red";
        document.getElementById("riddle_text").innerHTML = "Incorrect";
    }
});

document.getElementById("chest").addEventListener("click", () => {
    let rainbow = document.getElementById("rainbow").value;

    if (rainbow == "WlfC4n!") {
        document.getElementById("chest_text").style.color = "lightgreen";
        document.getElementById("chest_text").innerHTML = "Correct!";
        setTimeout(() => {
            document.querySelectorAll(".remove8").forEach((e) => {
                e.style.display = "none";
            });
            document.getElementById("section9").style.display = "block";
        }, 2000);
    }
    else {
        document.getElementById("chest_text").style.color = "red";
        document.getElementById("chest_text").innerHTML = "Incorrect";
    }
});

document.getElementById("play_again").addEventListener("click", () => {
    location.reload();
    return false;
});
