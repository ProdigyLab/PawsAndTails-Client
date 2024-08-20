import React, { useState } from "react";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { useDebounce } from "@/hooks/useDebounce";
import { setSearchTerm } from "@/redux/actions/searchActions";

const SearchBarComponent = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const dispatch = useDispatch();

  const debouncedSetSearchTerm = useDebounce((value: string) => {
    dispatch(setSearchTerm(value));
  }, 300);
  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };
  const onSearch = (value: string) => {
    console.log("Search Value:", value);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    debouncedSetSearchTerm(value);
  };
  const handleCloseSearch = () => {
    setIsSearchVisible(false);
    setLocalSearchTerm("");
    dispatch(setSearchTerm(""));
  };
  return (
    <div>
      <SearchOutlined
        placeholder="Search your pets"
        // onSearch={onSearch}
        // enterButton
        onClick={handleSearchClick}
        // suffix={<SearchOutlined />}
      />
      {/* Full-Screen Search Overlay */}
      {isSearchVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative w-full max-w-2xl p-4">
            <Input
              placeholder="Search your pets....."
              value={localSearchTerm}
              onChange={handleInputChange}
              // onSearch={onSearch}
              autoFocus
              className="text-center text-white bg-transparent text-xl placeholder-white"
              bordered={false}
              maxLength={12}
            />
            <CloseOutlined
              onClick={handleCloseSearch}
              className="absolute  text-white text-2xl cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBarComponent;
