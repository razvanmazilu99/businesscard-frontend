import axios from 'axios';
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const validate = (email, firstName, lastName, phoneNumber, title) => {
    const errors = []

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.push('Invalid email address');
    }

    if (!/^[a-zA-ZæÆøØåÅ]+$/i.test(firstName) || !/^[a-zA-ZæÆøØåÅ]+$/i.test(lastName)) {
        errors.push('Name can only contain letters');
    }

    if (!/^(\+45)?[0-9]{8}$/i.test(phoneNumber)) {
        errors.push('Phone number must contain 8 digits');
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
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("")
    const [color, setColor] = useState("#ba68c8");

    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [code, setCode] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();

        const errors = validate(email, firstName, lastName, phoneNumber, title);
        if (errors.length > 0) {
            setMessage(errors);
            return;
        }

        const address = street + " " + number + " " + city + " " + code;

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
                setStreet('');
                setNumber('');
                setCity('');
                setCode('');
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
                    <input type="text" name="street" value={street} placeholder="Street" onChange={(e) => setStreet(e.target.value)} required />
                    <input type="text" name="number" value={number} placeholder="Number" onChange={(e) => setNumber(e.target.value)} required />
                    <input type="text" name="city" value={city} placeholder="City" onChange={(e) => setCity(e.target.value)} required />
                    <input type="text" name="code" value={code} placeholder="Code" onChange={(e) => setCode(e.target.value)} required />
                </label>
                <label>
                    <p>Color</p>
                    <div className="sketchpicker">
                        <SketchPicker
                            color={color}
                            onChange={(color) => {
                                setColor(color.hex);
                            }}
                        />
                    </div>
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