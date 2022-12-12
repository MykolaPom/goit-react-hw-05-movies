// import PropTypes from 'prop-types';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  )
};

export default LoadMoreButton;

// comment

// 1. для додавання кнопки Load more створюю компонет за дефолтним експортом,
// 2. роблю у компоненті розмітку кнопки , задаю значення параметра та атрибут onClick


//------------------//

// const LoadMoreButton = ({ onClick }) => {
//   return (
//     <button type="button" onClick={onClick}>
//       Load More
//     </button>
//   );
// };

// export default LoadMoreButton;

// LoadMoreButton.propType = {
//   onClick: PropTypes.func.isRequired,
// };
