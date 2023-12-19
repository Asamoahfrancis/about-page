"use client";
import Link from "next/link";
import { ImLinkedin } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { TfiYoutube } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="md:hidden shadow-sm bg-white sticky top-0">
        <section className="flex py-4  items-center justify-between px-2">
          <Link href="#" className="text-2xl  text-black font-bold">
            Policy<span className="text-red-600">CON</span>
          </Link>
          <div className="text-red-600 cursor-pointer">
            <BiMenu size="3em" />
          </div>
        </section>
      </div>
      <nav className="hidden md:block text-black sticky top-0  bg-white  p-4 py-8">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold">
            Policy<span className="text-red-600">CON</span>
          </Link>
          <div>
            <Link
              href="#"
              className="px-3 py-2 hover:bg-red-600 hover:text-white rounded"
            >
              Home
            </Link>
            <Link
              href="#"
              className="px-3 py-2 hover:bg-red-600 hover:text-white  rounded"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="px-3 py-2 hover:bg-red-600 hover:text-white  rounded"
            >
              Community
            </Link>
            <Link
              href="#"
              className="px-3 py-2 hover:bg-red-600  hover:text-white  rounded"
            >
              Join Us
            </Link>
            <Link
              href="#"
              className="px-3 py-2 hover:bg-red-600 hover:text-white  rounded"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 h-[300px] text-white text-center py-10 px-5 flex flex-col items-center justify-center">
        <h1 className="md:text-4xl text-3xl font-bold mb-2">
          Empowering Policy Conversations
        </h1>
        <p className="md:text-xl ">Where Every Voice Shapes the Future</p>
      </header>
      <h1 className="text-center font-bold text-red-600  py-10 text-2xl md:text-4xl">
        <span className="px-4">About</span>{" "}
        <span className="text-black">Policy</span>CON
      </h1>
      <main className="container mx-auto md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <section className="mb-12 rounded-lg border  p-4 shadow-md hover:shadow-none">
          <h2 className="text-3xl  font-bold text-red-600 mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700  text-center">
            At PolicyCON, we are commiKed to shaping the future of public
            policy. Our plaWorm is a beacon for dynamic discussions, bringing
            together diverse perspectives from around the globe. We believe in
            empowering voices, from seasoned analysts to enthusiastic newcomers,
            to contribute to meaningful policy changes.
          </p>
        </section>

        <section className="mb-12 rounded-lg border  p-4 shadow-md hover:shadow-none">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
            Our Journey
          </h2>
          <p className="text-gray-700  text-center">
            Founded in 2018, PolicyCON has rapidly evolved from a small forum to
            a thriving community. Our journey began with a simple idea: to make
            policy discussions more accessible and inclusive. Today, we are
            proud to be a leading plaWorm where experts and enthusiasts alike
            can share insights, challenge norms, and drive innovaton in
            policymaking.
          </p>
        </section>

        <section className="mb-12 border rounded-lg shadow-md p-2 hover:shadow-none">
          <h2 className="text-3xl  font-bold text-red-600 mb-4 text-center">
            Our Community
          </h2>
          <p className="text-gray-700 text-center p-2">
            The heart of PolicyCON is our vibrant community. We foster an
            environment where open dialogue is encouraged, and diverse opinions
            are celebrated. Our members range from policy professionals and
            academics to students and actvists, all united by a shared passion
            for shaping a beKer world.
          </p>
        </section>

        <section className="mb-12 border rounded-lg shadow-md hover:shadow-none">
          <h2 className="text-3xl font-bold text-red-600 mb-4  p-2 text-center">
            Our Impact
          </h2>
          <p className="text-gray-700 text-center p-2 ">
            Through our plaWorm, we&apos;ve facilitated critcal conversations on
            global issues, influenced policy decisions, and provided a stage for
            underrepresented voices. Our impact extends beyond discussions, as
            we actively engage in policy research, host webinars, and
            collaborate with organizations for broader societal change.
          </p>
        </section>

        <section className="mb-12 border rounded-lg shadow-md p-2 hover:shadow-none">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
            Our Vision
          </h2>
          <p className="text-gray-700 text-center p-2">
            Looking ahead, PolicyCON aims to further democratize policy
            discussion. We envision a world where policymaking is a
            collaborative effort, accessible to all, and reflective of diverse
            viewpoints. Our commitment to innovation and inclusivity drives us
            to continuously enhance our plaWorm, ensuring that every voice can
            be heard, and every idea can make a difference.
          </p>
        </section>

        <section className="mb-12 border rounded-lg shadow-md p-2 hover:shadow-none">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
            Join Us
          </h2>
          <p className="text-gray-700 text-center">
            Become a part of PolicyCON&apos;s journey. Whether you&apos;re
            looking to contribute your expertise, learn about policy, or simply
            engage in meaningful conversations, our doors are open. Join us
            today and be a part of shaping the policies of tomorrow.
          </p>
        </section>
      </main>
      <footer className="bg-red-600 text-white text-center p-4">
        <div className="grid place-items-center mb-8  ">
          <section className="flex items-center gap-6">
            <Link
              href="https://policycon.com"
              className="cursor-pointer"
              target="blank"
            >
              <FaExternalLinkAlt size="1.5em" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/policycon/"
              target="blank"
            >
              <ImLinkedin size="1.5em" />
            </Link>
            <Link href="https://twitter.com/policycon" target="blank">
              <BsTwitterX size="1.5em" />
            </Link>
            <Link href="https://web.facebook.com/policycon" target="blank">
              <IoLogoFacebook size="1.5em" />
            </Link>
            <Link href="https://www.youtube.com/policycon" target="blank">
              <TfiYoutube size="1.5em" />
            </Link>
            <Link href="https://www.instagram.com/policycon" target="blank">
              <AiFillInstagram size="1.5em" />
            </Link>
          </section>
        </div>
        <p>&copy; 2023 PolicyCON. All rights reserved.</p>
      </footer>
    </div>
  );
}
