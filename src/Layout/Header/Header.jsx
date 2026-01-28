import React from 'react'
import CustomIcon from "../../component/CustomIcon"
import {MapPinIcon, UsersIcon, ShoppingCartIcon, MagnifyingGlassIcon, FunnelIcon} from '@heroicons/react/24/outline';
import {useSearch} from '../../context/SearchContext';
import {useToggle} from "../../hooks/useToggle";
import {useNavigate} from "react-router-dom";
// import SideMenu from '../../features/filters/ui/SideMenu';


const Header = () => {
  const {searchQuery, setSearchQuery} = useSearch();
  const navigate = useNavigate();
  const filterMenu = useToggle();
  return (
    <nav className="sticky top-0 z-50 bg-white flex py-2 px-10 items-center gap-[100px]">

      {/* LOGO SEC1 */}
      <div className='flex items-center gap-5'>

        <img src='/src/assets/logo.png' className="h-10 md:h-12 w-auto object-contain" alt="logo" />

        <div className='flex items-center text-nowrap text-center py-[18px] gap-2 '>
          <CustomIcon icon={MapPinIcon} />
          <p className='font-medium text-sm text-[#3E3B3F]'> Saudi Arabia</p>
        </div>
      </div>

      {/* SEARCH SEC2 */}
      <div className='flex flex-1 items-center relative '>
        <CustomIcon
          icon={MagnifyingGlassIcon}
          position="absolute left-4 top-1/2 -translate-y-1/2 "
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
      <div className='flex items-center gap-4'>
        <button
          onClick={() => navigate('/cart')}
          className="relative p-3 bg-white rounded-full border border-gray-200/50 shadow-sm hover:shadow-md hover:border-[#E91E8C] transition-all group"
        >
          <CustomIcon icon={ShoppingCartIcon} className=" text-gray-600 group-hover:text-[#E91E8C] transition-colors" />
          {/* {totalItems > 0 && (
            <div className="absolute -top-1 -right-1 min-w-[1.25rem] h-5 bg-gradient-to-r from-[#E91E8C] to-[#FF6B9D] rounded-full flex items-center justify-center px-1.5 shadow-lg">
              <span className="text-[10px] text-white" style={{fontWeight: 700}}>{totalItems}</span>
            </div>
          )} */}
        </button>
        <button
          onClick={filterMenu.toggle}
          className="hover:border-2 hover:shadow hover:bg-surface-hover hover:border-border flex items-center rounded-full  gap-1"
        >
          <CustomIcon icon={FunnelIcon} />
          <p className="font-medium text-sm text-[#3E3B3F]">Filters</p>
        </button>

        {/* SIDE MENU */}
        {/* <SideMenu isOpen={filterMenu.isOpen}
        onClose={filterMenu.close}
      /> */}

      </div>

    </nav>
  )
}

export default Header
