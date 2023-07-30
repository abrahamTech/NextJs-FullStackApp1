import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/Button/Button';

export const metadata = {
    title: 'Contact Info AbrahamTech',
    description: 'This is my Contact Page',
}

const Contact = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Let's Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image 
                        src="/contact.png"
                        alt=""    
                        fill={true}
                        className={styles.image}
                    />
                </div>

                <form action="" className={styles.form}>
                    <input type="text" placeholder="Enter your Name" className={styles.input} />
                    <input type="text" placeholder="Enter your Email" className={styles.input} />
                    <textarea cols="30" rows="10" placeholder="Enter your Message" className={styles.textArea}></textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    )
};

export default Contact;