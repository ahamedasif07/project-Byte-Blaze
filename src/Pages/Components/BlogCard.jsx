import { Link } from 'react-router-dom';
import placeholderImg from'../../assets/404.jpg'

const BlogCard = ({blog}) => {

    const {id,cover_image,title,description,published_at} = blog;
    // console.log(blog)
    
    return (
      

      <div className="hover:scale-105 transition border-2 border-gray-500 rounded-md hover:border-red-600">
        <Link to={`/blog/${id}`} className="group  focus:no-underline dark:bg-slate-400 border-2 hover:scale-110 "  rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImg} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs text-gray-400 dark:text-gray-600">{new Date(blog.published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
		</div>
            
        
    );
};

export default BlogCard;