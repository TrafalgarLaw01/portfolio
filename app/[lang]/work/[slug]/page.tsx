import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { ProjectClient } from './project-client'

export default async function ProjectDetailPage(props: { params: Promise<any> }) {
    const params = await props.params;
    const { lang, slug } = params;
    const dictionary = await getDictionary(lang);
    const dict = dictionary.work.detail;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <Header dict={dictionary.header} lang={lang} />
            <ProjectClient dict={dict} slug={slug} lang={lang} />
            <Footer dict={dictionary.footer} lang={lang} />
        </main>
    )
}
