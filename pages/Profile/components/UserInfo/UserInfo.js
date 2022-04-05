import { Text, View, StyleSheet, Image } from 'react-native';

import { pluralizeName } from '../../../../utils';

export const UserInfo = ({ user, children }) => {
  return (
    <>
      <View>
        <View style={styles.banner_background}></View>
        <Image source={{ uri: user.avatar_url }} style={styles.banner__profile} />
      </View>
      <View style={styles.cont}>
        <Text style={styles.cont__heading}>{user.name}</Text>
        <Text style={styles.cont__username}>@{user.login}</Text>
        <Text>{user.bio}</Text>
        <View style={styles.cont__details}>
          {user.blog && (
            <View style={styles.cont__details}>
              <Image
                source={require('../../../../assets/link-regular-24.png')}
                style={styles.details__image}
              />
              <Text
                href={user.blog}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.details__text}
              >
                {user.blog}
              </Text>
            </View>
          )}
          {user.company && (
            <View style={styles.cont__details}>
              <Image
                source={require('../../../../assets/briefcase-alt-2-solid-24.png')}
                style={styles.details__image}
              />
              <Text style={styles.details__text}>{user.company}</Text>
            </View>
          )}
          {user.location && (
            <View style={styles.cont__details}>
              <Image
                source={require('../../../../assets/map-solid-24.png')}
                style={styles.details__image}
              />
              <Text style={styles.details__text}>{user.location}</Text>
            </View>
          )}
          <View style={styles.cont__details}>
            <Image
              source={require('../../../../assets/calendar-solid-24.png')}
              style={styles.details__image}
            />
            <Text style={styles.details__text}>
              Joined{' '}
              {new Date(user.created_at).toLocaleDateString([], { month: 'long', year: 'numeric' })}
            </Text>
          </View>
        </View>
        <View style={styles.cont__followers}>
          <Text style={styles.followers__text}>{user.following} Following</Text>
          <Text style={styles.followers__text}>
            {user.followers} {pluralizeName('Follower', user.followers)}
          </Text>
        </View>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  banner_background: {
    width: '100%',
    height: 100,
    backgroundColor: '#1da1f2',
    marginBottom: 40,
  },
  banner__profile: {
    height: 100,
    width: 100,
    borderRadius: 9999,
    position: 'absolute',
    bottom: '0%',
    left: 10,
    backgroundColor: 'white',
    padding: 5,
  },
  cont: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    borderBottomColor: '#e1e8ed',
    borderBottomWidth: 1,
  },
  cont__heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cont__username: {
    color: '#657786',
    marginBottom: 10,
  },
  cont__details: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  details__image: {
    height: 16,
    width: 16,
    marginRight: 3,
  },
  details__text: {
    marginTop: 10,
    marginRight: 10,
    color: '#657786',
  },
  cont__followers: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  followers__text: {
    fontWeight: 'bold',
    marginRight: 15,
  },
});
