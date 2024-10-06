/* eslint-disable */

import React from "react";
import ItemLayout from "./ItemLayout";

const GithubStats = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <ItemLayout className={"col-span-full"}>
          <section id="internship" className="text-white p-8">
            <div className="container mx-auto">
              <h2 className="text-sm md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500 mb-2 md:leading-snug">
                After three years of being an IT student, I have gained
                experience within various technologies and here are some of the
                tools and languages I am familiar with:
              </h2>

              <img
                className="w-full h-auto my-4"
                src={`https://skillicons.dev/icons?i=html,css,git,figma,js,npm,tailwind,react,php,mysql,postgres,docker,linux,svelte,cs`}
                alt="Icons"
                loading="lazy"
              />
              <p className="text-white">
                I am a very enthusiastic person when it comes to learning new
                technologies. Many people have said that I look the happiest
                when I discover new ways to build things, and that makes me very
                happy. Because this really is the work I enjoy doing, I could
                spend hours in an IDE and time would fly by without me knowing
                it. I haven't learned everything yet, but I am a really fast
                learner in the right environment, and I'm happy I got the chance
                to intern in a great learning environment like at Swipload 😊
              </p>
            </div>
          </section>
        </ItemLayout>
        <ItemLayout className={"col-span-full p-4 sm:col-span-6 md:col-span-4"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=TonyLe02&theme=transparent&hide_border=false&title_color=22c55e&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Top Languages"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full p-4 sm:col-span-6 md:col-span-8"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=TonyLe02&theme=transparent&hide_border=false&title_color=22c55e&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Github Stats"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </>
  );
};

export default GithubStats;
