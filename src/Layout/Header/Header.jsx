import React from 'react'
import Icon from "../../component/Icon"
import {MapPinIcon, UsersIcon, ShoppingCartIcon, MagnifyingGlassIcon, FunnelIcon} from '@heroicons/react/24/outline';
import {useSearch} from '../../context/SearchContext';
import SideMenu from "../SideMenu/SideMenu";

const Header = () => {
  const {searchQuery, setSearchQuery} = useSearch();
  return (
    <nav className="sticky top-0 z-50 bg-white flex py-2 px-10 items-center gap-[100px]">

      {/* LOGO SEC1 */}
      <div className='flex items-center gap-5'>

        <img src='/src/assets/logo.png' className="object-contain" alt="logo" />

        <div className='flex items-center text-nowrap text-center py-[18px] gap-2 '>
          <Icon icon={MapPinIcon} />
          <p className='font-medium text-sm text-[#3E3B3F]'> Saudi Arabia</p>
        </div>
      </div>

      {/* SEARCH SEC2 */}
      <div className='flex flex-1 items-center relative'>
        <Icon
          icon={MagnifyingGlassIcon}
          position="absolute left-4 top-1/2 -translate-y-1/2 "
          color='text-[#B6349A]'
          withContainer={true}
        />
        <input
          type='search' name='search' id='search' placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='bg-white border-[#ede2ed] rounded-full w-full pl-16 py-4 border focus:border-[#E91E8C] shadow-lg focus:shadow-[#FBD8EB] focus:outline-none focus:border-3'
        />



      </div>


      <SideMenu />




    </nav>
  )
}

export default Header
