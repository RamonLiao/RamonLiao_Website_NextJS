import Image from "next/image";
import styles from "./styles/page.module.css";
import BackgroundImg from "./components/backgroundImg";

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
            I am a full-stack developer, a dream achiever, and a blockchain
            believer. I believe that technology can turn the impossible into
            possible!
          </p>
          <p>
            And don’t forget to keep smiling and positive to this beautiful
            world!
          </p>
          <p>Cheers!</p>
        </section>
        <section className={styles.right}>
          <Image
            className="myPic"
            src="/images/ProfessionalPhoto.png"
            alt="Selfie"
            width={100}
            height={100}
          />
        </section>
      </main>
      <BackgroundImg className={styles.backgroundImg} />
    </>
  );
}
