import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { ServicesClient } from './services-client'

export default async function ServicesPage(props: { params: Promise<any> }) {
    const params = await props.params;
    const { lang } = params;
    const dictionary = await getDictionary(lang);
    const dict = dictionary.services;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Header dict={dictionary.header} lang={lang} />
            <ServicesClient dict={dict} />
            <Footer dict={dictionary.footer} lang={lang} />
        </main>
    )
}
