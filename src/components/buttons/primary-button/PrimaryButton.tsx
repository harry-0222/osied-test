import { ReactNode } from 'react';

interface props {
  text: string;
  icon?: ReactNode;
  color?: string;
  disabled?: boolean;
}

const PrimaryButton = ({ text, icon, color, disabled }: props) => {
  return (
    <button
      className={`
        flex items-center justify-center gap-2 w-full py-3 rounded-lg 
        ${disabled ? 'text-gray-300' : 'text-white'} 
        ${disabled ? 'bg-gray-100' : color ?? 'bg-button-primary'}
      `}
      disabled={disabled}>
      {icon ?? <></>}
      {text}
    </button>
  );
};

export default PrimaryButton;
