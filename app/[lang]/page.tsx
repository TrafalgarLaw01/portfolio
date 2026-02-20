import { Hero } from "@/components/home/hero";
import { TechMarquee } from "@/components/home/tech-marquee";
import { BentoGrid } from "@/components/home/bento-grid";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Home(props: { params: Promise<any> }) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Header dict={dictionary.header} lang={lang} />
      <Hero dict={dictionary.hero} />
      <TechMarquee />
      <BentoGrid dict={dictionary.bento} lang={lang} />
      <Footer dict={dictionary.footer} lang={lang} />
    </main>
  );
}
