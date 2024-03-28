const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset /*comment*/
      if (newIndex < 0) newIndex = slides.children.length - 1 /*this line if you hit prev arrow on first pictuer it will loop to the last picture*/
      if (newIndex >= slides.children.length) newIndex = 0 /*if you hit next arrow on last picture it will go back to first picture*/

      slides.children[newIndex].dataset.active = true /*makes the new picture into the active slide allowing it to be shown*/
      delete activeSlide.dataset.active /*old picture the active slide is deleted off it allowing the next image to be the active one*/
  })
})