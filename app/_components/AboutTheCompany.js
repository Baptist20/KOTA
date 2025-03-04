import {
  BanknotesIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  LightBulbIcon,
} from "@heroicons/react/20/solid";

import Image from "next/image";

export default function AboutTheComapny() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">
                Our Academy
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                KOTA. KEYZIE ONLINE TRADING ACADEMY
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Imagine having the ability to predict market movements, make
                informed decisions, and consistently grow your portfolio—all
                while navigating the complexities of global currencies with
                ease. At KOTA, we don’t just teach you how to trade; we equip
                you with the skills to thrive in one of the most lucrative
                financial markets in the world.
              </p>
              <p className="mt-6 text-xl/8 text-gray-700">
                Join us today and embark on a transformative journey where
                education meets opportunity. Your path to financial
                freedom starts here
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt="background"
            src="/background3.jpg"
            width={100}
            height={100}
            className="w-[20rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[30rem]"
            quality={100}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                Learning forex trading as a young Nigerian can be a valuable
                skill for several reasons:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BanknotesIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Financial Independence -
                    </strong>{" "}
                    It allows you to take control of your financial future
                    without relying solely on traditional employment.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GlobeAltIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Global Market Access -
                    </strong>{" "}
                    This exposure to international markets can broaden your
                    financial knowledge and opportunities.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Low Barrier to Entry -
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LightBulbIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Skill Development -
                    </strong>{" "}
                    Forex trading teaches valuable skills such as financial
                    analysis, risk management, and decision-making. These skills
                    are transferable and can be useful in other areas of life
                    and business.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Forex trading can be a powerful tool for young Nigerians to
                achieve financial independence, develop valuable skills, and
                navigate economic challenges. However, it requires dedication,
                continuous learning, and a disciplined approach to succeed.
                Start by educating yourself, practicing with demo accounts, and
                seeking guidance from experienced traders.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No money? No problem.
              </h2>
              <p className="mt-6">
                Forex trading is accessible even with low funds, but success
                requires discipline, education, and proper risk management. By
                starting small, leveraging technology, and focusing on
                consistent growth, young Nigerians can use forex trading as a
                tool to build wealth and achieve financial independence over
                time. Always remember that trading involves risks, and it’s
                important to trade responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
