import React, { useState } from 'react';
import { QUERY_ITEMS } from "../../utils/queries";

const ItemForm = () => {
    const [description, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    // const [addItem, { error }] = useMutation(ADD_ITEM, {
    //     update(cache, { data: { addItem } }) {
    //         // read what's currently in the cache
    //         const { items } = cache.readQuery({ query: QUERY_ITEMS });

    //         // prepend the newest thought to the front of the array
    //         cache.writeQuery({
    //             query: QUERY_ITEMS,
    //             data: { items: [addItem, ...items] }
    //         });
    //     }
    // });

    const handleChange = event => {
        if (event.target.value.length <= 300) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        setText('');
        setCharacterCount(0);
    };

    return (
        <div>
            <p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
                Character Count: {characterCount}/300
      </p>
            <form className="flex-row justify-center justify-space-between-md align-stretch">
                <textarea
                    placeholder="Hello, I'd like to barter for..."
                    value={description}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
        </button>
            </form>
        </div>
    );
};

export default ItemForm;