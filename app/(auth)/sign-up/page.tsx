"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Button, Input } from "@/components/shared";
import Image from "next/image";

export default function SignUpPage() {
  const [name, setName] = React.useState("");
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
      await authClient.signUp.email(
        {
          email,
          name: "",
          password,
          image: "",
          callbackURL: "/sign-in",
        },
        {
          onRequest: (ctx) => {
            //show loading
          },
          onSuccess: () => {
            //redirect to the dashboard or sign in page
            (e.target as HTMLFormElement).reset();
          },
          onError: (ctx) => {
            // display the error message
            // alert(ctx.error.message);
          },
        }
      );
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="font-bold text-2xl hover:opacity-70 absolute top-4">
        <Link href="/">{`RW`}</Link>
      </div>
      <div className="w-full h-screen flex items-center justify-center -mt-8">
        <div className="flex flex-col gap-2 max-w-md">
          {error && <div className="text-red-500">{error}</div>}
          <h1>Sign Up</h1>
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
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                label="Name"
                autoComplete="off"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                autoComplete="off"
                required
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                autoComplete="off"
                required
              />

              <Button className="mt-4" type="submit" disabled={loading}>
                {loading ? "Loading..." : "Sign Up"}
              </Button>
            </form>
            <div className="text-sm text-zinc-500 mt-6">
              Already have an account?
              <Link className="text-black ml-1" href="/sign-in">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
