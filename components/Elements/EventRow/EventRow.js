import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

import { CommitsDropdown } from '../CommitsDropdown';
import { Avatar } from '../Avatar';

import { formatEventTime } from '../../../utils';

export const EventRow = ({ event }) => {
  const [showCommits, setShowCommits] = useState(false);

  function longPress() {
    if (!event.payload.commits) return;
    setShowCommits((c) => !c);
  }
  return (
    <TouchableNativeFeedback onLongPress={longPress}>
      <View style={styles.row}>
        <View style={styles.row__heading}>
          <Avatar img={event.actor.avatar_url} />
          <View style={styles.heading}>
            <Text style={styles.heading__text}>@{event.actor.login} </Text>
            <Text style={styles.heading__company}>{event?.org?.login} </Text>
          </View>
        </View>
        <Text style={styles['row__event']}>
          {event.type} - {event.repo.name}
        </Text>
        {event.payload.commits && <CommitsDropdown event={event} showCommits={showCommits} />}
        <Text style={styles.row__date}>{formatEventTime(event.created_at)}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  row: {
    position: 'relative',
    padding: 10,
    borderBottomColor: '#e1e8ed',
    borderBottomWidth: 1,
  },
  row__heading: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  heading: {
    marginLeft: 10,
  },
  heading__text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  heading__company: {
    fontSize: 14,
    color: '#657786',
  },
  row__event: {
    marginTop: 5,
  },
  row__date: {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 12,
    color: '#657786',
  },
});
