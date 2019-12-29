import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    flex: 1,
  },
  loginButton: {
    marginTop: 40,
  },
  formText: {
    padding:12,
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
  },
  topBar: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection:"row",
  },
  logoutButton: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    paddingLeft: 24,
    paddingRight: 24,
    fontSize: 18,
    fontWeight: '400',
  },
  sectionContent: {
    marginTop: 8,
    paddingLeft: 24,
    paddingRight: 24,
    fontSize: 12,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  login: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  disabledLoginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:60,
    marginLeft:60,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'grey',
    borderRadius:10,
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:60,
    marginLeft:60,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'blue',
    borderRadius:10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 5,
  },
});