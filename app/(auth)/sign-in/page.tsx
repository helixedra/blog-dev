"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Button, Input } from "@/components/shared";
import Image from "next/image";

export default function SignInPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
      // newUserCallbackURL: "/",
    });
  };

  const signInWithGitHub = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await authClient.signIn.email(
        {
          email,
          password,
          callbackURL: "/",
        }
        // {
        //   onRequest: (ctx) => {
        //     //show loading
        //   },
        //   onSuccess: () => {
        //     //redirect to the dashboard or sign in page
        //     // (e.target as HTMLFormElement).reset();
        //   },
        //   onError: (ctx) => {
        //     // display the error message
        //     alert(ctx.error.message);
        //   },
        // }
      );
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center -mt-8">
      <div className="flex flex-col gap-2 max-w-md">
        <h1>Sign In</h1>
        <div className="text-sm text-zinc-600">
          Get started with your email or social account
        </div>
        <div className="flex flex-col gap-2 space-y-4">
          <div className="flex flex-col gap-4 py-6">
            <Button
              variant="outline"
              size="lg"
              onClick={signInWithGoogle}
              type="button"
              className="flex items-center gap-2 text-sm hover:opacity-80"
            >
              <Image
                src="/images/google-g-logo.svg"
                alt="Google"
                width={20}
                height={20}
              />
              Sign in with Google
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={signInWithGitHub}
              type="button"
              className="flex items-center gap-2 text-sm hover:opacity-80"
            >
              <Image
                src="/images/github-logo.svg"
                alt="GitHub"
                width={20}
                height={20}
              />
              Sign in with GitHub
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-[1px] bg-zinc-200"></div>
          <div className="text-sm text-zinc-400">or</div>
          <div className="flex-1 h-[1px] bg-zinc-200"></div>
        </div>
        <div className="flex flex-col py-6">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
            <div className="text-sm text-zinc-500 ml-auto -mt-2">
              <Link href="/reset-password" className="text-black ml-1">
                Forgot password?
              </Link>
            </div>
            <Button className="mt-4" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign In"}
            </Button>
          </form>
          <div className="text-sm text-zinc-500 mt-6">
            Don't have an account?
            <Link className="text-black ml-1" href="/sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
