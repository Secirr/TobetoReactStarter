import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ProductAdd() {
    let history = useNavigate()
  const [formData, setFormData] = useState({
    id: "",
    brand: "",
    category: "",
    description: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
  };

  const handleProductAdd = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/products/add", {
        ...formData,
      });
      console.log("Product added successfully:", response.data);
      setFormData({
        id: "",
        brand: "",
        category: "",
        description: "",
        price: "",
      });
      history("/products")
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    
    <div className="container mt-5">
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Brand</Form.Label>
        <Form.Control type="text" placeholder="Brand" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Category" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control size="ly" type="text" placeholder="Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" />
      </Form.Group>
    </Form>

    <Button onClick={handleProductAdd} variant="primary">Save</Button>{' '}
     
    </div>
  );
}
