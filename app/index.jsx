import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import emojis from "../constants/emojis";
import styles from "../constants/styles";

const app = () => {
  const sets = Object.keys(emojis);
  const [count, setCount] = useState(0);
  const [emojiSet, setEmojiSet] = useState(sets[0]);

  const handleEmojiClick = function (dir = 1) {
    setCount((prevCount) => {
      if (prevCount + dir < 0) {
        return prevCount + dir + emojis[emojiSet].length;
      } else {
        return (prevCount + dir) % emojis[emojiSet].length;
      }
    });
  };

  const handleSetSelect = function (name) {
    setEmojiSet(name);
    setCount(0);
  };

  return (
    <View style={styles.body}>
      <View style={styles.main}>
        {sets.map((set) => {
          return (
            <Pressable
              key={set}
              style={styles.setButton}
              onPress={() => handleSetSelect(set)}
            >
              <Text style={styles.setButtonText} selectable={false}>
                {emojis[set][0]}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <Pressable
        style={({ pressed }) => {
          return {
            ...styles.up,
            ...styles.bigButton,
            backgroundColor: pressed ? "lightgreen" : "limegreen",
          };
        }}
        onPress={() => handleEmojiClick()}
      >
        <Text style={styles.bigButtonText} selectable={false}>
          {emojis[emojiSet][count]}
        </Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => {
          return {
            ...styles.down,
            ...styles.bigButton,
            backgroundColor: pressed ? "coral" : "tomato",
          };
        }}
        onPress={() => handleEmojiClick(-1)}
      >
        <Text style={styles.bigButtonText} selectable={false}>
          ⬅️
        </Text>
      </Pressable>
      <Text style={styles.foot} selectable={false}>
        {emojiSet.charAt(0).toUpperCase() + emojiSet.slice(1).replace("_", " ")}
        : {count + 1}/{emojis[emojiSet].length}
      </Text>
    </View>
  );
};

export default app;
