import React from 'react'

// function Card(props) {
//     console.log(props.userName)
//     return (
//         <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
//             <img
//                 className="w-24 h-24 rounded-full mx-auto"
//                 src="https://images.pexels.com/photos/9928321/pexels-photo-9928321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 alt=""
//                 width="384"
//                 height="512"
//             />
//             <div className="pt-6 space-y-4">
//                 <blockquote>
//                     <p className="text-lg font-medium">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Dignissimos repellat excepturi pariatur ut totam maiores
//                         inventore natus odit quas. Suscipit placeat cum
//                         inventore iusto sint deleniti, at tenetur ratione unde!
//                     </p>
//                 </blockquote>
//                 <figcaption className="font-medium">
//                     <div className="text-sky-500 dark:text-sky-400">
//                         {props.userName}
//                     </div>
//                     <div>Staff Engineer, Algolia</div>
//                 </figcaption>
//             </div>
//         </figure>
//     )
// }

function Card({userName = "not shri", post="not assigned"}) {
    console.log(userName)
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img
                className="w-24 h-24 rounded-full mx-auto"
                src="https://images.pexels.com/photos/9928321/pexels-photo-9928321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width="384"
                height="512"
            />
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos repellat excepturi pariatur ut totam maiores
                        inventore natus odit quas. Suscipit placeat cum
                        inventore iusto sint deleniti, at tenetur ratione unde!
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {/* {userName || 'not shri'} */}
                        {userName}
                    </div>
                    <div>{post}</div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Card
