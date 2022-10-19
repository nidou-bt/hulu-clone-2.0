import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  UserIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  Square3Stack3DIcon
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={Square3Stack3DIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="header"
      />
    </div>
  );
}

export default Header;
