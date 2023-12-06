document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});

document.getElementById("btn-searchFriend").addEventListener(
  "click",
  function () {
    document.getElementById("searchFriend").hidden = false;
  },
);

var like = document.getElementsByClassName("like");
for (var i = 0; i < like.length; i++) {
  like[i].onclick = function (evt) {
    if (!evt.target.classList.contains("material-icons")) {
      if (evt.target.classList.contains("blue")) {
        evt.target.classList.remove("blue");
        evt.target.classList.remove("darken-2");
        evt.target.classList.add("pink");
      }
      else {
        evt.target.classList.remove("pink");
        evt.target.classList.add("blue");
        evt.target.classList.add("darken-2");
      }
    }
    else {
      if (evt.target.parentNode.classList.contains("blue")) {
        evt.target.parentNode.classList.remove("blue");
        evt.target.parentNode.classList.remove("darken-2");
        evt.target.parentNode.classList.add("pink");
      }
      else {
        evt.target.parentNode.classList.remove("pink");
        evt.target.parentNode.classList.add("blue");
        evt.target.parentNode.classList.add("darken-2");
      }
    }
  }
};

document.getElementById("btn-etape").addEventListener("click", function () {
  document.getElementById("loc-etape").hidden = false;
  document.getElementById("add-etape").hidden = true;
});

function NewGroup() {
  document.getElementById("newGroup").style.visibility = 'visible';
}

function newPost() {
  document.getElementById("newPost").hidden=false;
}