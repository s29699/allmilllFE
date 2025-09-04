import React from 'react'
import { useNavigate } from 'react-router-dom'


// function PostCard({id, slug, title , description}) {
  
//   const navigate = useNavigate();
//   const openPost = async () => {
//     console.log("Openpost in Postcard, slug: ",slug);
//     navigate(`/blog/${slug}`);
//   }

//   return (
//     <div 
//       className='bg-blue-200 min-h-48 border-2 m-12 flex flex-col justify-between'
//       onClick={openPost}
//     >
//       <h3>{title}</h3>
//       <p>19/01/2024</p>
//       <p>{description}</p>
//     </div>
//   )



// }


function PostCard({ id, slug, title, description }) {
  const navigate = useNavigate();

  const openPost = () => {
    console.log("Openpost in PostCard, slug: ", slug);
    navigate(`/blog/${slug}`);
  };

  return (
    <div
      onClick={openPost}
      className="w-full bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer p-6 flex flex-col gap-3 hover:-translate-y-1"
    >
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed line-clamp-2">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-2">
        <p className="text-gray-400 text-sm italic">19 Jan 2024</p>
        <button className="px-5 py-2 text-sm font-semibold rounded-lg bg-blue-500 text-white shadow hover:bg-blue-600 transition-colors duration-300">
          Read More →
        </button>
      </div>
    </div>
  );
}




export default PostCard