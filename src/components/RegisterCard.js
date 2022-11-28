import axios from 'axios';
import React, { useState } from 'react';

const validate = (email, firstName, lastName, phoneNumber, title) => {
    const errors = []

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.push('Invalid email address');
    }

    if (!/^[a-zA-ZæÆøØåÅ]+$/i.test(firstName) || !/^[a-zA-ZæÆøØåÅ]+$/i.test(lastName)) {
        errors.push('Name can only contain letters');
    }

    if (!/^(\+45)?[0-9]{8}$/i.test(phoneNumber)) {
        errors.push('Phone number can only contain 8 digits');
    }

    if (!/^[^0-9]+$/i.test(title)) {
        errors.push('Title cannot contain digits');
    }

    return errors
}

function RegisterCard() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [color, setColor] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("")

    const handleSubmit = async event => {
        event.preventDefault();

        const errors = validate(email, firstName, lastName, phoneNumber, title);
        if (errors.length > 0) {
            setMessage(errors);
            return;
        }

        try {
            let res = await axios.post(
                "http://localhost:8080/api/v1/card",
                {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber,
                    address: address,
                    color: color,
                    title: title,
                },
            );

            if (res.status === 200) {
                setEmail('');
                setFirstName('');
                setLastName('');
                setPhoneNumber('');
                setAddress('');
                setColor('');
                setTitle('');
                setMessage('Card created successfully');
            } else {
                setMessage('Some error occured');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    <p>First Name</p>
                    <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    <p>Phone Number</p>
                    <input type="text" name="phoneNumber" value={phoneNumber} placeholder="+45 xx xx xx xx" onChange={(e) => setPhoneNumber(e.target.value)} required />
                </label>
                <label>
                    <p>Address</p>
                    <input type="text" name="address" value={address} placeholder="Str. No. City Code" onChange={(e) => setAddress(e.target.value)} required />
                </label>
                <label>
                    <p>Color</p>
                    <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)} />
                </label>
                <label>
                    <p>Title</p>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
            </fieldset>
            <button type="submit">Submit</button>
            <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
    )
}

export default RegisterCard