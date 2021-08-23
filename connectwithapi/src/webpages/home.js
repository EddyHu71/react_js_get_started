import React, {useState, useEffect } from 'react';
import {Link } from 'react-router-dom';

const Home = () => {
    const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [users, setUsers] = useState([]);
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/")
                .then(res => res.json())
                .then(
                    (data) => {
                        setIsLoaded(true);
                        setUsers(data);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
          }, [])
//  key={user.id}
{/* {user.name}  */}
{/* {`user/${user.id}`} */}
{/* <Link to={`user/${user.id}`}>{user.name}</Link> */}

    if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ol>
                    {users.map(user => (

                    <li>

                        <Link to={`user/${user.id}`}>{user.name}</Link>
                    </li>
                    ))}
                </ol>
            );
            // return (
            //     <ul>
            //         {users.map(user => (
            //         <li>
            //             <Link to={`user/${user.id}`}>{user.name}</Link>
            //         </li>
            //         ))}
            //     </ul>
            // );
        }
    }
// const Home = () => {

//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users/")
//         .then(res => res.json())
//         .then(
//             (data) => {
//                 setIsLoaded(true);
//                 setUsers(data);
//             },
//             (error) => {
//                 setIsLoaded(true);
//                 setError(error);
//             }
//         )

//         if (error) {
//             return <div>Error : {error.message}</div>;
//         } else if (!isLoaded) {
//             return <div>Loading...</div>;
//         } else {
//             return (
//                 <ul>
//                     {users.map(user => (
//                         <li key={user.id}>
//                             {user.name}
//                         </li>
//                     ))}
//                 </ul>
//             );
//         }
//         // return () => {
//         //     cleanup
//         // }
//     }, [])
//     // return(
//     //     <div>
//     //         <h1>User Lists</h1>
//     //     </div>
//     // );
// }

export default Home;