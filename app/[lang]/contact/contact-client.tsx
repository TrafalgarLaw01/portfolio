'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import * as React from 'react'


function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 10h5a.5.5 0 0 0 1-1V9a.5.5 0 0 0-.5-.5H14a.5.5 0 0 0-1 1v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 1-1v-2a.5.5 0 0 0-.5-.5h-2.5" /> {/* Simplified phone/chat shape, actually let's use a standard phone-like path or just the bubble */}
            <path d="M9 10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v1z" stroke="none" />
            {/* Standard WhatsApp-ish path */}
            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473.05-.673.35-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.418.249-.694.249-1.289.173-1.418-.074-.125-.272-.2-.572-.35z" fill="currentColor" stroke="none" />
        </svg>
    )
}

function ContactForm({ dict }: { dict: any }) {
    const defaultNumber = "5562982400749";

    // Create state to manage selected subject and optional name
    const [name, setName] = React.useState("");
    const [subject, setSubject] = React.useState("general");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subjects = dict.form.subjects;
        const selectedMessage = subjects[subject] || subjects.general;

        // Construct the message
        let finalMessage = selectedMessage;
        if (name.trim()) {
            finalMessage = `Olá! Meu nome é ${name}. ${selectedMessage}`;
        }

        const encodedMessage = encodeURIComponent(finalMessage);
        const url = `https://wa.me/${defaultNumber}?text=${encodedMessage}`;

        // Redirect
        window.open(url, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">{dict.form.name}</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={dict.form.placeholderName}
                        className="w-full bg-zinc-900 border-b border-white/10 focus:border-green-500 bg-transparent px-4 py-4 outline-none transition-colors text-white placeholder:text-gray-700 hover:border-white/20 text-lg"
                    />
                </div>

                {/* Subject Selection (Custom Select/Radio style could be better, but native Select for simplicity first) */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">{dict.form.goal}</label>
                    <div className="grid grid-cols-1 gap-3">
                        {Object.entries(dict.form.subjects).map(([key, label]: [string, any]) => (
                            <label
                                key={key}
                                className={cn(
                                    "flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 group",
                                    subject === key
                                        ? "bg-green-500/10 border-green-500/50"
                                        : "bg-zinc-900/50 border-white/5 hover:border-white/10"
                                )}
                            >
                                <input
                                    type="radio"
                                    name="subject"
                                    value={key}
                                    checked={subject === key}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="hidden" // Custom radio UI
                                />
                                <div className={cn(
                                    "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                                    subject === key ? "border-green-500 bg-green-500" : "border-gray-600"
                                )}>
                                    {subject === key && <div className="w-2 h-2 rounded-full bg-black" />}
                                </div>
                                <span className={cn(
                                    "text-base transition-colors",
                                    subject === key ? "text-green-400 font-medium" : "text-gray-400 group-hover:text-gray-300"
                                )}>
                                    {label as string}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <MagneticButton>
                    <button type="submit" className="group relative z-10 px-8 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] flex items-center gap-3 w-full justify-center text-lg">
                        <WhatsAppIcon className="w-6 h-6 fill-black" />
                        {dict.form.action}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </MagneticButton>
            </div>
        </form>
    )
}

function ContactCard({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "bg-zinc-900/50 border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-white/10 transition-colors relative group",
                className
            )}
        >
            {children}
        </motion.div>
    )
}

export function ContactClient({ dict }: { dict: any }) {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <section className="pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto text-center md:text-left">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                >
                    {dict.title} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{dict.highlight}</span>
                </motion.h1>
            </section>

            <section className="pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Main Form Area */}
                    <ContactCard className="lg:col-span-2 min-h-[500px]">
                        <ContactForm dict={dict} />
                    </ContactCard>

                    {/* Sidebar Info */}
                    <div className="space-y-6">

                        {/* Email Direct */}
                        <ContactCard delay={0.2} className="bg-gradient-to-br from-zinc-900 to-black">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-purple-500/10 rounded-full text-purple-500">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold">{dict.direct.title}</h3>
                            </div>
                            <p className="text-gray-400 mb-2">{dict.direct.desc}</p>
                            <a href="mailto:hello@pontus.corp" className="text-2xl font-medium text-white hover:text-purple-400 transition-colors">hello@pontus.corp</a>
                        </ContactCard>

                        {/* Global Hubs */}
                        <ContactCard delay={0.3}>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-blue-500" /> {dict.hubs}
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 hover:pl-2 transition-all cursor-default">
                                    <span className="text-gray-300">New York</span>
                                    <span className="text-xs text-gray-600 font-mono">EST</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 hover:pl-2 transition-all cursor-default">
                                    <span className="text-gray-300">Tokyo</span>
                                    <span className="text-xs text-gray-600 font-mono">JST</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 hover:pl-2 transition-all cursor-default">
                                    <span className="text-gray-300">London</span>
                                    <span className="text-xs text-gray-600 font-mono">GMT</span>
                                </li>
                            </ul>
                        </ContactCard>

                    </div>
                </div>
            </section>
        </main>
    )
}
