import bgBanner from '../assets/bgBanner.png';

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full h-90.5 bg-neutral-950/50 flex justify-center items-center'>
        <h1 className='text-4xl w-225 text-center text-white font-bold'>
          Be inspired, cook with passion, and savor unforgettable moments at the table.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
