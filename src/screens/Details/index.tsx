import {useRoute} from '@react-navigation/core';
import {Layout, List, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Routes} from '../../constants';
import albuns from '../../data/albuns.json';
import {TAppRoute} from '../../navigator';
import {TAlbum} from '../../types/interfaces';

const DetailsScreen = () => {
  const [album, setAlbum] = useState<TAlbum>();

  const route = useRoute<TAppRoute<Routes.DETAILS>>();

  useEffect(() => {
    const {albumId} = route.params;
    const albumFound = albuns.find(({id}) => id === albumId);
    setAlbum(albumFound);
  }, [route.params]);

  if (!album) {
    return (
      <Layout style={styles.container}>
        <Text>Loading... </Text>
      </Layout>
    );
  }

  return (
    <Layout style={styles.container}>
      <List
        data={album.photos}
        keyExtractor={photo => photo.id}
        numColumns={2}
        renderItem={({item: photo}) => (
          <Layout style={styles.photoContainer}>
            <Image
              style={styles.photo}
              source={{
                uri: photo.download_url,
              }}
            />
            <Text category="h6">{photo.author}</Text>
            <Text category="p1">
              original size: ({photo.width} x {photo.height})
            </Text>
          </Layout>
        )}
      />
    </Layout>
  );
};

const screenWidth = Dimensions.get('screen').width * 0.9;
const photoWidth = screenWidth / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    marginVertical: 4,
    marginHorizontal: 4,
  },
  photo: {
    width: photoWidth,
    height: photoWidth,
  },
});

export default DetailsScreen;
