import About from "./about/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
};

export default function PageHome() {
  return (
    <main >
    <About />
    </main>
);
}
