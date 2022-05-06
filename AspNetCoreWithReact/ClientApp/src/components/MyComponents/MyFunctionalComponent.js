import React, { useEffect, useState } from 'react';

const MyFunctionalComponent = (props) => {

    //function componentMount() {
    //    alert("Component rendered")
    //}

    //function componentUnMount() {
    //    alert("Leaving the Component")
    //}

    //useEffect(() => {
    //    componentMount();
    //    return () => {
    //        componentUnMount();
    //    }
    //}, [])

    const [age, setAge] = useState(20);

    const onChangeAgeInput = (event) => {
        alert("Age has changed");
        setAge(parseInt(event.target.value));
    }

    const showDetails = (prPhone) => {
        alert(`Name: ${props.name ? props.name : 'Shqiperim'} | Age: ${age} | Phone: ${prPhone}`);
    }

    let ShqipiAge = () => {
        if (age > 25)
            return (<p>Shqiperimi has more than 25 years</p>);
        else
            return (<p>Shqiperimi has 25 or less years</p>);
    }

    return (
        < div >
            <h2> My Functional Component</h2>

                {/*PROPS */}
                <hr />
                <h4>Name: <b>{props.name ? props.name : "Shqiperim1"}</b></h4>

                {/* STATE */}
                <hr />
                <h4>State</h4>
                <span>
                    <b>Age: </b><input type="number" value={age} onChange={onChangeAgeInput} />
                    <button onClick={() => setAge(age + 1)}>+</button>
                    <button onClick={() => setAge(age - 1)}>-</button>
            </span>

            {/*Event handling*/}
            <hr />
            <h4>Event handling</h4>
            <button onClick={showDetails.bind(this, 2655131651)}>Show Details</button>

            {/* Conditional rendering */}
            <hr />
            <h4>Conditional rendering</h4>

            {/* Exampe 1 - IF/ELSE */}
            {ShqipiAge()}

            {/* Exampe 2 - Ternary operator */}
            <p>{age > 25 ? 'Shqipi has more than 25 years' : 'Shqipi has 25 or less Years'}</p>

            {/* Exampe 3 - Short-ciruit operator */}
            {age > 25 && <p>Shqipi has more than 25 years</p>}
            {age < 25 && <p>Shqipi has 25 or less Years</p>}

            {/* Exampe 4 - Imediately invoked function */}
            {
                (() => {
                    switch (age) {
                        case 25: return <p>Shqipi has 25 or more years</p>;
                        default: return <p>Shqipi has less 25 Years</p>
                    }
                })()
            }

        </div >
      )
}

export default MyFunctionalComponent;