import React from 'react';

const MyFunctionalComponent = (props) => {
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