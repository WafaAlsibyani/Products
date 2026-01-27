import React from 'react'
import Icon from "../../component/Icon"
import {MapPinIcon, UsersIcon, ShoppingCartIcon, MagnifyingGlassIcon, FunnelIcon} from '@heroicons/react/24/outline';
import {useSearch} from '../../context/SearchContext';
import {useToggle} from "../../hooks/useToggle";
// import SideMenu from '../../features/filters/ui/SideMenu';


const Header = () => {
  const {searchQuery, setSearchQuery} = useSearch();
  const filterMenu = useToggle();
  return (
    <nav className="sticky top-0 z-50 bg-white flex py-2 px-10 items-center gap-[100px]">

      {/* LOGO SEC1 */}
      <div className='flex items-center gap-5'>

        <img src='/src/assets/logo.png' className="h-10 md:h-12 w-auto object-contain" alt="logo" />

        <div className='flex items-center text-nowrap text-center py-[18px] gap-2 '>
          <Icon icon={MapPinIcon} />
          <p className='font-medium text-sm text-[#3E3B3F]'> Saudi Arabia</p>
        </div>
      </div>

      {/* SEARCH SEC2 */}
      <div className='flex flex-1 items-center relative '>
        <Icon
          icon={MagnifyingGlassIcon}
          position="absolute top-1/2 -translate-y-1/2 "
          withContainer={true}
        />
        <input
          type='search' name='search' id='search' placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='bg-white border-[#ede2ed] rounded-full w-full pr-4 pl-16 py-4 border focus:border-[#E91E8C] shadow-lg focus:shadow-[#FBD8EB] focus:outline-none focus:border-3'
        />

      </div>
      {/* FILTER BUTTON */}
      <button
        onClick={filterMenu.toggle}
        className="hover:border-2 hover:shadow hover:bg-surface-hover hover:border-border flex items-center rounded-xl p-2.5 gap-1"
      >
        <Icon icon={FunnelIcon} />
        <p className="font-medium text-sm text-[#3E3B3F]">Filters</p>
      </button>

      {/* SIDE MENU */}
      {/* <SideMenu isOpen={filterMenu.isOpen}
        onClose={filterMenu.close}
      /> */}
    </nav>
  )
}

export default Header
