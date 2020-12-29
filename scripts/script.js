/* My knowledge of jQuery is a bit rusty because I didn't understand what the front-end developer from that vendor that RI gets after EOY so I'm using the normal functions */
/* Menu bar toggle when using mobile */
function menubarResponse() {
  /* Find all the navigation options and toggle between show or hide by adding
  "mobile" class keyword */
  console.log(document.getElementById("navlist").className);
  if (document.getElementById("navlist").className == "container-fluid navbar") {
    document.getElementById("navlist").className = "container-fluid navbar mobile";
    console.log("Showing mobile options.");
  } else {
    document.getElementById("navlist").className = "container-fluid navbar";
    console.log("Removing mobile options.");
  };
};
