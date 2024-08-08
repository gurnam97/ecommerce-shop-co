"use client";

import React from "react";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { HomeBanner } from "@/components/HomeBanner";
import { Homepage } from "@/components/Homepage";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <Homepage />
    </main>
  );
}
