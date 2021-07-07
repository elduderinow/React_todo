import React from 'react';

function ListItem(props) {
    let itemArr = props.item.map(function (elem) {

        function handleToggle() {
            props.toggleTodo(elem.id)
        }

        return <li key={elem.id}><label className="container"><input onChange={handleToggle} checked={elem.checked === true} type={"checkbox"}/> {elem.name} <span className="checkmark"></span></label></li>
    })


    return (
        <>
            {itemArr}
        </>
    );
}

export default ListItem;