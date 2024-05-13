"use client"
import React from 'react'
import Navbar from '../components/Project/navbar'
import Post from "../components/feedComps/post"
import PostCard from "../components/feedComps/PostCard"
import fakePosts from "../components/feedComps/fakePosts"
import fakeGroups from "../components/feedComps/fakeGroups"
import Groups from "../components/feedComps/Groups"
import PopularHashtags from "../components/feedComps/HashTags"
import fakePopularHashtags from "../components/feedComps/fakeHashtags"
import ProfileSection from "../components/feedComps/profile"

export default function page(){
  return (
    <div className=' bg-white'>
        <Navbar />
        <div className=" flex flex-row w-full">


        <div className=" flex flex-col w-1/4 justify-center items-center"><ProfileSection userName={"hihi"} /></div>
        <div className=" flex flex-col w-2/4 justify-center items-center">
        <Post />
        {fakePosts.map((post)=>{
            return (
                <div className=' w-2/3 m-4'>
                    <PostCard post={post}/>
                </div>
            )
        })}
        </div>
        <div className=" flex flex-col w-1/4 justify-center items-center ">
            <Groups groups={fakeGroups} />
            <PopularHashtags hashtags={fakePopularHashtags} />
        </div>
      </div>
    </div>
        
        
  )
}
