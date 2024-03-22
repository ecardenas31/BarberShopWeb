document.addEventListener("DOMContentLoaded", () => {
  //get the query param
  const params = new URLSearchParams(window.location.search);
  const selectedBlogClass = params.get("blog");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");

  activateBlog(selectedBlogClass);

  const blogSections = Array.from(document.querySelectorAll(".blog-section"));
  setNavigationListeners(prevButton, nextButton, blogSections);
});

function setNavigationListeners(prevButton, nextButton, blogSections) {
  prevButton.addEventListener("click", () => navigateBlog("prev"));
  nextButton.addEventListener("click", () => navigateBlog("next"));

  let currentIndex = Array.from(blogSections).indexOf(
    document.querySelector(".blog-section:not([hidden])")
  );

  function navigateBlog(direction) {
    let nextIndex;
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % blogSections.length;
    } else if (direction === "prev") {
      nextIndex =
        (currentIndex - 1 + blogSections.length) % blogSections.length;
    }
    const getNextBlogName = (index) =>
      blogSections[(index + 1) % blogSections.length].querySelector("h1")
        .innerText;

    const getPrevBlogName = (index) =>
      blogSections[index - 1].querySelector("h1").innerText;

    const activateNextBlog = (blogClass) => {
      activateBlog(blogClass);
      updateButtonTexts();
    };

    const updateButtonTexts = () => {
      prevButton.innerText = "< " + getPrevBlogName(currentIndex + 1);
      nextButton.innerText = getNextBlogName(currentIndex + 1) + " >";
    };

    const getNextIndex = () => (currentIndex + 1) % blogSections.length;
    activateNextBlog(blogSections[nextIndex].classList[1]);
    currentIndex = getNextIndex();
  }
}

function activateBlog(selectedBlogClass) {
  document.querySelectorAll(".blog-section").forEach((section) => {
    section.style.display = "none";
  });
  const selectedBlog = document.querySelector(`.${selectedBlogClass}`);
  if (selectedBlog) {
    selectedBlog.style.display = "block";
    activeBlog = selectedBlog;
  } else {
    console.error("Could not find a blog");
  }
}
