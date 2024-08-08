import React from "react";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { HomeBanner } from "@/components/HomeBanner";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <HomeBanner />
    </main>
  );
}
