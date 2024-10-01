import { SignIn } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const SignInPage = () => {
  return (
    <main>
      <div className="flex justify-center  items-center glassmorphism-auth h-screen w-full">
        <SignIn
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </main>
  );
};

export default SignInPage;
