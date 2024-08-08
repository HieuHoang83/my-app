"use client";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loadingpage/loading";
import NavigateHome from "@/components/Home/header/header";
import { useEffect, useState } from "react";
import { useThemeContext } from "@/library/ThemeProvider";

function BV() {
  const { status } = useSession({
    required: false,
  });

  let listItem = [
    {
      title: "Pasta Perfection",
      img: "https://tse3.mm.bing.net/th?id=OIP.-ZIvUQEk6zpMI7_Rv_e5JQHaE8&pid=Api&P=0&h=220",
      description:
        "Indulge in our expertly crafted pasta dishes, made with the finest ingredients and authentic techniques.",
    },
    {
      title: "Sushi Mastery",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      description:
        "Experience the art of sushi-making with our talented chefs, who create visually stunning and flavorful pieces.",
    },
    {
      title: "Smoky BBQ Delights",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      description:
        "Savor the rich flavors of our slow-smoked barbecue dishes, infused with the perfect blend of spices and wood.",
    },
    {
      title: "Hearty Veggie Bowl",
      img: "https://tse1.mm.bing.net/th?id=OIP.NDfPje8ohcf3iBWD6xw3mQAAAA&pid=Api&P=0&h=220",
      description:
        "A vibrant and nourishing bowl filled with fresh vegetables, protein, and flavorful toppings.",
    },
    {
      title: "Mediterranean Quinoa Salad",
      img: "https://tse3.mm.bing.net/th?id=OIP.9Xgihl4YvjhnRckMRN2cGwAAAA&pid=Api&P=0&h=220",
      description:
        "A delightful blend of quinoa, olives, feta, and sun-dried tomatoes, tossed in a zesty Mediterranean dressing.",
    },
    {
      title: "Crunchy Thai Salad",
      img: "https://themerrymakersisters.com/wp-content/uploads/2018/01/crunchy-asian-salad-feature.jpg",
      description:
        "A refreshing blend of crisp veggies, roasted peanuts, and a tangy Thai-inspired dressing.",
    },
  ];
  const Title = () => {
    return (
      <section className="py-20 px-24 dark:bg-[#7d8083] text-black dark:text-gray-200 bg-[#ffc289b5]">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-4 ">
            <div className="col-span-3">
              <h2 className="text-4xl font-bold mb-4">
                Explore the Culinary World
              </h2>
              <p className="mb-6">
                Discover a wide range of delectable dishes from around the
                globe. From classNameic comfort foods to exotic regional
                specialties, our menu offers a tantalizing journey for your
                taste buds.
              </p>
              <div className="flex flex-col justify-start">
                <a
                  href="#menu"
                  className="bg-[#ee913a] hover:bg-[#ee913ac0] dark:bg-[#404040] dark:hover:bg-[#2c2a2a] text-white font-bold py-2 px-2 rounded inline-block w-[170px]"
                >
                  View Our Menu
                </a>
                <a
                  href="#contact"
                  className="mt-5 bg-[#ee913a] hover:bg-[#ee913ac0] dark:bg-[#404040] dark:hover:bg-[#2c2a2a] text-white font-bold py-2 px-4 rounded inline-block w-[170px]"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-span-2">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.c7fWuMZglwrGOqCIlnyF9AAAAA&pid=Api&P=0&h=220"
                alt="Culinary Delight"
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Culinary Delight. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  const Itemcard = (imgUrl: any, name: any, description: any) => {
    return (
      <div className="bg-[#ffc2894d] dark:bg-[#14060621] rounded-lg shadow-md p-6 text-center">
        <img
          src={imgUrl}
          alt={name}
          className="rounded-lg mb-4 h-[300px] w-full object-cover "
        />
        <h3 className="text-2xl font-bold mb-2 dark:text-gray-200">{name}</h3>
        <p className="dark:text-gray-200">{description}</p>
      </div>
    );
  };
  const Menu = () => {
    return (
      <section
        className="bg-[#ffc28978] py-20 px-24 dark:bg-[#8f9195]"
        id="menu"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 dark:text-gray-200">
            Our Specialties
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {listItem.map((item) => {
              return Itemcard(item.img, item.title, item.description);
            })}
          </div>
        </div>
      </section>
    );
  };
  const Contact = () => {
    return (
      <section
        className="bg-gray-100 py-20 px-24 dark:bg-[#888a8c] bg-[#ffc289b5]"
        id="contact"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 dark:text-gray-200">
            Contact Us
          </h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block font-bold mb-2 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ccc] dark:bg-gray-100"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-bold mb-2 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ccc] dark:bg-gray-100"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block font-bold mb-2 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ccc] dark:bg-gray-100"
                rows={5}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  };
  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <div>
          <NavigateHome />
          <div className=" text-gray-800 font-body mt-[80px] ">
            <Title />
            <Menu />

            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default BV;
