import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Spinner } from '../../../../components/Elements/Spinner';
import { Link } from '../../../../react-router';
import { Avatar } from '../../../../components/Elements/Avatar';

import { useUsers } from '../../api/getUsers';

export const WhoToFollow = () => {
  const { isLoading, isError, data, error } = useUsers();

  if (isLoading) return <Spinner />;
  if (isError) return <Text>{error.message}</Text>;
  return (
    <View style={styles.card}>
      <Text style={styles.card__header}>Who To Follow</Text>
      {data.items.map((user, index) => {
        return (
          <Link key={index} to={`/profile/${user.login}`}>
            <View style={styles.card__row}>
              <Avatar img={user.avatar_url} />
              <View style={styles.row__holder}>
                <Text style={styles.holder__heading}>{user.login}</Text>
                <Text>@{user.login}</Text>
              </View>
            </View>
          </Link>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f5f8fa',
    margin: 10,
    marginTop: 30,
    minHeight: 300,
    marginTop: 20,
  },
  card__header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card__row: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 10,
  },
  row__holder: {
    marginLeft: 10,
  },
  holder__heading: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
