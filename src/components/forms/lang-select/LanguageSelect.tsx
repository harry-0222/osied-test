import React, { ReactNode, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export type Option = {
  icon?: ReactNode;
  value: string;
  label: string;
};

interface props {
  options: Array<Option>;
  onSelect: Function;
}

const LanguageSelect = ({ options, onSelect }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="fixed left-10 bottom-10 sm:static sm:mb-4 w-[250px]">
      {isOpen && (
        <div className="mb-2 flex flex-col gap-1 sm:hidden">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleSelect(option)}>
              <div className="relative w-[30px] h-[30px] rounded-full bg-red-500 overflow-hidden">
                <div className="absolute w-[40px] h-[40px] top-[-10px] left-[-5px]">
                  {option.icon}
                </div>
              </div>
              <p className=" text-sm text-gray-400">{option.label}</p>
            </div>
          ))}
        </div>
      )}
      <div className="select-header" onClick={handleToggle}>
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="relative w-[30px] h-[30px] rounded-full bg-red-500 overflow-hidden">
              <div className="absolute w-[40px] h-[40px] top-[-10px] left-[-5px]">
                {selectedOption.icon}
              </div>
            </div>
            <p className=" text-sm text-gray-400">{selectedOption.label}</p>
          </div>
          {isOpen ? (
            <BsChevronUp className="text-gray-400" />
          ) : (
            <BsChevronDown className="text-gray-400" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="hidden sm:flex flex-col gap-1 mt-1">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleSelect(option)}>
              <div className="relative w-[30px] h-[30px] rounded-full bg-red-500 overflow-hidden">
                <div className="absolute w-[40px] h-[40px] top-[-10px] left-[-5px]">
                  {option.icon}
                </div>
              </div>
              <p className=" text-sm text-gray-400">{option.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
