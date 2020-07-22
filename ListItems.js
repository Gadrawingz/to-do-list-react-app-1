import React from 'react';
import './ListItems.css';

function ListItems(props) {
  
    let items = props.items;
    const listItems = items.map(item => {
            return (
            <div className="list" key={item.key}>
                <p>{/* {item.text} */}
                <input type="text" 
                id={item.key} 
                value={item.text}
                onChange = {
                    (e) => {
                        props.setUpdate(e.target.value, item)
                    }
                }
                />

                <span onClick= {() => props.deleteItem(item.key)
                }>Delete
                </span>
                </p>
            </div>
            );
        });

        return(
            <div>{listItems}</div>
        )
    }

export default ListItems;