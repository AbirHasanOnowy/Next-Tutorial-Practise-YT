// "use client";
// import { useState, useEffect } from "react";

// const Data = () => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/posts");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setProduct(data.posts);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <ul>
//       {product.map((p) => (
//         <li
//           key={p.id}
//           className="border py-2 mx-10 my-4 rounded-md bg-green-50"
//         >
//           <h1>{p.title}</h1>
//           {/* <p>{p.body}</p> */}
//         </li>
//       ))}
//     </ul>
//   );
// };

// server component
async function fetchData() {
  const res = await fetch("https://dummyjson.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.posts;
}

const Data = async () => {
  const posts = await fetchData();

  return (
    <ul>
      {posts.map((p) => (
        <li
          key={p.id}
          className="border py-2 mx-10 my-4 rounded-md bg-blue-100"
        >
          <h1>{p.title}</h1>
          {/* <p>{p.body}</p> */}
        </li>
      ))}
    </ul>
  );
};

export default Data;
