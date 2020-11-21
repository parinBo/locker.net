var label = document.getElementById("label");
var button = document.getElementById("myCheck");
button.checked =@ViewBag.setCheckbox;
if (@ViewData["canUse"]) {
    button.disabled = true;
    label.style.background = "gray";
}
button.addEventListener('click', e => {
    var pin =@ViewBag.Pin;
    if (button.checked == true) {
        console.log("on")
        var url = "http://192.168.2.64/on_off.php?on=@ViewBag.Pin"
        $.get(url);
        $.ajax({
            url: "/home/authLocker/" + @ViewBag.Boxid,
        type: 'PUT',
            data: "value=1"
    });
            }
            else {
    console.log("off  ")
    var url = "http://192.168.2.64/on_off.php?off=@ViewBag.Pin";
    $.get(url);
    $.ajax({
        url: "/home/authLocker/" + @ViewBag.Boxid,
    type: 'PUT',
        data: "value=0",
                });
            }
        })

var cancel = document.getElementById("cancel");
cancel.addEventListener('click', e => {
    var result = confirm("Are you sure?\nYou will cancel this box");
    if (result == true) {
        enter = true;
    } else {
        enter = false;
    }
    if (enter) {
        $.ajax({
            url: "/home/delete/" + @ViewBag.Boxid,
        type: 'DELETE',
            success: function (data) {
                console.log("delete success")
                window.location.href = "/home";

            }
    });
            }

        })
