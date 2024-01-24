import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#01A6B3',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  icon: {
    fontSize: 24,
    color: '#fff'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});