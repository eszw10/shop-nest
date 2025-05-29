"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpDefault } from "@/lib/constants";
import Link from "next/link";
import { signUpWithCredentials } from "@/lib/actions/user.action";
import { useSearchParams } from "next/navigation";

const CredentialsSignUpForm = () => {
  const [data, action, isPending] = useActionState(signUpWithCredentials, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Name</Label>
          <Input
            id="name"
            name="name"
            required
            type="text"
            autoComplete="name"
            defaultValue={signUpDefault.name}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            autoComplete="email"
            defaultValue={signUpDefault.email}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            autoComplete="password"
            defaultValue={signUpDefault.password}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            required
            type="password"
            autoComplete="confirmPassword"
            defaultValue={signUpDefault.confirmPassword}
          />
        </div>
        <Button disabled={isPending} className="w-full">
          {isPending ? "submitting..." : "Sign Up"}
        </Button>
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link className="link" href="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignUpForm;
