import placeholderImg from'../../assets/404.jpg'

const BlogCard = ({blog}) => {

    const {id,cover_image,title,description,published_at} = blog;
    console.log(blog)
    
    return (
      

      <div className="">
        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImg} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs text-gray-400 dark:text-gray-600">January 21, 2021</span>
					<p>{description}</p>
				</div>
			</a>
		</div>
            
        
    );
};

export default BlogCard;