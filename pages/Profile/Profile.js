import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useParams } from '../../react-router';

import { Spinner } from '../../components/Elements/Spinner';
import { UserInfo } from './components/UserInfo/UserInfo';
import { SelectBar } from './components/SelectBar/SelectBar';
import { UserEvents } from './components/UserEvents/UserEvents';
import { UserRepos } from './components/UserRepos/UserRepos';
import { UserStarred } from './components/UserStarred/UserStarred';

import { PageHeader } from '../../components/Layouts/PageHeader';

import { useUser } from './api/getUser';

export const Profile = () => {
  const { username } = useParams();
  const [selectedView, setSelectedView] = useState('events');

  const { isLoading, isError, data, error } = useUser(username);

  if (isLoading) return <Spinner />;

  if (isError) return <Text>{error.message}</Text>;

  if (!data.login) {
    return <UserNotFound username={username} />;
  }

  return (
    <>
      <UserInfo user={data}>
        <SelectBar selectedView={selectedView} setSelectedView={setSelectedView} />
      </UserInfo>
      {selectedView === 'events' && <UserEvents username={username} />}
      {selectedView === 'repos' && <UserRepos username={username} />}
      {selectedView === 'starred' && <UserStarred username={username} />}
    </>
  );
};
