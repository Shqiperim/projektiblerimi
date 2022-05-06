import React, { useEffect } from 'react';

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

    return (
        < div >
            <h1>
                My Functional Component

                {/*PROPS */}
                <hr />
                <h4>Name: <b>{props.name ? props.name : "Shqiperim1"}</b></h4>

                {/* STATE */}
                <hr />
                <h4>State</h4>
                <span>
                    <b>Age: </b>{age}
                    <button onClick={() => setAge(age + 1)}>+</button>
                    <button onClick={() => setAge(age - 1)}>-</button>
                </span>
            </h1>
        </div >
      )
}

export default MyFunctionalComponent;