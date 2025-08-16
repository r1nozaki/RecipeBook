const RecentDishCard = ({ id, image, title, content }) => {
  return (
    <div className='w-full bg-[#F5F2F2] rounded-xl flex'>
      <div className='w-101 h-80.5 rounded-l-xl'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>
      <div className='p-12'>
        <h2>{title}</h2>
        <p>{content}</p>
        <button className='w-45 h-10 rounded-xl bg-yellow-300 text-center mt-12 text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400 hover:cursor-pointer'>
          See recipe
        </button>
      </div>
    </div>
  );
};

export default RecentDishCard;
