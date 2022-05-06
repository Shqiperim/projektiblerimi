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
    },[])

    return (
        < div >
            <h1>
                My Functional Component

                {/*PROPS */}
                <hr />
                <h4>Name: <b>{ props.name ? props.name : "Shqiperim1"}</b></h4>
            </h1>
        </div >
      )
}

export default MyFunctionalComponent;