import React, {useState, useEffect} from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
    const [propertyListings, setPropertyListings] = useState([]);

    useEffect(() => {
        const getPropertyListings = async () => {
            const propertiesRequest = await fetch('http://localhost:3000/api/properties');
            const propertyList = await propertiesRequest.json();

            setPropertyListings(propertyList);
        };
        
        getPropertyListings();
    },[]);

    return (
        <ul className="PropertyListing" role="list">
                {propertyListings
                .map((property, index) => (
                    <li role="listitem" key={index}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
