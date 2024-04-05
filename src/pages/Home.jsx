import { Helmet } from 'react-helmet';
import { RiContactsBook2Fill } from 'react-icons/ri';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <h1 style={styles.title}>
        Welcome to your personal Phonebook <RiContactsBook2Fill />
      </h1>
      <p>{`Register or Login to create your personal Phonebook, where you can add new contacts and delete those who you don't want to see anymore.`}</p>
    </div>
  );
}
