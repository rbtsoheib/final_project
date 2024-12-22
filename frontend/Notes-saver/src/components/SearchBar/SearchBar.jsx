import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io'; 

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className='w-80 felx items-center px-4 bg-slate-100 rounded-md'>
      <input 
      type="text"
      placeholder='Search Notes'
      className='w-full text-sm bg-transparent pt-[10px] pb-[20px] outline-none'
      value={value}
      onChange={onChange}
      />

      {value && (<IoMdClose className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3 ml-[245px]" onClick={onClearSearch} />)}

      <FaMagnifyingGlass className='text-slate-400 cursor-pointer hover:text-black ml-[275px]' onClick={handleSearch}/>

    </div>
  )
}

export default SearchBar ; 
