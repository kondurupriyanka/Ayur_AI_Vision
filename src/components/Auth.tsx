import { Auth as SupabaseAuth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabaseClient';

const Auth = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome to AyurAI</h2>
      <SupabaseAuth
        supabaseClient={supabase}
        appearance={{ 
          theme: ThemeSupa,
          style: {
            message: {
              color: '#EF4444' // Changed to Tailwind red-500 for better error visibility
            }
          },
          variables: {
            default: {
              colors: {
                brand: '#10B981',
                brandAccent: '#059669'
              }
            }
          }
        }}
        providers={[]}
        redirectTo={`${window.location.origin}/profile`}
        localization={{
          variables: {
            sign_in: {
              email_input_placeholder: 'Your email address',
              password_input_placeholder: 'Your password',
              email_label: 'Email',
              password_label: 'Password',
              button_label: 'Sign in',
              loading_button_label: 'Signing in ...',
              social_provider_text: 'Sign in with {{provider}}',
              link_text: "Already have an account? Sign in",
            },
            sign_up: {
              email_input_placeholder: 'Your email address',
              password_input_placeholder: 'Create a password',
              email_label: 'Email',
              password_label: 'Password',
              button_label: 'Sign up',
              loading_button_label: 'Signing up ...',
              social_provider_text: 'Sign up with {{provider}}',
              link_text: "Don't have an account? Sign up",
            },
            forgotten_password: {
              link_text: 'Forgot your password?',
              button_label: 'Send reset instructions',
              loading_button_label: 'Sending reset instructions ...',
              confirmation_text: 'Check your email for the password reset link',
            },
          },
        }}
      />
      <div className="mt-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p className="font-medium mb-2">Having trouble signing in?</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Make sure you're using the correct email address</li>
          <li>Check that your password is correct</li>
          <li>Use the "Forgot your password?" link below the sign-in form if you need to reset your password</li>
        </ul>
      </div>
    </div>
  );
};

export default Auth;