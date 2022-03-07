import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
}

const Container = styled.div`
  background-color: yellow;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
