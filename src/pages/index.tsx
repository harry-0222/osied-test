import MainLayout from '@/components/layouts/MainLayout';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => router.push('/sign-up'), [router]);

  return (
    <MainLayout>
      <h1>Home</h1>
    </MainLayout>
  );
}
