import styles from './home.module.css';
import Image from 'next/image'

export default function Blog() {
  return (
    <main>
      <article className={styles.first}>
        <h1 className={styles.title}>Sua dose diária de informação</h1>
        <div className={styles.text}>
          <h2>Incrível crescimento das IAs</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. 
          </p>
        </div>
        <Image
          className={styles.image}
          src="/astronaut.png"
          alt="astronaut"
          width={540}
          height={370}
        />

      </article>
      <article className={styles.second}>
        <h1 className={styles.secondtitle}>Últimas postagens</h1>
        <div className={styles.cardone}>
          <h2>Notícia muito importante</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.
          </p>
          <Image
            className={styles.robotimage}
            src="/robot.png"
            alt="robot"
            width={300}
            height={150}
          />
        </div>
        <div className={styles.cardtwo}>
          <h2>Notícia muito importante</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.
          </p>
          <Image
            className={styles.robotimage}
            src="/robot.png"
            alt="robot"
            width={300}
            height={150}
          />
        </div>
        <div className={styles.cardthree}>
          <h2>Notícia muito importante</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.
          </p>
          <Image
            className={styles.robotimage}
            src="/robot.png"
            alt="robot"
            width={300}
            height={150}
          />
        </div>

      </article>
    </main>
  )
}
