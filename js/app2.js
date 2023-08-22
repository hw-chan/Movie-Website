const icon = document.querySelectorAll(".favourite i")
const notification = document.querySelector(".notification")
const notificationContent = document.querySelector(".notification-content")

function addClick() {
  icon.forEach((item) => item.addEventListener('click', shake))
  icon.forEach((item) => item.addEventListener('click', notificationPop))
}

function shake() {
  this.classList.add('bx-tada')

  setTimeout(() => {
    this.classList.remove('bx-tada')
    this.classList.toggle('bx-heart')
    this.classList.toggle('bxs-heart')
  }, 1000)
}

function notificationPop() {
  let movieName = getMovieName(this)

  if (this.classList.contains("bx-heart")) {
    notification.classList.toggle("show")
    notificationContent.textContent = `${movieName} is added to Favorites!`
    setTimeout(() => {
      notification.classList.toggle("show")
    }, 3000)
  } else {
    notification.classList.toggle("show")
    notificationContent.textContent = `${movieName} is removed from Favorites!`
    setTimeout(() => {
      notification.classList.toggle("show")
    }, 3000)
  }
}

function getMovieName(currentIcon) {
  const topPicksTitle = currentIcon.parentNode.previousElementSibling
  const genreTitle = currentIcon.parentNode.parentNode.previousElementSibling

  if (genreTitle.classList.contains("genre-item-title")) {
    return genreTitle.innerHTML
  }

  if (topPicksTitle.classList.contains("movie-list-item-title")) {
    return topPicksTitle.innerHTML
  }

}

addClick()