import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { GoArrowLeft } from 'react-icons/go';
import { Form, useNavigate } from 'react-router-dom';
// import Sofa from '../../assets/images/product-2.png';

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userAuth = async () => {
      const res = await fetch('https://apingweb.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'aliasger@gmail.com',
          password: '0lelplRaaa',
          // expiresInMins: 60, // optional
        }),
      });

      const data = await res.json();
      console.log(data);
    };

    userAuth();
  }, []);

  return (
    <div className="auth-page">
      <Row>
        <Col lg={4}>
          <div className="content-side position-relative p-4 ">
            <Button onClick={() => navigate(-1)}>
              <GoArrowLeft /> Go to Home
            </Button>

            <div className="text-center mt-4">
              <h2 className="mb-2">Create your account</h2>
              <p>Please sign up </p>

              {/* <img src={Sofa} alt="" /> */}
            </div>
          </div>
        </Col>

        <Col lg={8} className=" align-self-center">
          <div className="form">
            <Row>
              <Col lg={4} className="offset-lg-4">
                <Form>
                  <label htmlFor="name" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" />

                  <label htmlFor="name" className="form-label mt-4">
                    Password
                  </label>
                  <input type="password" className="form-control" />

                  <Button className="w-100 mt-4">Submit</Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
