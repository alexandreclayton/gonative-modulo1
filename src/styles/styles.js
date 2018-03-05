import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  mainHeader: {
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 20,
  },
  mainHeaderText: {
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.apricot,
    marginVertical: 20,
  },
  post: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 5,
  },
  postTitle: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },
  postAuthor: {
    color: colors.regular,
  },
  postBorder: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: colors.lighter,
    borderBottomWidth: 1,
  },
  postDescription: {
    color: colors.dark,
  },
});

export default styles;
