import { Metadata } from 'next';
import RegisterForm from '@/app/register/RegisterForm';

export const metadata: Metadata = {
  title: 'Create Account | Estatix - Modern Real Estate Platform',
  description: 'Join the Estatix community to access premium property listings, save your favorite homes, and connect with top real estate agents.',
};

export default function RegisterPage() {
  return <RegisterForm />;
}
