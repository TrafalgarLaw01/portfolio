import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { WorkClient } from './work-client'

export default async function WorkPage(props: { params: Promise<any> }) {
    const params = await props.params;
    const { lang } = params;
    const dictionary = await getDictionary(lang);
    const dict = dictionary.work;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <Header dict={dictionary.header} lang={lang} />
            <WorkClient dict={dict} bentoDict={dictionary.bento} lang={lang} />
            <Footer dict={dictionary.footer} lang={lang} />
        </main>
    )
}
