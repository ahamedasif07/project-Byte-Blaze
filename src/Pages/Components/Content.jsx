import { useLoaderData } from "react-router";


const Content = () => {
    const blog = useLoaderData();
    const {id,cover_image,title,description,published_at,tags} = blog;
    console.log(blog)
    return (
        <div>
            
            <div className="group p-2  focus:no-underline dark:bg-slate-400 border-2 hover:scale-110 "  rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImg} />
             <div className="mt-2 ">
             {
                tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 mr-2 mt-4">#{tag}</a> )
            }
             </div>
			
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs text-gray-400 dark:text-gray-600">{new Date(blog.published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</div>
        </div>
    );
};

export default Content;