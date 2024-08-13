
import { useLoaderData, useNavigation } from "react-router";
import  { useState, useEffect } from 'react';
import { convert } from 'html-to-text';



const Content = () => {
        
    const blog = useLoaderData();
    const {id,cover_image,title,description,published_at,tags,body_html} = blog;

    
    // convert html formet data into text start
    const [plainText, setPlainText] = useState('');
    useEffect(() => {
      const text = convert(body_html, {
        wordwrap: 130, // Customize options as needed
      });
      setPlainText(text);
    }, [body_html]);
    // convert html formet data into text end

      
   
    console.log(blog)
    return (
        <div>
            
            <div className="group p-2  focus:no-underline  border-2  "  rel="noopener noreferrer" href="#">
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
                <p className="px-2">
                    {plainText}
                    
                </p>
			</div>
        </div>
    );
};

export default Content;