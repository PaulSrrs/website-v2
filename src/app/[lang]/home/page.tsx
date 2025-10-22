import Link from "next/link";
import GithubIcon from "../../components/GithubIcon";
import LinkedinIcon from "../../components/LinkedinIcon";
import NextJsIcon from "../../components/NextJsIcon";
import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Image from "next/image";
import LangSwitcher from "../../components/LangSwitcher";
import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("../../components/ThemeSwitcher"));

export default async function Website({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return <main>
        <header className="w-full border-b border-[var(--header-border)]">
            <div className="mx-auto w-full max-w-7xl flex justify-end py-2 px-4">
                <div className="flex items-center">
                    <LangSwitcher lang={lang} />
                </div>
            </div>
        </header>

        <main className="w-full">
            <div className="mx-auto w-full max-w-7xl">
                <div className="py-8 px-4 md:py-28">
                    <section className="flex flex-col items-center justify-center md:flex-row-reverse md:justify-between">
                        <div className="flex flex-col items-center justify-center md:pr-[10%]">
                            <Image
                                className="rounded-full"
                                alt="Photo De Paul Surrans"
                                src="/pdp/paul.png"
                                height={180}
                                width={180}
                            />
                            <div className="flex flex-row items-center mt-4">
                                <h1 className="m-0 mr-4 text-xl font-bold">Paul Surrans</h1>

                                <a href="https://www.linkedin.com/in/paulsurrans/" className="flex w-5 h-5 ml-2 first:ml-0" target="_blank" rel="noreferrer">
                                    <LinkedinIcon />
                                </a>

                                <a href="https://github.com/PaulSrrs" className="flex w-5 h-5 ml-2 first:ml-0" target="_blank" rel="noreferrer">
                                    <GithubIcon />
                                </a>
                            </div>
                        </div>

                        <div className="md:max-w-[510px]">
                            <p className="text-xl md:text-3xl mt-8 md:mt-0">
                                <span className="text-[var(--deep-blue)]">{dict.welcome}</span> 😊,
                            </p>
                            <p className="text-base md:text-xl">
                                {dict.intro}
                                <Link className="text-[var(--deep-blue)] font-bold" href="#contact-me">
                                    &nbsp;{dict.contactMe}
                                </Link>.
                            </p>
                        </div>
                    </section>

                    <div className="h-0.5 w-2/3 my-10 md:my-28 mx-auto bg-[var(--deep-blue)]" />

                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-8">{dict.whoAmI}</h2>
                        <p className="text-base md:text-xl text-justify">{dict.whoAmIContent}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-8">{dict.achievements}</h2>

                        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-x-9 md:gap-y-7">
                            <a
                                href="https://app.woken.exchange/"
                                target="_blank"
                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02]"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/woken-bg.jpg")', filter: 'blur(3px) brightness(90%)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Woken
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">(Dapp)</p>
                            </a>

                            <a
                                href="https://wholesale.banking.societegenerale.com/fr/actus-opinions/contenus-pedagogiques/video/video/decouvrez-global-cash/"
                                target="_blank"
                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02]"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/societe-generale-bg.jpg")', filter: 'blur(3px) brightness(90%)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Société Générale
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">(Global cash)</p>
                            </a>

                            <a
                                href="https://keyboon.fr/"
                                target="_blank"
                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02]"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/keyboon-bg.jpeg")', filter: 'blur(3px) brightness(90%)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Keyboon
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">({dict.TMS})</p>
                            </a>

                            <a
                                href="https://cryptoast.fr/cryptoast-nouvelle-version-site-nouveau-logo/"
                                target="_blank"

                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02]"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/cryptoast-bg.jpg")', filter: 'blur(3px) brightness(90%)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Cryptoast
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">({dict.cryptoastV3})</p>
                            </a>

                            <a
                                href="https://paulsrrs.github.io/cryptoast_v3_snippet/"
                                target="_blank"
                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02]"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/cryptoast-bg.jpg")', filter: 'blur(3px) brightness(90%)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Cryptoast
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">(Snippet)</p>
                            </a>

                            <a
                                href="https://llmh.fr/"
                                target="_blank"
                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02] border border-white/30"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/llmh-bg.jpg")', filter: 'blur(3px)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Lomme Lille Métropole Handball
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">({dict.website})</p>
                            </a>

                            <a
                                href="https://sc-haubourdin-loos-handball.fr/"
                                target="_blank"
                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02] border border-white/30"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/schl-bg.jpg")', filter: 'blur(3px) brightness(50%)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Sporting Club Haubourdin Loos Handball
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">({dict.website})</p>
                            </a>

                            <a
                                href="https://safi.style/"
                                target="_blank"
                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02] border border-white/30"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/safi-bg.jpg")', filter: 'blur(3px)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Safi
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">({dict.website})</p>
                            </a>

                            <a
                                href="https://elodie-cholat.com/"
                                target="_blank"
                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02] border border-white/30"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/elodie-cholat-bg.jpg")', filter: 'blur(3px) brightness(50%)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Elodie Cholat
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">({dict.website})</p>
                            </a>

                            <a
                                href="https://marie-surrans.fr/"
                                target="_blank"
                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02] border border-white/30"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/marie-surrans-bg.jpg")', filter: 'blur(3px) brightness(50%)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Marie Surrans
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">({dict.website})</p>
                            </a>

                            <a
                                href="https://socrate.paul-surrans.fr/"
                                target="_blank"
                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02]"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/socrate-bg.jpg")', filter: 'blur(1px)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Socrate
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">(Landing page V2)</p>
                            </a>

                            <a
                                href="https://socrate-old.paul-surrans.fr/"
                                target="_blank"
                                className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto transition-transform duration-300 ease-out cursor-pointer hover:scale-[1.02]"
                            >
                                <div
                                    style={{ backgroundImage: 'url("/card-bg/socrate-bg.jpg")', filter: 'blur(1px)' }}
                                    className="absolute inset-0 bg-center bg-cover"
                                />
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    Socrate
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">(Landing page V1)</p>
                            </a>

                            <div className="relative flex flex-col items-center justify-center rounded-2xl py-12 px-6 overflow-hidden aspect-video h-auto cursor-default bg-gradient-to-br from-[var(--deep-blue)] to-black">
                                <h3 className="z-[1] text-center font-bold text-[1.375rem] md:text-[1.5rem] text-white drop-shadow mb-1">
                                    {dict.comingSoon}...
                                </h3>
                                <p className="z-[1] text-white text-center drop-shadow">({dict.stayConnected})</p>
                            </div>
                        </div>
                    </section>

                    {/*<section>
                                <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-8">{dict.skills}</h2>

                                <div className="px-[6vw] max-w-[688px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-8 place-items-center md:px-0">
                                    <div className="flex items-center justify-center">
                                        <Link href="https://angular.io/" legacyBehavior>
                                            <a className="flex" target="_blank" rel="noreferrer">
                                                <Image alt="Icône d'Angular" title="Angular" height={108} width={108} src="/skills/angular.svg" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Link href="https://reactjs.org/" legacyBehavior>
                                            <a className="flex" target="_blank" rel="noreferrer">
                                                <Image alt="Icône de ReactJs" title="ReactJs" height={86} width={97} src="/skills/reactjs.png" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Link href="https://nextjs.org/" legacyBehavior>
                                            <a className="flex" target="_blank" rel="noreferrer">
                                                <NextJsIcon />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Link href="https://nodejs.org/en" legacyBehavior>
                                            <a className="flex" target="_blank" rel="noreferrer">
                                                <Image alt="Icône de NodeJS" title="NodeJS" height={162} width={108} src="/skills/node-js.svg" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Link href="https://nestjs.com/" legacyBehavior>
                                            <a className="flex" target="_blank" rel="noreferrer">
                                                <Image alt="Icône de NestJS" title="NestJS" height={97} width={97} src="/skills/nestjs.svg" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Link href="https://wikipedia.org/wiki/Hypertext_Markup_Language" legacyBehavior>
                                            <a className="flex" target="_blank" rel="noreferrer">
                                                <Image alt="Icône de HTML" title="HTML" height={96} width={96} src="/skills/html5.png" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Link href="https://en.wikipedia.org/wiki/CSS" legacyBehavior>
                                            <a className="flex" target="_blank" rel="noreferrer">
                                                <Image alt="Icône de CSS" title="CSS" height={96} width={96} src="/skills/css3.png" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Link href="https://en.wikipedia.org/wiki/Javascript" legacyBehavior>
                                            <a className="flex" target="_blank" rel="noreferrer">
                                                <Image alt="Icône de JavaScript" title="Javascript" height={96} width={96} src="/skills/javascript.png" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Link href="https://www.typescriptlang.org/" legacyBehavior>
                                            <a className="flex" target="_blank" rel="noreferrer">
                                                <Image alt="Icône de Typescript" title="Typescript" height={96} width={96} src="/skills/typescript.png" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Link href="https://figma.com/" legacyBehavior>
                                            <a className="flex" target="_blank" rel="noreferrer">
                                                <Image alt="Icône de Figma" title="Figma" height={84} width={56} src="/skills/figma.png" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </section>*/}

                    {/* CONTACT */}
                    {/*<section id="contact-me">
                                <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-8">{dict.ContactMe} 👋</h2>
                                <p className="text-base md:text-xl">{dict.ContactMeIntro}</p>

                                <div className="max-w-[500px] w-full mx-auto grid gap-6 md:grid-cols-2 mt-4 md:mt-6">
                                    <div>
                                        <ContactForm src={dict.'demandes} title={dict.contactForm} />
                                    </div>
                                    <div>
                                        <ContactForm src={dict.ask} title={dict.contactForm} />
                                    </div>
                                </div>
                            </section>*/}

                    {/* USEFUL LINKS */}
                    {/*<section>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-8">{dict.usefulLinks}</h2>

            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6">
              <div className="bg-[var(--bg-foreground)] rounded-2xl p-6 md:p-10">
                <h3 className="text-lg md:text-xl font-semibold">{dict.myResume}</h3>
                <p className="my-4 md:my-6 text-[var(--card-description)]">{dict.downloadResume}</p>

                <div className="flex flex-row items-center">
                  <p className="mr-2 font-bold">{dict.download}</p>

                  <div className="flex justify-center items-center border border-[var(--deep-blue)] text-[var(--deep-blue)] rounded-full px-4 py-1.5 text-sm leading-5 ml-3 hover:bg-[var(--deep-blue)] hover:text-white transition-colors">
                    <a
                      href="/documents/CV_Paul_Surrans_2024.pdf"
                      className="flex py-[2px]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg width="15" height="12" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg">
                        <path
                          className="fill-[var(--deep-blue)] group-hover:fill-white transition-colors"
                          d="M14.303 6.35016C14.303 6.12541 14.211 5.90792 14.0483 5.74843L9.39967 0.985355C9.2157 0.804112 9.02467 0.724365 8.82655 0.724365C8.37372 0.724365 8.04825 1.0506 8.04825 1.49284C8.04825 1.72483 8.14023 1.92057 8.28174 2.06557L9.87373 3.7185L11.9256 5.63968L10.2841 5.53819H1.70859C1.23453 5.53819 0.909058 5.87167 0.909058 6.35016C0.909058 6.82139 1.23453 7.15488 1.70859 7.15488H10.2841L11.9256 7.05338L9.87373 8.97456L8.28174 10.6275C8.14023 10.7725 8.04825 10.9682 8.04825 11.2002C8.04825 11.6425 8.37372 11.9687 8.82655 11.9687C9.02467 11.9687 9.2157 11.8889 9.38552 11.7222L14.0483 6.94463C14.211 6.78514 14.303 6.56765 14.303 6.35016Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--bg-foreground)] rounded-2xl p-6 md:p-10 flex flex-col justify-between">
                <h3 className="text-lg md:text-xl font-semibold">{dict.siteMockUp}</h3>
                <p className="my-4 md:my-6 text-[var(--card-description)]">{dict.downloadMockUp}</p>

                <div className="flex flex-row items-center">
                  <p className="mr-2 font-bold">{dict.download}</p>

                  <a href="/documents/paul-surrans-website-mock-up.fig" className="flex" target="_blank" rel="noreferrer">
                    <div className="flex justify-center items-center border border-[var(--deep-blue)] text-[var(--deep-blue)] rounded-full px-4 py-1.5 text-sm leading-5 ml-3 hover:bg-[var(--deep-blue)] hover:text-white transition-colors">
                      .fig
                    </div>
                  </a>

                  <a href="/documents/paul-surrans-website-mock-up.pdf" className="flex" target="_blank" rel="noreferrer">
                    <div className="flex justify-center items-center border border-[var(--deep-blue)] text-[var(--deep-blue)] rounded-full px-4 py-1.5 text-sm leading-5 ml-3 hover:bg-[var(--deep-blue)] hover:text-white transition-colors">
                      .pdf
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>*/}
                </div>
            </div>
        </main>

        <footer className="w-full border-t border-[var(--header-border)]">
            <div className="px-4 py-2 mx-auto w-full max-w-7xl flex flex-row items-center justify-between">
                <p className="text-[var(--header-border)]">Paul Surrans © 2025</p>
                <div className="flex flex-row">
                    <a href="https://www.linkedin.com/in/paulsurrans/" className="flex w-5 h-5 ml-2 first:ml-0" target="_blank" rel="noreferrer">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className="fill-[var(--header-border)]"
                                d="M18.41 0.000139831H1.47C1.27958 -0.00250479 1.0905 0.0323873 0.913566 0.102824C0.73663 0.17326 0.575303 0.27786 0.438797 0.410652C0.302292 0.543443 0.193281 0.701824 0.117992 0.876749C0.0427024 1.05167 0.00260839 1.23972 0 1.43014V18.5701C0.00260839 18.7606 0.0427024 18.9486 0.117992 19.1235C0.193281 19.2985 0.302292 19.4568 0.438797 19.5896C0.575303 19.7224 0.73663 19.827 0.913566 19.8975C1.0905 19.9679 1.27958 20.0028 1.47 20.0001H18.41C18.6004 20.0028 18.7895 19.9679 18.9664 19.8975C19.1434 19.827 19.3047 19.7224 19.4412 19.5896C19.5777 19.4568 19.6867 19.2985 19.762 19.1235C19.8373 18.9486 19.8774 18.7606 19.88 18.5701V1.43014C19.8774 1.23972 19.8373 1.05167 19.762 0.876749C19.6867 0.701824 19.5777 0.543443 19.4412 0.410652C19.3047 0.27786 18.7895 0.17326 18.9664 0.102824C18.7895 0.0323873 18.6004 -0.00250479 18.41 0.000139831ZM6.03 16.7401H3.03V7.74014H6.03V16.7401ZM4.53 6.48014C4.11626 6.48014 3.71947 6.31578 3.42691 6.02323C3.13436 5.73067 2.97 5.33388 2.97 4.92014C2.97 4.5064 3.13436 4.10961 3.42691 3.81705C3.71947 3.5245 4.11626 3.36014 4.53 3.36014C4.7497 3.33522 4.97218 3.35699 5.18288 3.42402C5.39357 3.49105 5.58774 3.60183 5.75266 3.7491C5.91757 3.89637 6.04953 4.07682 6.13987 4.27862C6.23022 4.48043 6.27692 4.69904 6.27692 4.92014C6.27692 5.14124 6.23022 5.35985 6.13987 5.56166C6.04953 5.76346 5.91757 5.94391 5.75266 6.09118C5.58774 6.23845 5.39357 6.34923 5.18288 6.41626C4.97218 6.48329 4.7497 6.50505 4.53 6.48014ZM16.85 16.7401H13.85V11.9101C13.85 10.7001 13.42 9.91014 12.33 9.91014C11.9927 9.91261 11.6642 10.0184 11.3888 10.2133C11.1135 10.4082 10.9045 10.6828 10.79 11.0001C10.7117 11.2352 10.6778 11.4827 10.69 11.7301V16.7301H7.69C7.69 16.7301 7.69 8.55014 7.69 7.73014H10.69V9.00014C10.9625 8.52725 11.3589 8.13766 11.8364 7.87334C12.314 7.60902 12.8546 7.47999 13.4 7.50014C15.4 7.50014 16.85 8.79014 16.85 11.5601V16.7401Z"
                            />
                        </svg>
                    </a>

                    <a href="https://github.com/PaulSrrs" className="flex w-5 h-5 ml-2 first:ml-0" target="_blank" rel="noreferrer">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className="fill-[var(--header-border)]"
                                d="M10 0C4.475 0 0 4.58819 0 10.2529C0 14.7899 2.8625 18.6219 6.8375 19.9804C7.3375 20.0701 7.525 19.7625 7.525 19.4934C7.525 19.2499 7.5125 18.4425 7.5125 17.5838C5 18.058 4.35 16.9558 4.15 16.3791C4.0375 16.0843 3.55 15.1743 3.125 14.9308C2.775 14.7386 2.275 14.2644 3.1125 14.2516C3.9 14.2388 4.4625 14.9949 4.65 15.3025C5.55 16.8533 6.9875 16.4175 7.5625 16.1484C7.65 15.4819 7.9125 15.0334 8.2 14.777C5.975 14.5207 3.65 13.6364 3.65 9.71466C3.65 8.59965 4.0375 7.67689 4.675 6.95918C4.575 6.70286 4.225 5.65193 4.775 4.24215C4.775 4.24215 5.6125 3.97301 7.525 5.29308C8.325 5.06239 9.175 4.94704 10.025 4.94704C10.875 4.94704 11.725 5.06239 12.525 5.29308C14.4375 3.9602 15.275 4.24215 15.275 4.24215C15.825 5.65193 15.475 6.70286 15.375 6.95918C16.0125 7.67689 16.4 8.58683 16.4 9.71466C16.4 13.6492 14.0625 14.5207 11.8375 14.777C12.2 15.0975 12.5125 15.7126 12.5125 16.6738C12.5125 18.0452 12.5 19.1474 12.5 19.4934C12.5 19.7625 12.6875 20.0829 13.1875 19.9804C15.1726 19.2932 16.8976 17.9851 18.1197 16.2401C19.3418 14.4951 19.9994 12.4012 20 10.2529C20 4.58819 15.525 0 10 0Z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    </main>
}