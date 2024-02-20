"use client";

import styles from "../../styles/page.module.css";
import Card from "@/components/card/Card";
export default function Home() {
 
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <Card url='/next.svg' name='Kavya' content="I am Kavya Rajput currently pursuing my Internship at EpVi India" />
      <Card url='/next.svg' name='Ananya' content="I am Ananya Singh currently pursuing my btech from ABS college. I am from Bijnore. i am currently in 3rd year of my college and my branch is ECE. I love coding and  web development. i have made 25+ projects of web development." />
      <Card url='/next.svg' name='Arnima' content="I am Kavya Rajput currently pursuing my Intern at EpVi India" />
      <Card url='/next.svg' name='Apeksha' content="I am Kavya Rajput currently pursuing my Intern at EpVi India" />
      </div>
       
    </main>
  );
}
