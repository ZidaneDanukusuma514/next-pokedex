import Header from "@/components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Header title="pokedex " />
      <Head>
        <title>Pokedex {pathname}</title>
      </Head>
      <main></main>
    </>
  );
}
