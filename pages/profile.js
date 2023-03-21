import Navigation from '@/components/Navigation/Navigation'
import Profile from '@/components/Profile/Profile'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from "./api/auth/[...nextauth]";

const profile = () => {
  return (
    <Navigation><Profile/></Navigation>

  )
}

export default profile


export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return { redirect: { destination: "/auth/signin" } };
  }

  return { props: {  } }

}