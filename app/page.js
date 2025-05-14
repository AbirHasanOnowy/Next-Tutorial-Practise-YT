"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  };

  return (
    <section>
      <h1>useRouter</h1>
      <button
        className="border px-4 py-2 rounded-md bg-blue-500 text-white"
        onClick={() => {
          router.push("/users");
        }}
      >
        Go to users page
      </button>
      <br />
      <button
        className="border px-4 py-2 rounded-md bg-blue-500 text-white"
        onClick={() => {
          navigate("/users/about");
        }}
      >
        Go to about page
      </button>
    </section>
  );
};

export default Home;
