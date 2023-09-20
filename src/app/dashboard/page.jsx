"use client";

import React, { useEffect, useState } from 'react';
import styles from "./page.module.css";

import useSWR from "swr";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

const Dashboard = () => {

  /* //FETCH with useEffect() Hook
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {

    const getData = async () => {

      setIsLoading(true);

      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store"
      });

      if(!res.ok){
        setError(true)
      }

      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };
    getData()
  }, []);
 */

  const session = useSession();
  console.log(session)

  const router = useRouter();

  //FETCH with SWR Hook

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, mutate, error, isLoading} = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

  //console.log(data)
    

  if(session.status === "loading") {
    return <p>Loading...</p>;
  }

  if(session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  //handleSubmit
  const handleSubmit = async (e) => {
    //For don't refresh the page with the formsubmit
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate(); //revalidate our data
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  }

  if(session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading 
            ? "Loading..." 
            : data.map(post => (
            <div className={styles.post} key={post.id}>
              <div className={styles.imgContainer}>
                <Image src={post.img} alt="" width={200} height={100} />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
            </div>
          ))}
        </div>

        <form action="" className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input className={styles.input} type="text" placeholder="Title" />
          <input className={styles.input} type="text" placeholder="Desc" />
          <input className={styles.input} type="text" placeholder="Image" />
          <textarea className={styles.textArea} placeholder="Content" cols="30" rows="10"></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    )
  }
}

export default Dashboard;