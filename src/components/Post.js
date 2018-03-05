import React from 'react';
import { View, Text } from 'react-native';
import { styles } from 'styles';

const Post = ({ data }) => (
  <View style={styles.post}>
    <Text style={styles.postTitle}>{data.title}</Text>
    <Text style={styles.postAuthor}>{data.author}</Text>
    <View style={styles.postBorder} />
    <Text style={styles.postDescription}>{data.description}</Text>
  </View>
);
export default Post;
