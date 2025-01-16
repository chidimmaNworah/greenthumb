import React from "react";
import styles from "./styles.module.scss";
import localFont from "next/font/local";
import { MdSmartDisplay } from "react-icons/md";

const geistSans = localFont({
  src: "../../../pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function SecondHero() {
  return (
    <>
      <div
        className={`${geistSans.variable} ${geistMono.variable} h-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center px-8 sm:px-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <div className="flex flex-col gap-8 row-start-2 items-center items-start">
          <h1 className="text-2xl">KNOW FOOD, NO HUNGER</h1>
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center w-full h-full">
              <img
                src="/banner.jpg"
                alt=""
                className={`${styles.backdrop} md:w-[50%] rounded-lg`}
              />
              <div className=" absolute  top-[50%] left-[50%] text-white text-sm w-[50px] flex flex-col items-center">
                <p className="border border-white p-2 rounded">
                  <MdSmartDisplay className=" text-[30px]" />
                </p>{" "}
                Play
              </div>
            </div>
            <p className="text-sm text-center font-[family-name:var(--font-geist-mono) mb-6">
              Explore with Kimmora who travels to Bauchi State in Nigeria to
              uncover <br />
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                Hidden Salivating dishes
              </code>
              .
            </p>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#8CD829]"
              href="/recepies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdSmartDisplay className="text-white" />
              Explore more videos →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
