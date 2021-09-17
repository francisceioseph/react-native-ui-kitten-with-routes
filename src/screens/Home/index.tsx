import {useNavigation} from '@react-navigation/core';
import {Divider, Layout, List, ListItem} from '@ui-kitten/components';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Routes} from '../../constants';
import albuns from '../../data/albuns.json';
import {TAppNavigation} from '../../navigator';

const HomeScreen = () => {
  const navigation = useNavigation<TAppNavigation<Routes.HOME>>();

  const handleAlbumPress = useCallback(
    (albumId: number) => {
      navigation.navigate(Routes.DETAILS, {
        albumId,
      });
    },
    [navigation],
  );

  return (
    <Layout style={styles.container}>
      <List
        data={albuns}
        keyExtractor={album => album.id.toString()}
        renderItem={({item: album}) => (
          <ListItem
            title={album.album}
            description={`Number of photos: ${album.photos.length}`}
            onPress={() => handleAlbumPress(album.id)}
          />
        )}
        ItemSeparatorComponent={() => <Divider />}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
