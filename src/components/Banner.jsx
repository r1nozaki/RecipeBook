import bgBanner from '../assets/bgBanner.png';

const Banner = ({ img, text }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full h-90.5 bg-neutral-950/50 flex justify-center items-center'>
        <h1 className='text-4xl w-225 text-center text-white font-bold'>{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
