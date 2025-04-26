"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Button, Input } from "@/components/shared";

export default function SignUpPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

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
            alert(ctx.error.message);
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
    <div>
      <h1>SignUp</h1>
      <div>
        <form
          className="flex flex-col gap-2 max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </Button>
        </form>
        <Link href="/sign-in">Already have an account? Sign in</Link>
      </div>
    </div>
  );
}
