import styles from "../style";
import Image from "next/image";

const SearchInput = ({ value, onChange, onSearch }) => {
    return (
      <div className={`${styles.flexCol} gap-10 relative w-2/5`}>
        <input 
          type="text" 
          value={value} 
          onChange={onChange} 
          className="top-0 bottom-0 w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
          placeholder="What do you want to search?"
        />
        <button 
          className="absolute p-2 ml-2 text-center text-white rounded-md right-1 focus:outline-none" 
          onClick={onSearch}>
          <Image src="/Search.svg" width={20} height={20} alt="search icon" />
        </button>   
      </div>
    );
};

export default SearchInput;