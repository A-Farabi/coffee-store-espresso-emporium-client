import { data } from 'autoprefixer';
import React from 'react';

const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault()
        const form = event.target

        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = {name,quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);

        // send data to server
        fetch('http://localhost:5000/coffee',{
            method: 'POST', headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-xl font-bold'>Add a coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className='flex gap-10'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className='flex gap-10'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='flex gap-10'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='flex'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className='btn btn-block bg-sky-300 mt-10'/>
            </form>
        </div>
    );
};

export default AddCoffee;