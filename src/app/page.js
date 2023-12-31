import Image from "next/image";
import styles from "@/styles/page.module.css";
import BackgroundImg from "@/components/backgroundImg";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.left}>
          <h1>
            Hi, I am <br />
            Yu-Cheng Liao.
          </h1>
          <p>
            I am a full-stack developer driven by ambitious goals and a strong
            belief in blockchain tech. I am convinced that technology can turn
            the impossible into possible!
          </p>
          <p>
            And don&apos;t forget to keep positive and smiling to this beautiful
            world!
          </p>
          <p>Cheers!</p>
        </section>
        <section className={styles.right}>
          <Image
            className={styles.myPic}
            src="/images/ProfessionalPhoto.png"
            alt="Selfie"
            width={100}
            height={100}
          />
        </section>
        <div className={styles.bkgContainer}>
          <BackgroundImg />
          <div className={styles.bkgRound}></div>
        </div>
      </main>
    </>
  );
}
