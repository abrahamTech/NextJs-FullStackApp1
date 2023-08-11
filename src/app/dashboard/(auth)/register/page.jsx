"use client";

import React from "react";
import styles from "./page.module.css";

import Link from "next/link";

const Register = () => {

  

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" className={styles.input} placeholder="Enter your username" required/>
        <input type="email" className={styles.input} placeholder="Enter your email" required/>
        <input type="password" className={styles.input} placeholder="Password" required/>

        <button className={styles.button}>Register</button>
      </form>

      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
