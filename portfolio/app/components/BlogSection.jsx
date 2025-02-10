import { assets } from "@/assets/assets";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    category: "UI/UX Design",
    author: "Jayesh Patil",
    date: "10 Nov, 2023",
   
  },
  {
    id: 2,
    title: "Sugee: Loan Management System for Rural Sector.",
    category: "App Design",
    author: "Jayesh Patil",
    date: "09 Oct, 2023",
    image: "/images/blog2.png",
  },
  {
    id: 3,
    title: "Cinetrade: Innovative way to invest in Digital Media",
    category: "App Design",
    author: "Jayesh Patil",
    date: "13 Aug, 2023",
    image: "/images/blog3.png",
  },
];

const BlogSection = () => {
  return (
    <section className="p-6 md:p-10 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          From my <span className="text-blue-600">blog post</span>
        </h2>
        <a
          href="/blog"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          See All
        </a>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden relative group transition hover:shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative w-full h-48">
              <Image
                src={assets.card_image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>

            {/* Text Section */}
            <div className="p-4">
              <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-500 text-sm">
                {post.author} • {post.date}
              </p>
            </div>

            {/* Arrow Icon */}
            <div className="absolute bottom-4 right-4 bg-black text-white p-2 rounded-full transition group-hover:bg-blue-600">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
