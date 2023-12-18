import Link from 'next/link';
import Image from 'next/image';
import { BsLink45Deg } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

import MainLayout from '@/components/layouts/MainLayout';
import PrimaryInput from '@/components/forms/primary-input/PrimaryInput';
import PrimaryButton from '@/components/buttons/primary-button/PrimaryButton';
import LanguageSelect, { Option } from '@/components/forms/lang-select/LanguageSelect';

import appleIcon from '@/assets/icons/apple.svg';
import googleIcon from '@/assets/icons/google.svg';

import { isValidEmail } from '@/utils/validators';

const SignUpScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [isEmailValidated, setIsEmailValidated] = useState<boolean>(false);

  const languageOptions: Array<Option> = [
    {
      label: 'English (United Kingdom)',
      value: 'UK',
      icon: <ReactCountryFlag countryCode="GB" svg style={{ width: '48px', height: '48px' }} />,
    },
    {
      label: 'English (United States)',
      value: 'US',
      icon: <ReactCountryFlag countryCode="US" svg style={{ width: '48px', height: '48px' }} />,
    },
    {
      label: 'Spanish',
      value: 'ES',
      icon: <ReactCountryFlag countryCode="ES" svg style={{ width: '48px', height: '48px' }} />,
    },
  ];

  useEffect(() => {
    setIsEmailValidated(isValidEmail(email));
  }, [email]);

  return (
    <MainLayout>
      <div className="w-[400px] xs:w-full h-full flex flex-col items-center m-auto">
        <LanguageSelect options={languageOptions} onSelect={() => { }} />
        <Image src="/logo.svg" alt="LOGO SVG" width={56} height={56} className="cursor-pointer" />
        <h1 className="text-4xl xs:text-2xl text-center mt-4">Welcome to Manifest</h1>
        <h2 className="text-lg xs:text-sm text-center text-gray-400 mt-6">
          Create an account and start for free
          <br />
          Log in to your account below
        </h2>
        <div className="flex flex-col gap-4 w-full mt-12">
          <PrimaryButton
            icon={
              <div className="bg-white rounded-md">
                <Image src={googleIcon} alt="Google Logo" width={24} height={24} />
              </div>
            }
            text="Continue with Google"
          />
          <PrimaryButton
            icon={<Image src={appleIcon} alt="Apple Logo" width={24} height={24} />}
            text="Continue with Google"
            color="bg-[#000000]"
          />
        </div>
        <p className="text-sm text-center text-gray-400 mt-6">Or continue with email</p>
        <div className="flex flex-col gap-4 w-full mt-6">
          <PrimaryInput
            type="text"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={isEmailValidated ? 'focus-visible:border-2' : ''}
          />
          <PrimaryButton
            text="Continue with email"
            color="bg-purple-500"
            disabled={!isEmailValidated}
          />
        </div>
        <p className="flex gap-1 text-sm xs:text-xs text-center mt-8">
          <BsLink45Deg className="mt-1 xs:mt-[2px]" />
          <span className=" text-gray-400">
            We'll email you a magic code to log in password-free
          </span>
        </p>
        <div className="mt-5" />
        <p className="text-sm xs:text-xs text-center text-gray-400 mt-auto">
          By continuing you acknowledge and accept
          <br />
          Manifest's{' '}
          <Link href="#" className="underline">
            Terms & Conditions
          </Link>{' '}
          and{' '}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </MainLayout>
  );
};

export default SignUpScreen;
