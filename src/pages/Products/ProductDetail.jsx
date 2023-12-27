import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState({});
  let { id } = useParams();

  const axiosGet = async () => {
    let response = await axios.get(`https://dummyjson.com/products/${id}`);
    setProductDetail(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    axiosGet();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '40rem'}}>
        <Card.Img variant="top" src={`https://i.dummyjson.com/data/products/${id}/1.jpg`} />
        <Card.Body>
          <Card.Title>{productDetail.title}</Card.Title>
          <Card.Text>{productDetail.description}</Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>     
    </div>
  );
}
