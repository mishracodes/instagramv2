import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useSession } from "next-auth/react"
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]";
import Navigation from '@/components/Navigation/Navigation'
import Dashboard from '@/components/Dashboard/Dashboard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Instagram v2</title>
        <meta name="description" content="Instagram clone by mishracodes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* //dashboard  */}
     <Navigation><Dashboard/></Navigation>

      

    </>

  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return { redirect: { destination: "/auth/signin" } };
  }

  return { props: {  } }

}