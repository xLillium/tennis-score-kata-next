import styles from './page.module.css';
import { TennisGameClient } from './TennisGameClient';

export default function TennisGame() {
    return (
        <main className={styles.main}>
            <TennisGameClient />
        </main>
    );
}
