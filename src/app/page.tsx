'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950">
      {/* Hero Section with Cool Colors */}
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Cool Digital Experience
          </h1>
          <p className="mt-6 text-xl text-cyan-100 max-w-[600px] mx-auto">
            Discover a refreshing digital experience with our modern design and cool color palette.
          </p>
          <div className="mt-12 flex gap-4 justify-center">
            <Button size="lg" className="px-8 bg-cyan-600 hover:bg-cyan-700 text-white">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-cyan-400 text-cyan-300 hover:text-cyan-100 hover:bg-cyan-950/50">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section with Cool Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 border-t-2 border-t-cyan-500">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Lightning Fast</h3>
              <p className="text-cyan-100/80 leading-relaxed">
                Experience blazing performance with our optimized platform built for speed and efficiency.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 border-t-2 border-t-blue-500">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Secure & Reliable</h3>
              <p className="text-cyan-100/80 leading-relaxed">
                Your data is protected with enterprise-grade security and our reliable infrastructure.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 border-t-2 border-t-purple-500">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Intuitive Design</h3>
              <p className="text-cyan-100/80 leading-relaxed">
                Enjoy a seamless user experience with our thoughtfully crafted interface and design system.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section with Cool Gradient */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-[800px] mx-auto p-10 rounded-2xl bg-gradient-to-r from-slate-800/80 to-indigo-900/80 backdrop-blur-md border border-slate-700 shadow-lg shadow-indigo-900/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">
              Ready to Experience the Cool?<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-cyan-100/80 mb-8 max-w-[600px] mx-auto">
              Join thousands of users who have already upgraded to our cool new platform. Start your journey today with our free trial.
            </p>
            <Button className="px-8 py-6 text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-blue-700/30">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer with Cool Colors */}
      <footer className="container mx-auto px-4 py-12 border-t border-slate-800">
        <div className="text-center text-cyan-200/60 text-sm">
          © 2024 Cool Digital Experience. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
