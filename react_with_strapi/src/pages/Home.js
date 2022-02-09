import React, { useEffect, useState } from 'react';
import { coreAPIEndpoint, getCustomer, getPost, getProject } from '../apis/strapiapi';
import Post from '../components/Post';
import { Link } from 'react-router-dom';

export default function Home() {

    // const [posts, setPost] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            const { data: customerData } = await getCustomer();
            const { data: projectsData } = await getProject();

            if (customerData && customerData.data.length) setCustomers(customerData.data)
            if (projectsData && projectsData.data.length) setProjects(projectsData.data);

        })()
    }, [])

    // if (!customers.length) return <div>no customers to load</div>
    // if (!customers.length && !projects.length) return <div>no data to load</div>

    return (
        <div style={{ margin: "1rem" }}>
            <h1>This is fake posts don't take it serious 😝</h1>
            {!customers.length && <div>no customers to load</div>}
            {!projects.length && <div>no customers to load</div>}
            <h3>Projects List</h3>
            {projects.length && projects.map((pro) => {
                console.log(pro.attributes.img.data.attributes.url)
                return (<div style={{
                    "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
                    "transition": "0.3s",
                    "width": "20rem",
                    "padding": "1rem"
                }} key={pro.id}>
                    <img src={`${coreAPIEndpoint}${pro.attributes.img.data.attributes.formats.thumbnail.url}`} alt="project img" />
                    <h4><b>#{pro.id}</b></h4>
                    <h1>{pro.attributes.name}</h1>
                    <div>
                        <b>Version:</b> {pro.attributes.version} <b>Release-Date:</b> {pro.attributes.releaseDate}
                    </div>
                    <p>{pro.attributes.description}</p>
                </div>)
            })}
            <hr />

            <h3>Customers List <Link style={{
                "backgroundColor": "#4CAF50",
                "border": "none",
                "color": "white",
                "padding": "15px 32px",
                "textAlign": "center",
                "textDecoration": "none",
                "display": "inline-block",
                "fontSize": "16px"
            }}
                to={'/addcustomer'}
            >Add Customer</Link></h3>
            <div style={{ "display": "flex","flexWrap": "wrap" }}>{customers.length && customers.map((cust) => (<div style={{
                "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
                "transition": "0.3s",
                "width": "20rem",
                "padding": "1rem"
            }} key={cust.id}>
                <h4><b>#{cust.id}</b></h4>
                <h1>{cust.attributes.name}</h1>
                <div>
                    <b>Email:</b> {cust.attributes.email}
                </div>
                <b>Created-At:</b> {cust.attributes.createdAt}
                <p>{cust.attributes.address}</p>
            </div>))}
            </div>

        </div>
    );
}
