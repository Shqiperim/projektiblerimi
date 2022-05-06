import React, { useEffect, useState } from 'react';

const MyFunctionalComponent = (props) => {

    function componentMount() {
        alert("Component rendered")
    }

    function componentUnMount() {
        alert("Leaving the Component")
    }

    useEffect(() => {
        componentMount();
        return () => {
            componentUnMount();
        }
    }, [])

    const [age, setAge] = useState(20);

    const onChangeAgeInput = (event) => {
        alert("Age has changed");
        setAge(parseInt(event.target.value));
    }

    const showDetails = (prPhone) => {
        alert(`Name: ${props.name ? props.name : 'Shqiperim'} | Age: ${age} | Phone: ${prPhone}`);
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
        </div >
      )
}

export default MyFunctionalComponent;