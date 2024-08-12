import { Link } from "react-router-dom";



const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 ">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold">Wellcome To <span className="">ByteBlaze</span></h1>
      <p className="py-6">
       ByteBlaze is the bridge between the complex world of technology
       and curious minds eager to understand it
      </p>
      <div className="flex gap-4 justify-center">
        <Link to='/blogs'><button className="btn btn-primary">Read Blogs</button>
       </Link>
       <Link to='/bookmarks'> <button className="btn btn-primary">Bookmarks</button></Link>
       
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;