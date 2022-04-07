import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useParams } from '../../react-router';

import { Spinner } from '../../components/Elements/Spinner';
import { Error } from '../../components/Elements/Error';
import { UserInfo } from './components/UserInfo/UserInfo';
import { SelectBar } from './components/SelectBar/SelectBar';
import { UserEvents } from './components/UserEvents/UserEvents';
import { UserRepos } from './components/UserRepos/UserRepos';
import { UserStarred } from './components/UserStarred/UserStarred';
import { UserNotFound } from './components/UserNotFound/UserNotFound';

import { useUser } from './api/getUser';

export const Profile = () => {
  const { username } = useParams();
  const [selectedView, setSelectedView] = useState('events');

  const { isLoading, isError, data, error } = useUser(username);

  if (isLoading) return <Spinner />;

  if (isError) return <Error>{error.message}</Error>;

  if (!data || !data.login) {
    return <UserNotFound username={username} />;
  }

  return (
    <View>
      <UserInfo user={data}>
        <SelectBar selectedView={selectedView} setSelectedView={setSelectedView} />
      </UserInfo>
      {selectedView === 'events' && <UserEvents username={username} />}
      {selectedView === 'repos' && (
        <UserRepos username={username} style={{ flex: 1, height: '100%' }} />
      )}
      {selectedView === 'starred' && <UserStarred username={username} />}
    </View>
  );
};
