import preloaderImg from '@/assets/img/logo/16.png';
const Loader = () => {
  return <div className="preloader">
      <div className="loading-container">
        <div className="loading" />
        <div id="loading-icon"><img width={100} height={100}  className="w-100" src={preloaderImg} alt='preloaderImg' /></div>
      </div>
    </div>;
};
export default Loader;