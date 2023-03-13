import Image from "next/image";
import React, { useCallback, useState } from "react";
import Navbar from "../navbar";
import SwitchButton from "../switch-button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SelectList from "../select-list";
import { Dialog } from "@headlessui/react";
import HelperButton from "../helper-button";
import { useRouter } from "next/router";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleClickMobileMenu = useCallback(() => {
        setShowMobileMenu(!showMobileMenu)
    }, [showMobileMenu])

    const router = useRouter()

    const handleClickLogo = () => {
        router.push('/')
    }

  return (
    <header className="sticky top-0 left-0 shadow-md flex justify-between items-center gap-2 px-1 py-2  sm:py-1 max-w-7xl w-full bg-white dark:bg-gray-600">
      
      <div className="flex gap-1 items-center cursor-pointer" onClick={handleClickLogo}>
      <Image
        src={"/logo.png"}
        alt="logo"
        width={40}
        height={40}
        className="aspect-square w-8 sm:w-10 "
      />
      <h3 className="sm:hidden">Malik</h3>
      </div>
      <Navbar />
      <div className="flex gap-1 sm:gap-2 items-center">
        <HelperButton/>
        {
            showMobileMenu ? (<XMarkIcon className="h-8 w-8 sm:hidden"  aria-hidden="true" onClick={handleClickMobileMenu} />) : (<Bars3Icon className="h-8 w-8 sm:hidden" aria-hidden="true" onClick={handleClickMobileMenu} />)
        }
      </div>
    </header>
  );
};

export default Header;
