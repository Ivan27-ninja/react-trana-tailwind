import React from "react";
import heroImg from "assets/img/HeroImg.png";
import { Button } from "components";

export default function Dashboard() {
  return (
    <div className="relative mx-4 overflow-hidden rounded-3xl">
      <img src={heroImg} className="w-full h-auto" alt="Hero" />
      <Button
        color="secondary"
        size="medium"
        className="absolute bottom-0 right-0"
      >
        Edit Cover Media
      </Button>
    </div>
  );
}
