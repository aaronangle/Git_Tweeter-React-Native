import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

export const TopicSelectionBar = () => {
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
    <>
      <View style={[styles.arrows, 'fc-row']}>
        <View style={[styles['arrow--left'], 'fc-row', 'hover']} onClick={() => scroll(true)}>
          <Image
            source={require('../../../../assets/chevron-left-regular-24.png')}
            style={styles.details__image}
          />
        </View>
        <View
          style={[styles.arrows__arrow, styles['arrow--right'], 'fc-row', 'hover']}
          onClick={() => scroll(false)}
        >
          <Image
            source={require('../../../../assets/chevron-right-regular-24.png')}
            style={styles.details__image}
          />
        </View>
      </View>
      <View style={styles.cont} ref={scrollRef}>
        {topics.map((topic) => {
          return (
            <View
              key={topic}
              style={[styles.box, selectedTopics.includes(topic) && styles['box--selected']]}
              onClick={() => handleClick(topic)}
            >
              <Text style={styles['box__text']}>{topic}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 3,
  },
  row__image: {
    height: 18,
    width: 18,
  },
});
