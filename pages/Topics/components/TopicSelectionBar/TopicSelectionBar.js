import React, { useRef } from 'react';
import { View, Text } from 'react-native';

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
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg> */}
        </View>
        <View
          style={[styles.arrows__arrow, styles['arrow--right'], 'fc-row', 'hover']}
          onClick={() => scroll(false)}
        >
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg> */}
        </View>
      </View>
      <View style={styles.cont} ref={scrollRef}>
        {topics.map((topic) => {
          return (
            <View
              key={topic}
              style={joinstyles(
                styles.box,
                selectedTopics.includes(topic) && styles['box--selected']
              )}
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
