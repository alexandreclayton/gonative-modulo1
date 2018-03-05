import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import 'config/ReactotronConfig';
import 'config/DevToolsConfig';
import { styles } from 'styles';

import Header from 'components/Header';
import Post from 'components/Post';


export default class App extends Component {
  state = {
    posts: [
      {
        id: 0, author: 'Alexandre Sette', title: 'Post 001', description: 'TEST TEST TEST TEST',
      },
      {
        id: 1, author: 'Alexandre Sette', title: 'Post 002', description: 'TEST TEST TEST TEST',
      },
      {
        id: 2, author: 'Alexandre Sette', title: 'Post 003', description: 'TEST TEST TEST TEST',
      },
      {
        id: 3, author: 'Alexandre Sette', title: 'Post 004', description: 'TEST TEST TEST TEST',
      },
      {
        id: 4, author: 'Alexandre Sette', title: 'Post 005', description: 'TEST TEST TEST TEST',
      },
      {
        id: 5, author: 'Alexandre Sette', title: 'Post 006', description: 'TEST TEST TEST TEST',
      },
      {
        id: 6, author: 'Alexandre Sette', title: 'Post 006', description: 'TEST TEST TEST TEST',
      },
    ],
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header title="GoNative App" />
        <ScrollView >
          {this.state.posts.map(p => (<Post key={p.id} data={p} />))}
        </ScrollView>
      </View>
    );
  }
}
