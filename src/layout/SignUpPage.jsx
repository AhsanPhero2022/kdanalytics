import { SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const SignUpPage = () => {
  return (
    <main className="relative h-screen w-full">
      <div className="flex justify-center  items-center glassmorphism-auth h-screen w-full">
        <SignUp
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </main>
  );
};

export default SignUpPage;
