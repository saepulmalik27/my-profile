import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const CarreerPage = () => {
  return (
    <div className="flex flex-col gap-5 py-5 sm:gap-10 sm:py-10">
      <h1 className="text-2xl sm:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-600">
        Pengalaman Kerja
      </h1>

      <div className="flex flex-col gap-5">
        {/* 
            ================================
            ========= 3rd Job ==============
            ================================
        */}
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-cyan-100 px-4 py-2 text-left text-sm font-medium text-cyan-900 hover:bg-cyan-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <div className="flex gap-3">
                  <Image
                    src={"/inspigo.png"}
                    className="aspect-square w-8 sm:w-10 h-8 sm:h-10"
                    width="40"
                    height={40}
                    alt="iglo"
                  />
                  <div>
                    <h1 className="font-bold">
                      Frontend Engineer - PT Inspigo Inovasi Indonesia{" "}
                    </h1>
                    <p className="text-[11px]">Feb 2021 - Saat ini</p>
                  </div>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 sm:h-8 sm:w-8 text-cyan-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="list-disc list-inside dark:text-white">
                  <li>
                    Create Page for live streaming event - InspigoLive
                    (React-Redux)
                  </li>
                  <li>
                    Create Realtime communication - InspiTalk
                    (React-Redux-Agora-firebase Realtime Database)
                  </li>
                  <li>
                    Create miniweb for event corporate B2B and B2B2C (Gatsby,
                    React, Next)
                  </li>
                  <li>
                    Create Web Tempalte for Corporate B2B Learning Carnival
                    (Gatsby)
                  </li>
                  <li>
                    Create Custome Corporate Page at Member Inspigo
                    (React-Redux)
                  </li>
                  <li>
                    Create B2B Platform - Inspigo for Business
                    (React-NextJs-Redux Toolkit-RTK
                    query-Jest-RTL-Turborepo-styled-component)
                  </li>
                  <li>
                    Update and Writting Platform Single Login Inspigo
                    MyAccount.inspigo.id (React-Redux-Tailwindcss-formix)
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* 
            ================================
            ========= 2nd Job ==============
            ================================
        */}

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-cyan-100 px-4 py-2 text-left text-sm font-medium text-cyan-900 hover:bg-cyan-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <div className="flex gap-3">
                  <div className="flex">
                    <Image
                      src={"/iglo.png"}
                      className="aspect-square w-8 sm:w-10 h-8 sm:h-10 border rounded-full"
                      width="40"
                      height={40}
                      alt="iglo"
                    />
                    <Image
                      src={"/praweda.png"}
                      className="aspect-square w-8 sm:w-10 h-8 sm:h-10 border rounded-full ml-[-20px]"
                      width="40"
                      height={40}
                      alt="iglo"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold">
                      Web Developer - PT Praweda Sarana Informatika{" "}
                    </h1>
                    <p className="text-[11px]">
                      Sep 2018 - Jan 2021 (IT Consultan dari PT Indocyber Global
                      Teknologi)
                    </p>
                  </div>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 sm:h-8 sm:w-8 text-cyan-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="list-disc list-inside dark:text-white">
                  <li>
                    Membuat CMS Shipyard Include Project Management, Invocing,
                    Warehouse Management using Laravel & VueJs
                  </li>
                  <li>Maintenance CMS Trucking using MVC Php Codeigniter </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* 
            ================================
            ========= 1st Job ==============
            ================================
        */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-cyan-100 px-4 py-2 text-left text-sm font-medium text-cyan-900 hover:bg-cyan-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <div className="flex gap-3">
                  <Image
                    className="aspect-square w-8 sm:w-10 h-8 sm:h-10"
                    src={"/iglo.png"}
                    width="40"
                    height={40}
                    alt="iglo"
                  />
                  <div>
                    <h1 className="font-bold">
                      Magang IT Consultan - PT Indocyber Global Teknologi
                    </h1>
                    <p className="text-[11px]">Mei 2018 - Jul 2018</p>
                  </div>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 sm:h-8 sm:w-8 text-cyan-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="list-disc list-inside dark:text-white">
                  <li>Mempelejari Sql Server</li>
                  <li>Mempelajari Bahasa Pemogragan Java dan C#</li>
                  <li>Mempelajari MVC Web App Java & .NET</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default CarreerPage;
