import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4bebe',
  },

  navbar: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#444',
  },
  navbarText: {
    color: '#ffcc00',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },

  footer: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#444',
  },
  footerText: {
    color: '#bbb',
    fontSize: 14,
    fontStyle: 'italic',
  },

  title: {
    fontSize: 26,
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },

  contentBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 18,
    padding: 22,
    marginHorizontal: 20,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 14,
    fontSize: 16,
    color: '#222',
    borderWidth: 1,
    borderColor: '#aaa',
    fontWeight: '500',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },

  button: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },

  buttonText: {
    color: '#ffcc00',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 1,
  },

  resultText: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
    fontWeight: '500',
  },

  image: {
    borderRadius: 10,
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#666',
    marginVertical: 15,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#333',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },

  placeholderBox: {
    backgroundColor: '#bbb',
    borderRadius: 12,
    height: 150,
    marginTop: 10,
  },
});

export default styles;
