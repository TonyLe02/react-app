/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";

const GithubStats = () => {
  return (
    <>
      <section className="text-white p-0 sm:px-16">
        <div className="flex flex-wrap">
          <ItemLayout className={"col-span-full"}>
            <div className="container mx-auto">
              <h2 className="text-sm md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500 mb-2 md:leading-snug">
                I have gained experience with various technologies and here are
                some of the tools and languages I&apos;ve become familiar with:
              </h2>

              <img
                className="w-full h-auto my-4"
                src={`https://skillicons.dev/icons?i=html,css,git,figma,js,npm,tailwind,react,php,mysql,postgres,docker,linux,svelte,cs`}
                alt="Icons"
                loading="lazy"
              />
              <p className="text-white text-base md:text-lg">
                I am very enthusiastic about learning new technologies. Many
                people have said that I look the happiest when I discover new
                ways to build things, and that truly makes me happy. This is the
                work I genuinely enjoy, and I could spend hours in an IDE
                without noticing the time passing by. While I haven&apos;t
                learned everything yet, I am a fast learner in the right
                environment, and I am grateful for the opportunity to intern and
                learn even more. 😊
              </p>
            </div>
          </ItemLayout>
          <ItemLayout
            className={"col-span-full py-4 pr-4 sm:col-span-6 md:col-span-4"}
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/top-langs?username=TonyLe02&theme=transparent&hide_border=false&title_color=22c55e&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
              alt="Top Languages"
              loading="lazy"
            />
          </ItemLayout>
          <ItemLayout
            className={"col-span-full py-4 sm:col-span-6 md:col-span-8"}
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api?username=TonyLe02&theme=transparent&hide_border=false&title_color=22c55e&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
              alt="Github Stats"
              loading="lazy"
            />
          </ItemLayout>
        </div>
      </section>
    </>
  );
};

export default GithubStats;
