import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet
          </h1>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, hic corporis. Atque a illum vitae exercitationem libero! Quasi facilis beatae earum consectetur, natus maiores, itaque voluptate laboriosam, tenetur harum placeat.
            Quam sunt ullam totam provident dolore nobis a accusamus sapiente, excepturi asperiores quas maiores consectetur, dignissimos quia officiis, laborum impedit molestias sequi aspernatur repellendus facere maxime. Saepe atque molestiae vel.
          </p>

          <div className={styles.author}>
            <Image 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Emma Smith</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image 
            src="https://images.pexels.com/photos/3373974/pexels-photo-3373974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>

      </div>

      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet aperiam doloremque iusto fugiat provident perspiciatis beatae facilis maxime magnam vitae dolorum voluptatibus voluptas autem placeat, itaque cupiditate eveniet quam.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, praesentium eligendi dicta excepturi dolor dolorem aut consectetur veritatis rem enim fugiat esse reiciendis accusamus! Non quae architecto velit aperiam eum!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, eveniet cupiditate rem cumque voluptatem, fuga inventore quisquam blanditiis eius ut ducimus tempore saepe accusantium officia expedita praesentium et repellendus! Officiis.
          <br /><br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa necessitatibus et tempore numquam provident repudiandae, optio nam, laborum fugiat enim doloremque accusantium culpa molestias minus error, facilis eveniet! Quam, provident?
          Fugit ex delectus unde non ratione explicabo eveniet? Voluptas nesciunt quam possimus natus veniam inventore perspiciatis fugit voluptatum, deleniti ipsum quo nihil autem, reprehenderit suscipit, tempora aut a maiores sit.
          Doloribus maxime iste iure tempora explicabo ipsam fugiat, voluptatibus animi perspiciatis praesentium cum quo mollitia veritatis sunt consectetur similique commodi. Aliquam, non mollitia provident optio nesciunt numquam aspernatur voluptatibus minima.
          Quam asperiores architecto hic! Molestiae dicta voluptas ipsum animi quia hic libero laboriosam quo, omnis delectus qui officiis veritatis deserunt incidunt optio ipsam nemo! Fugiat libero dolores magnam illo veritatis.
        </p>
      </div>

    </div>
  )
}

export default BlogPost;