import { render } from '@testing-library/react';
import App from './App';
import Loading from './Components/Loading';
import UserProfile from './Components/userProfile';
import Activity from './Components/Activity';

test('Loading component works', () => {
  render(<Loading />);
});

test('renders the landing page', () => {
  render(<App />);
});

test('render user profile component', () => {
  render(<UserProfile />);
});

test('render user activity component', () => {
  render(<Activity />);
});


