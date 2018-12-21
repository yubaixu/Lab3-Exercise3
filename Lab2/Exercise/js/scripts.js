window.onload=function(){
    const hello=document.getElementById("hello");

    function greetings(){
        console.log("Hello World! You doing fine?!");
        this.innerHTML="Don't click me again! <br> I am ok.";
    }
    
    hello.addEventListener('click',greetings,false);
}
