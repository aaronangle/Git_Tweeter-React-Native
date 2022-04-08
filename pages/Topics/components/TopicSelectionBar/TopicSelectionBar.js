import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';

const topics = [
  'JavaScript',
  'React',
  'Redux',
  'C#',
  'C++',
  'C',
  'Java',
  'HTML',
  'CSS',
  'Go',
  'Python',
  'Node',
  'SQL',
  'MongoDB',
  'TypeScript',
  'Vue',
  'Angular',
  'Rust',
  'Ruby',
  'Kotlin',
  'Swift',
];

export const TopicSelectionBar = ({ selectedTopics, setSelectedTopics }) => {
  const scrollRef = useRef(null);

  function handleClick(topic) {
    const isInArray = selectedTopics.includes(topic);
    if (isInArray && selectedTopics.length > 1) {
      setSelectedTopics(selectedTopics.filter((el) => el !== topic));
    } else if (!isInArray && selectedTopics.length <= 4) {
      setSelectedTopics([...selectedTopics, topic]);
    }
  }

  function scroll(scrollRight) {
    if (scrollRight) {
      scrollRef.current.scrollLeft -= scrollRef.current.clientWidth;
    } else {
      scrollRef.current.scrollLeft += scrollRef.current.clientWidth;
    }
  }

  return (
    <ScrollView horizontal={true}>
      <View style={styles.row} ref={scrollRef}>
        {topics.map((topic) => {
          return (
            <TouchableNativeFeedback key={topic} onPress={() => handleClick(topic)}>
              <View style={[styles.box, selectedTopics.includes(topic) && styles['box--selected']]}>
                <Text
                  style={[
                    styles['box__text'],
                    selectedTopics.includes(topic) && styles['box__text--selected'],
                  ]}
                >
                  {topic}
                </Text>
              </View>
            </TouchableNativeFeedback>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 5,
    overflow: 'scroll',
    flexWrap: 'nowrap',
  },
  box: {
    padding: 10,
    borderRadius: 9999,
    minWidth: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f8fa',
    marginRight: 5,
  },
  'box--selected': {
    backgroundColor: '#1da1f2',
  },
  'box__text--selected': {
    color: 'white',
  },
  box__text: {
    fontSize: 20,
    color: 'black',
  },
});
