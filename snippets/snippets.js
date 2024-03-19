
document.addEventListener('DOMContentLoaded', () => {
    //get the query param
    const params =  new URLSearchParams(window.location.search);
    const selectedBlogClass = params.get('blog');

    activateBlog(selectedBlogClass);
});

function activateBlog(selectedBlogClass) {
    document.querySelectorAll('.blog-section').forEach(section=>{
        section.style.display='none';
    });
    const selectedBlog = document.querySelector(`.${selectedBlogClass}`);
    if (selectedBlog){
        selectedBlog.style.display = 'block';
    }
    else{
        console.error('Could not find a blog');
    }
}