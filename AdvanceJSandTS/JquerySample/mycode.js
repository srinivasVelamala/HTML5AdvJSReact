function login() {
  if ($("#username").val() == "admin" && $("#password").val() == "admin") {
    alert("You are a valid user");
  } else {
    alert("You are not a valid user");
  }
}
