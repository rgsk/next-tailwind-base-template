import FilledButton from './Shared/FilledButton';

interface IHomePageProps {}
const HomePage: React.FC<IHomePageProps> = ({}) => {
  return (
    <div>
      <h3 className="text-red-500 font-bold text-xl">HomePage</h3>
      <div>
        <FilledButton>normal</FilledButton>
        <FilledButton variant="danger">danger</FilledButton>
        <FilledButton variant="warning">warning</FilledButton>
      </div>
    </div>
  );
};
export default HomePage;
