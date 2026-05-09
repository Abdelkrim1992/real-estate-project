import { Metadata } from 'next';
import LoginForm from '@/app/login/LoginForm';

export const metadata: Metadata = {
  title: 'Login | Estatix - Modern Real Estate Platform',
  description: 'Sign in to your Estatix account to manage your property listings, saved searches, and connect with expert agents.',
};

export default function LoginPage() {
  return <LoginForm />;
}
