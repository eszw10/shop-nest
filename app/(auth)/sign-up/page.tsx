import Logo from "@/components/shared/header/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CredentialsSignInForm from "./sign-up-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const SignUpPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();
  if (session) redirect(callbackUrl ?? "/");
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Logo
            height={100}
            width={100}
            withLabel={false}
            className="flex-center"
          />
          <CardTitle className="text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Enter your information below to sign up
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialsSignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
