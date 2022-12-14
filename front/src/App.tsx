import React from 'react';
import logo from './logo.svg';
import './App.css';

import Github from "./includes/github";
import Discord from "./includes/discord";

const linkGithub = "https://github.com/neofreelance-react-express-typescript";
const linkDiscord = "https://discord.gg/YGbTmMwU3S";

function App() {
  return (
    <>
      <header id="header-wrap" className="relative">
        <div className="navigation bg-white fixed top-0 left-0 w-full z-30 duration-300 shadow">
          <div className="container mx-auto">
            <nav className="navbar navbar-expand-lg flex justify-between items-center relative duration-300">
              <a
                className="navbar-brand flex flex-row content-center w-20 items-center"
                href="/"
              >
                <img src={logo} alt="Logo" className="m-5" />{" "}
                <span className="text-lg font-extrabold">neoFreelance</span>
              </a>
              <div
                className="collapse navbar-collapse hidden lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto justify-end items-center lg:flex">
                  <li className="nav-item">
                    <a
                      className="page-scroll active"
                      href={linkGithub}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section id="hero-area" className=" bg-slate-50 pt-48 pb-10">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <h2
                className="text-4xl font-bold leading-snug text-gray-700 mb-10 wow fadeInUp"
                data-wow-delay="1s"
              >
                You are looking for a job in IT ... <br />
                ASAP!
              </h2>
            </div>
          </div>
        </div>
        <div className="container text-center py-20  mx-auto">
          <div className="flex justify-center mx-3">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <h4
                className="mb-3 section-heading wow fadeInUp"
                data-wow-delay="0.3s"
              >
                neoFreelance your partner in IT
              </h4>
              <p
                className="mb-4 text-gray-600 leading-loose text-sm wow fadeInUp"
                data-wow-delay="0.6s"
              >
                We are building a new app to let you fin your next experience job in IT
              </p>
              <form>
                <div className="wow fadeInDown" data-wow-delay="0.3s">
                  <input
                    type="Email"
                    className="w-full mb-5 bg-white border border-blue-300 rounded-full px-5 py-3 duration-300 focus:border-blue-600 outline-none"
                    name="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="border-0 bg-blue-600 text-white rounded-full px-6 h-12 duration-300 hover:opacity-75"
                    type="submit"
                  >
                    Tell me when it's ready
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div
              className="w-full wow fadeInUp text-center"
              data-wow-delay="0.8s"
            >
              <div className="mx-3 mb-8">
                <h3 className="font-bold text-xl text-white mb-5">
                  Find us on
                </h3>
                <ul className="social-icons flex justify-center">
                  <li className="mx-2">
                    <a
                      href={linkGithub}
                      className="footer-icon hover:bg-indigo-600"
                    >
                      <Github />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a
                      href={linkDiscord}
                      className="footer-icon hover:bg-red-500"
                    >
                      <Discord />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
