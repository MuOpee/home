window.addEventListener('load', function() {
    var footer = document.getElementById('myFooter');
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var i = 0;
    setInterval(function() {
        footer.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 1000);
});
var nav = document.getElementById("navBarMob")
        function navCome() {
            if (nav.style.left == `-105%`) {
                nav.style.left = `0`
            }
            else {

                nav.style.left = `-105%`
            }
        }
