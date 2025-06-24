import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/config';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full max-w-[300px] h-[400px] bg-gray-100 rounded-xl p-4 flex flex-col items-center shadow-md">
                <div className="w-full h-[280px] mb-4 overflow-hidden rounded-xl">
                    <img
                    src={appwriteService.getFileView(featuredImage)}
                    alt={title}
                    className="rounded-xl w-full h-64 object-cover"
                    />
                </div>
                <h2 className="text-lg font-bold text-center">{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;


// import { Link } from 'react-router-dom';
// import appwriteService from '../appwrite/config'

// function PostCard({ $id, title, featuredImage }) {
//     return (
//         <Link to={`/post/${$id}`}>
//             <div className='w-full bg-gray-100 rounded-xl p-4'>
//                 <div className='w-full max-w-[300px] h-[400px] bg-gray-100 rounded-xl p-4 flex flex-col items-center shadow-md'>
//                     <img src={appwriteService.getFileView(featuredImage)} alt={title}
//                         className='rounded-xl w-full object-cover h-64'
//                     />
//                 </div>
                
//                 <h2 className='text-lg font-bold'>{title}</h2>
//             </div>
//         </Link>
//     );
// }

// export default PostCard;