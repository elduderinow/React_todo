import React from 'react';

function ListItem(props) {
    let itemArr = props.item.map(elem => <li><input type={"checkbox"}/> {elem}</li>);
    return (
        <>
            {itemArr}
        </>
    );
}

export default ListItem;