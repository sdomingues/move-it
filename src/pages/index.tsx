import { ExperienceBar } from "../components/ExperienceBar";
import Head from 'next/head';
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css"
import { CompletedChallanges } from "../components/CompletedChallanges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App | Move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
      <section>
        <div>
            <Profile />
            <CompletedChallanges />
            <Countdown />
        </div>
        <div>
            <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>
    </div>
  );
}
