const DishCard = ({ image, title, content }) => {
  return (
    <div className='w-101 h-118.5 rounded-xl bg-[#F5F2F2]'>
      <div className='w-full h-53'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover rounded-t-xl'
        />
      </div>
      <div className='px-9.5 pt-7.5 pb-12'>
        <h1 className='text-2xl font-bold h-10'>{title}</h1>
        <p className='text-lg w-82'>{content}</p>
      </div>
    </div>
  );
};

export default DishCard;
