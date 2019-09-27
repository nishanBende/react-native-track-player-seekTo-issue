/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
  Player,
  Recorder,
  MediaStates,
} from '@react-native-community/audio-toolkit';

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {Colors} from 'react-native/Libraries/NewAppScreen';

TrackPlayer.setupPlayer().then(async () => {
  let track = {
    url: 'http://traffic.libsyn.com/joeroganexp/p1355.mp3',
    id: '1',
    title: 'Avaritia',
    artist: 'deadmau5',
  };

  await TrackPlayer.add(track);
  await TrackPlayer.play();

  const oldPosition = await TrackPlayer.getPosition();

  TrackPlayer.addEventListener('playback-state', async data => {
    console.log('data ', data);
    if (data.state === 'ready') {
      const time2 = new Date().getTime();

      await TrackPlayer.seekTo(4000);
      await TrackPlayer.seekTo(4100);

      const newPosition = await TrackPlayer.getPosition();
      console.log('position after ', oldPosition, newPosition);
    }
  });
});

const App: () => React$Node = () => {
  return (
    <>
      <Text>Track player seekTo pause issue</Text>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
