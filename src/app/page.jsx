import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';

export default function Home() {
  return (
    <div>
      {/* Import the image as a component, You don't need to write the width and height property, but you can asign width and height in a css class*/}
      <Image src={Hero} alt='' className={styles.img} />
    
      {/* Import the image from URL
      <Image  width={500} height={750} src="https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Sculpture' /> */}
    </div>
  )
};
