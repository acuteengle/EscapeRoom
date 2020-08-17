document.getElementById("start").addEventListener("click", () => {
    document.getElementById("start_container").style.position = "relative"
    document.getElementById("start").style.display = "none";
    document.getElementById("section1").style.display = "block";
});

document.getElementById("welcome").addEventListener("click", () => {
    document.getElementById("welcome").style.color = "lightcoral";
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
            document.querySelectorAll(".question2").forEach((e) => {
                e.style.display = "none";
            });
            document.getElementById("question3").style.display = "block";
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
    document.getElementById("question4").style.display = "block";
});

document.getElementById("explore_button").addEventListener("click", () => {
    document.querySelectorAll(".thanks").forEach((e) => {
        e.style.display = "none";
    });
    document.getElementById("question5").style.display = "block";
    setTimeout(() => {
        document.getElementById("searching").innerHTML = "After much searching...";
        document.querySelectorAll(".lock").forEach((e) => {
            e.style.display = "block";
        });
    }, 3000);
});

let dragged = null;

document.getElementById("key_image").addEventListener("dragstart", (e) => {
    dragged = document.getElementById("key_image");
    setTimeout(() => {
        dragged.style.display = 'none';
    });
});

document.getElementById("key_image").addEventListener('dragend', () => {
    setTimeout(() => {
        dragged.style.display = 'block';
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
    console.log(dragged);
    if (dragged.id == "key_image") {
        document.getElementById("searching").style.display = "none";
        document.getElementById("perfect").style.display = "none";
        document.getElementById("question6").style.display = "block";
    }
});

document.getElementById("proceed").addEventListener("click", () => {
    document.getElementById("proceed").style.display = "none";
    document.getElementById("question7").style.display = "block";

});

document.getElementById("candle").addEventListener("click", () => {
    let f51 = document.getElementById("f51").checked;
    let f31 = document.getElementById("f31").checked;
    let f60 = document.getElementById("f60").checked;
    let f45 = document.getElementById("f45").checked;
    let f42 = document.getElementById("f42").checked;


});
