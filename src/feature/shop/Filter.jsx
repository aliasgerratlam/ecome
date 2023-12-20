import { useEffect, useState } from 'react';
import { Form as FormDom } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Filter = ({ products, setFilter }) => {
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);
  const [priceRange, setPriceRange] = useState(0);

  useEffect(() => {
    const cate = products.reduce((categories, product) => {
      if (!categories.includes(product.category))
        categories.push(product.category);
      return categories;
    }, []);
    setCategory(cate);

    const company = products.reduce((companies, product) => {
      if (!companies.includes(product.company)) companies.push(product.company);
      return companies;
    }, []);
    setBrand(company);

    const platte = products.reduce((colors, product) => {
      product.colors.forEach((element) => {
        if (!colors.includes(element)) colors.push(element);
      });
      return colors;
    }, []);
    setColor(platte);
  }, [products]);

  const handleInputChange = async () => {
    const formData = new FormData(document.querySelector('form'));
    const data = Object.fromEntries(formData);
    const primeFilter = {
      sortby: data.sortby,
      category: Object.keys(data)
        .filter((key) => key.startsWith('category'))
        .map((val) => data[val]),
      brand: Object.keys(data)
        .filter((key) => key.startsWith('brand'))
        .map((val) => data[val]),
      color: Object.keys(data)
        .filter((key) => key.startsWith('color'))
        .map((val) => data[val]),
    };
    setFilter(primeFilter);
  };

  const handleSliderChange = (e) => {
    setPriceRange(e.target.value);
    // const newSliderValue = Array.isArray(newValue) ? newValue : [e, newValue];

    // console.log('egrooww', e.target.value, newSliderValue, setPriceRange);
  };

  return (
    <div className="filter">
      <FormDom method="POST" onInput={handleInputChange}>
        <Form.Group className="mb-3">
          <Form.Label className="text-black fw-bold">Sort by</Form.Label>
          <Form.Select name="sortby">
            <option value="Featured">Featured</option>
            <option value="Alphabetically, A to Z">
              Alphabetically, A to Z
            </option>
            <option value="Alphabetically, Z to A">
              Alphabetically, Z to A
            </option>
            <option value="Price, Low to High">Price, Low to High</option>
            <option value="Price, High to Low">Price, High to Low</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 color-filter">
          <span>
            <Form.Label className="text-black fw-bold">Price</Form.Label>
            <p>{priceRange}</p>
          </span>
          <Form.Range
            onChange={handleSliderChange}
            min={0}
            max={100_000}
            name="price"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-black fw-bold">Category</Form.Label>
          {category.map((name, i) => (
            <Form.Check
              className="text-capitalize"
              type="checkbox"
              name={`category-${i}`}
              label={name}
              value={name}
              id={i}
              key={i}
            />
          ))}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-black fw-bold">Brand</Form.Label>
          {brand.map((name, i) => (
            <Form.Check
              className="text-capitalize"
              type="checkbox"
              name={`brand-${i}`}
              value={name}
              label={name}
              id={name}
              key={i}
            />
          ))}
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label className="text-black fw-bold w-100">Color</Form.Label>
          {color.map((name, i) => (
            <div key={i} className="color" style={{ backgroundColor: name }}>
              <input type="checkbox" value={name} name={`color-${i}`} />
              <i className="checkbox-icon"></i>
            </div>
          ))}
        </Form.Group>
      </FormDom>
    </div>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log('data', data);
  return null;
};

export default Filter;
