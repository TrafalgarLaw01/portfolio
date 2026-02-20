import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { AboutClient } from './about-client' // Assuming AboutClient is exported from about-client.tsx

export default async function AboutPage(props: { params: Promise<any> }) {
    const params = await props.params;
    const { lang } = params;
    const dictionary = await getDictionary(lang);
    const dict = dictionary.about;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <Header dict={dictionary.header} lang={lang} />
            <AboutClient dict={dict} />
            <Footer dict={dictionary.footer} lang={lang} />
        </main>
    )
}
