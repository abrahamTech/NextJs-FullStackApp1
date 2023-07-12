import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                    src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    fill={true} 
                    alt='' 
                    className={styles.img}    
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nisi rerum inventore soluta, atque cumque adipisci nobis vel, a magni neque. Blanditiis nobis culpa, modi officia consequuntur ducimus. Natus, omnis.
                    <br /><br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, adipisci corporis! Adipisci sit quos necessitatibus, facere blanditiis dignissimos odit suscipit animi nihil aliquam? Facilis dolor sint, eveniet deserunt ea impedit!</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nisi rerum inventore soluta. <br />Atque cumque adipisci nobis vel, a magni neque. Blanditiis nobis culpa, modi officia consequuntur ducimus. Natus, omnis.
                    <br /><br />- Creative Illustrations
                    <br /><br />- Mobile Apps
                    <br /><br />- Dynamic Websites</p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
};

export default About;