import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, AcademicCapIcon, PuzzlePieceIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center flex-col sm:flex-row  ">
        <div className="flex-1 flex  items-center justify-center">
          <Image
            className="rounded-full w-[200px] h-[200px] aspect-square sm:w-[320px] sm:h-[320px]  "
            src={"/profile-4x.png"}
            width="400"
            height={400}
            alt="profile"
          />
        </div>
        <div className="flex-1  flex flex-col gap-5">
          <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-cyan-800 font-extrabold flex-1">
            I'm a Web Developer
          </h1>
          <p className="indent-10 text-justify animate-writting text-lg leading-9 hidden sm:block">
            Saya Saepul Malik, seorang Web Developer yang memiliki latar
            belakang pendidikan <strong>S1 Fisika</strong> dari{" "}
            <strong>Institut Pertanian Bogor</strong>.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <div className="flex gap-2">
                    <AcademicCapIcon className="h-5 w-5 text-purple-500"/>
                    <span>Pendidikan</span>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="flex flex-col gap-3"> 
                  <Image
                    src="/banner.jpeg"
                    width="1300"
                    height="350"
                    alt="banner-malik"
                  />
                  <p className="indent-10 text-justify">
                    Saya Saepul Malik, seorang Web Developer yang memiliki latar
                    belakang pendidikan <strong>S1 Fisika</strong> dari{" "}
                    <strong>Institut Pertanian Bogor</strong>. Meskipun terlihat
                    berbeda, tapi saya percaya bahwa pendidikan saya di Fisika
                    memberikan dasar yang kuat dalam memahami logika dan
                    pemecahan masalah yang sangat berguna dalam pengembangan
                    web.
                  </p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <div className="flex gap-2">
                    <PuzzlePieceIcon className="h-5 w-5 text-purple-500"/>
                    <span>Hobi</span>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p className="indent-10 text-justify">
                  Selain menjadi Web Developer, saya memiliki hobi yang cukup
                  unik, yaitu bermain game mobile dan menulis. Saya percaya
                  bahwa hobi-hobi ini membantu saya dalam meningkatkan
                  kreativitas dan imajinasi saya dalam mengembangkan ide-ide
                  baru dalam pekerjaan saya.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <div className="flex gap-2">
                    <RocketLaunchIcon className="h-5 w-5 text-purple-500"/>
                    <span>Prinsip</span>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p className="indent-10 text-justify">
                  Salah satu prinsip yang saya pegang adalah{" "}
                  <q>
                    <i>Belajar dengan melakukan</i>
                  </q>
                  . Saya selalu mencoba hal-hal baru dan berani mencoba
                  kesalahan-kesalahan dalam pengembangan web. Dari setiap
                  kesalahan tersebut, saya belajar dan terus mengembangkan diri
                  untuk mencapai hasil yang lebih baik. Saya percaya bahwa
                  dengan terus belajar dan berlatih, kita akan selalu dapat
                  meningkatkan kemampuan dan kualitas kerja kita.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

       
      </div>
    </div>
  );
};

export default AboutPage;
