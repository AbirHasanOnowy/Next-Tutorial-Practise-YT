"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import sea_beach from "@/public/sea_beach.jpg";
import { Borel } from "next/font/google";

const borel = Borel({
  variable: "--font-borel",
  subsets: ["latin"],
  weight: ["400"],
});

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
      <br />
      <p className="text-center">
        <span>This is Borel font</span>
        <br />
        <span className={borel.className}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quisquam, voluptatibus, quisquam, voluptatibus,
          quisquam, voluptatibus, quisquam, voluptatibus, quisquam,
          voluptatibus, quisquam, voluptatibus, quisquam, voluptatibus,
          quisquam, voluptatibus, quisquam, voluptatibus.
        </span>
      </p>
      <Image
        src={sea_beach}
        alt="sea beach"
        width={800}
        height={600}
        className="rotate-90 rounded-lg"
      />
      <Image
        src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="copied image"
        width={1000}
        height={600}
        className="rounded-lg"
      />
    </section>
  );
};

export default Home;
