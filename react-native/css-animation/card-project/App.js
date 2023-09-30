import { StatusBar } from "expo-status-bar";
import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Card>
        <Ionicons name="pizza" color="#000" size={98} />
      </Card>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00a8ff;
`;

const Card = styled.View`
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
