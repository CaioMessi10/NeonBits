import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#c4bebe' },
  navbar: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    alignItems: 'center',
  },
  navbarText: { color: '#ffcc00', fontSize: 18, fontWeight: 'bold' },
  footer: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    alignItems: 'center',
  },
  footerText: { color: '#fff', fontSize: 14 },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#ffcc00',
    textAlign: 'center',
  },
  contentBox: {
    backgroundColor: '#e2e2e2',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  input: {
    borderColor: '#999',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: { color: '#ffcc00', fontWeight: 'bold', fontSize: 16 },
  resultText: { fontSize: 16, marginTop: 10, color: '#333' },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    marginVertical: 15,
  },
  placeholderBox: {
    backgroundColor: '#999',
    borderRadius: 10,
    height: 150,
    marginTop: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    marginVertical: 10,
  
    // sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Android sombra
  },
    
});

export default styles;
