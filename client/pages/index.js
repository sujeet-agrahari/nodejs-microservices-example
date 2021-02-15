import buildClient from '../api/buildClient';

const LandingPage = ({ currentUser }) => {
  console.log('I am in the component', color);

  return <h1>Landing Page...</h1>;
};

LandingPage.getInitialProps = async (context) => {
  const { data } = buildClient(context);
}

export default LandingPage;