let ppl = 0;
let share = 0;
let bill = 0;
function billnpeep() {
    bill = parseFloat(document.querySelectorAll(".bg-ritual")[0].value);
    ppl = parseFloat(document.querySelectorAll(".bg-ritual")[1].value);
    document.querySelector(".l-t-cont").classList.remove("err");
    if(ppl===0) {
        document.querySelector(".l-t-cont").classList.add("err");
    }
    if(ppl > 0 && bill > 0) return(finalcall());
}
function shareCount(val,ind) {
    for(let i=0;i<5;i++) {
        document.getElementsByClassName("dark-bg")[i].classList.remove("active");
    }
    document.getElementsByClassName("dark-bg")[ind].classList.add("active");
    if(ind<5) share = val;
    else {
        const button = document.querySelectorAll(".share-option")[ind];
        button.style.backgroundColor = "rgba(124,213,217, 1)";
        share = parseFloat(button.value)/100;
        console.log(share);
    }
    billnpeep();
}
function finalcall() {
    const tip_amt = ((bill*share)/ppl).toFixed(2);
    const total = ((bill + share*bill)/ppl).toFixed(2);
    console.log(tip_amt, total);
    document.querySelectorAll(".op-field")[0].innerHTML = `$${tip_amt}`;
    document.querySelectorAll(".op-field")[1].innerHTML = `$${total}`;
}