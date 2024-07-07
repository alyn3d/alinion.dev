function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Switch profile image
  const profileImg = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    profileImg.setAttribute("src", "./assets/avatar-light.png")
    profileImg.setAttribute(
      "alt",
      "avatar"
    )
  } else {
    profileImg.setAttribute("src", "./assets/avatar.png")
    profileImg.setAttribute(
      "alt",
      "avatar"
    )
  }
}
