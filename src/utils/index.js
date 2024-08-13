

// save
export const getBlogs =()=>{
    let blogs = []
    const stordBlogs = localStorage.getItem('blogs')
    if(stordBlogs){
        blogs = JSON.parse(stordBlogs)
    }
}
// save
export const saveBlog = blog => {
    let blogs = getBlogs()
    const isExist = blogs.find(b => b.id === blog.id)
    if(isExist){
        return alert('alday bookmarked');
        
    }
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    alert('blog bookmar succcess')
}
// delete
export const deleteBlog = id => {
    let blogs = getBlogs()
    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem('blogs',JSON.stringify(remaining))
     alert('blog remove from bookmarks')
}