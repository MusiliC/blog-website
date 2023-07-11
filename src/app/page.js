import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png'
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design For Your Products</h1>
        <p className={styles.description}>
          Turning your idea into reality. We bring together the teams for global
          tech industry
        </p>
      <Button text="See our Works" url="/portfolio" />
      </div>

      {/*  */}
      <div className={styles.item}>
        <Image src={hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
