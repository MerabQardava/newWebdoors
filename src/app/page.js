import Image from "next/image";
import styles from "./page.module.css";
import ServicesPage from "@/app/components/ServicesPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <ServicesPage/>

    </main>
  );
}
