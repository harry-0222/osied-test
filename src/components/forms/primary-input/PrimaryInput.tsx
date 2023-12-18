import { ChangeEventHandler } from 'react';

interface props {
  type: string;
  style?: string;
  value?: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const PrimaryInput = ({ type, style, value, placeholder, onChange }: props) => {
  return (
    <input
      type={type}
      value={value}
      className={`
        w-full border border-gray-200 p-3 rounded-lg focus-visible:border-purple-500 
        focus-visible:outline focus-visible:outline-4 focus-visible:outline-gray-200 ${style}
      `}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default PrimaryInput;
