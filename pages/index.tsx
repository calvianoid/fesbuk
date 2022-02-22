import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Fesbuk</title>
        <link rel="icon" href="/logo-fb.png" />
      </Head>

      {/* Header */}
      <Header />

      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  )
}

export default Home
