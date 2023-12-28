import { Image } from 'react-bootstrap';

const ImageCollection = ({ data, stock }) => {
  console.log('data', data);

  return (
    <div className="image-collections">
      {data.map((image) => (
        <Image
          style={{ filter: stock === 0 ? 'grayscale(100%)' : 'grayscale(0%)' }}
          key={image.id}
          src={image.url}
          alt={image.filename}
        />
      ))}
    </div>
  );
};

export default ImageCollection;
