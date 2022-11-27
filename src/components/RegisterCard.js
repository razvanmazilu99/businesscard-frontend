import axios from 'axios';
import { useState } from 'react';

function RegisterCard() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [color, setColor] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();

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
                setEmail("");
                setFirstName();
                setLastName();
                setPhoneNumber();
                setAddress();
                setColor();
                setTitle();
                setMessage("Card created successfully");
            } else {
                setMessage("Some error occured");
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
                    <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Phone Number</p>
                    <input type="text" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <label>
                    <p>Address</p>
                    <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} />
                </label>
                <label>
                    <p>Color</p>
                    <input type="text" name="color" onChange={(e) => setColor(e.target.value)} />
                </label>
                <label>
                    <p>Title</p>
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                </label>
            </fieldset>
            <button type="submit">Submit</button>
            <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
    )
}

export default RegisterCard