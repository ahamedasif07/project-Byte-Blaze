import { useState } from "react";
import { Outlet, useLoaderData } from "react-router";
import { Link } from "react-router-dom";


const Blog = () => {
    const [tabIndex,setTabIndex]=useState(0)
    const blogDetais = useLoaderData()
    console.log(blogDetais);
    const {comments_count, reading_time_minutes,title,
        tags,public_reactions_count}=blogDetais
   
    return (
        <div className="pt-20  px-10">
            <div className="max-w-3xl  px-6 py-16 mx-auto space-y-12">
	<article className="space-y-8 bg-gray-800 dark:bg-gray-100  dark:text-gray-900">
		<div className="space-y-6">
			<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400 dark:text-gray-600">
				<div className="md:flex gap-4 items-center">
                <p className="text-sm font-bold">{reading_time_minutes} min read</p>
				<p className="font-bold flex-shrink-0 mt-3 text-sm md:mt-0">{new Date(blogDetais.published_at).toLocaleDateString()}</p>
                </div>
			</div>


            {/* tav start */}

            <div className="flex ml-2 items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start
             flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<Link onClick={()=>setTabIndex(0)} 
    to=''
    rel="noopener noreferrer" href="#" className={`"flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0':'border-b'} dark:border-gray-600 dark:text-gray-600"`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Content</span>
	</Link>
	<Link onClick={()=>setTabIndex(1)} 
    to='author'
    rel="noopener noreferrer" href="#" className={`"flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 1 ? 'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900"`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Author</span>
	</Link>

</div>

            {/* tav end */}


		</div>
		<div className="text-gray-100 w-full dark:text-gray-800">
			<Outlet></Outlet>
		</div>
	</article>
	<div>
		<div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
        
			
		</div>
	
	</div>
</div>
        
        </div>
    );
};

export default Blog;