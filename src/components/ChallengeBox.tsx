import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo Desafio</strong>
            <p>Levante e se alongue</p>
          </main>

          <footer>
            <button 
            type="button"
            className={styles.challengeFailedButton}
            >Fallhei
            </button>
            <button 
            type="button"
            className={styles.challengeSucceededButton}
            >Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de levels completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
