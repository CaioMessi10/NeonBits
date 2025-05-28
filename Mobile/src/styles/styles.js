import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4bebe',
  },

  navbar: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },

  navbarText: {
    color: '#ffcc00',
    fontSize: 22,
    fontWeight: '800',
    fontFamily: 'sans-serif-medium',
    letterSpacing: 1.2,
  },

  footer: {
    backgroundColor: 'rgba(26, 26, 26, 0.85)', // transparência aplicada
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: -4 },
    shadowRadius: 6,
    elevation: 6,
  },
  
  
  footerText: {
    color: '#ffcc00',
    fontSize: 13,
    fontStyle: 'normal',
    letterSpacing: 0.5,
    textAlign: 'center',
    fontWeight: '600',
    opacity: 0.85,
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.4,
  },

  contentBox: {
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 16,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 12,
    fontSize: 16,
    color: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#ccc',
    fontWeight: '500',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },

  button: {
    backgroundColor: '#ffcc00',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },

  buttonText: {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },

  resultText: {
    fontSize: 16,
    marginTop: 12,
    color: '#444',
    fontWeight: '500',
  },

  image: {
    borderRadius: 12,
    width: 110,
    height: 110,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#555',
    marginVertical: 18,
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#1a1a1a',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 6,
  },

  placeholderBox: {
    backgroundColor: '#e0e0e0',
    borderRadius: 14,
    height: 140,
    marginTop: 10,
  },
});

export default styles;
