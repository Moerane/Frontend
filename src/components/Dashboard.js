import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import ProductBarChart from './ProductBarChart';

// Importing images
import image1 from '../Images/image1.jpeg';
import image2 from '../Images/image2.jpeg';
import image3 from '../Images/image3.jpeg';

const Dashboard = ({ products }) => {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    return isNaN(numericPrice) ? 'N/A' : numericPrice.toFixed(2);
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  const Images = [image1, image2, image3];

  return (
    <div className="container">
      <h1>WINGS CAFE</h1>
      <header className="header">
        <nav className="navigation">
          <ul>
            <Link to="/products">Product Management</Link>
            <Link to="/users">User Management</Link>
            <button onClick={handleLogout}>Logout</button>
          </ul>
        </nav>
      </header>

      {/* Product Section */}
      <section style={{ marginTop: '20px' }}>
        <h3>Products Added</h3>
        {products.length === 0 ? (
          <p>No products have been added yet.</p>
        ) : (
          <div>
            <ProductBarChart products={products} />
            <table style={{ width: '50%', borderCollapse: 'collapse', marginTop: '15px', margin: '0 auto' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f4f4f4' }}>Name</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f4f4f4' }}>Description</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f4f4f4' }}>Price</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f4f4f4' }}>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.name}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.description}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>M{formatPrice(product.price)}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Rotating Images */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px' }}>
              {Images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="rotating-image"
                  style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
