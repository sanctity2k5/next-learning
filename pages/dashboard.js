import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import useSWR from 'swr';
import { signIn, useSession } from 'next-auth/react';

const  fetcher = async () => {
    const response = await fetch(`http://localhost:3001/dashboard`)
    const data = await response.json()
    return data;
}
export default function dashboard() {
    const { data: session, status } = useSession()
    const { data, error, isLoading } = useSWR('http://localhost:3001/dashboard', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return "loading"
    
    return (
        <>
        {session? 
        <Layout>
           <div>
                <h1>Dashboard</h1>
                <h2>Posts - {data.posts}</h2>
                <h2>Comments - {data.comments}</h2>
                <h2>Likes - {data.likes}</h2>
                <h2>Following - {data.following}</h2>
                <h2>Followers - {data.followers}</h2>    

    </div>
        </Layout> : signIn()
        }
        </>
    )
}
