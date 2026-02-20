import Link from 'next/link'

export function Footer({ dict, lang }: { dict: any, lang: string }) {
    return (
        <footer className="w-full border-t border-white/10 bg-black pb-10 pt-16">
            <div className="mx-auto max-w-[1400px] px-4 md:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-2xl font-black tracking-tighter text-white">PONTUS</h2>
                        <p className="mt-2 text-sm text-gray-500">
                            {dict.studioDesc}
                        </p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 text-center md:text-left">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{dict.studio}</h3>
                            <Link href={`/${lang}/work`} className="text-sm text-gray-500 hover:text-white transition-colors">{dict.work}</Link>
                            <Link href={`/${lang}/about`} className="text-sm text-gray-500 hover:text-white transition-colors">{dict.about}</Link>
                            <Link href={`/${lang}/contact`} className="text-sm text-gray-500 hover:text-white transition-colors">{dict.contact}</Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{dict.social}</h3>
                            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Twitter</Link>
                            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Instagram</Link>
                            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">LinkedIn</Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{dict.legal}</h3>
                            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy</Link>
                            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-white/5 pt-8 md:flex-row">
                    <p className="text-xs text-gray-600">
                        &copy; {new Date().getFullYear()} Pontus Corp. {dict.rights}
                    </p>
                </div>
            </div>
        </footer>
    )
}
