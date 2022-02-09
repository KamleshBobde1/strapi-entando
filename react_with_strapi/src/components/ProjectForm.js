import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postCustomer } from '../apis/strapiapi';

const data = {
  "data": {
    "name": "vijay",
    "email": "vijay@example.com",
    "address": "string",
    "projects": [
      "1",
    ],
    "createdAt": "2022-02-08T11:08:13.034Z",
    "updatedAt": "2022-02-08T11:08:13.034Z",
    "publishedAt": "2022-02-08T11:08:13.034Z",
    "createdBy": "string or id",
    "updatedBy": "string or id"
  }
}

export default function ProjectForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  const onSubmitHandle = async (e) => {
  e.preventDefault()
  const postData = {
  "data": {
  "name": name,
  "email": email,
  "address": address,
  "projects": [
  "1",
  ],
  "createdAt": "2022-02-08T11:08:13.034Z",
  "updatedAt": "2022-02-08T11:08:13.034Z",
  "publishedAt": "2022-02-08T11:08:13.034Z",
  "createdBy": "string or id",
  "updatedBy": "string or id"
  }
  }
  const { status } = await postCustomer(postData);
  if (status === 200) navigate("/");
  }
  const onChangeHandle = (fieldValue, fieldName) => {
  if (fieldName === 'name') setName(fieldValue)
  if (fieldName === 'address') setAddress(fieldValue)
  if (fieldName === 'email') setEmail(fieldValue)
  }
  const style = {"width": "50%",
  "padding": "12px 20px",
  "margin": "8px 0",
  // "display": "inline-block",
  "border": "1px solid #ccc",
  "borderRadius": "4px",
  "boxSizing": "border-box"}
  const buttonStyle = {"width":" 50%",
  "backgroundColor":" #4CAF50",
  "color":" white",
  "padding":" 14px 20px",
  "margin":" 8px 0",
  "border":" none",
  "borderRadius":" 4px",
  "cursor":" pointer"}
  return (
  <div style={{"borderRadius": "5px",
  "backgroundColor": "#f2f2f2",
  "padding": "20px"}}>

  <Link to={'/'}> 🔙 Back</Link>
  <br/><br/><br/>
  <form style={{"margin": "1rem"}} onSubmit={() => onSubmitHandle}>
  <label htmlFor="name">Name:</label><br />
  <input style={style} onChange={(e) => { onChangeHandle(e.target.value, 'name') }} type="text" id="name" name="name" /><br />
  <label htmlFor="email">Email:</label><br />
  <input style={style} onChange={(e) => { onChangeHandle(e.target.value, 'email') }} type="text" id="email" name="email"/><br /><br />
  <label htmlFor="address">Address:</label><br />
  <input style={style} onChange={(e) => { onChangeHandle(e.target.value, 'address') }} type="text" id="address" name="address"/><br /><br />
  <input style={buttonStyle} onClick={onSubmitHandle} type="button" value="Submit" />
  </form>
  </div>
  );
  }