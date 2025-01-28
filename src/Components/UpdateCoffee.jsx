import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData()

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event =>{
            event.preventDefault()
            const form = event.target
    
            const name = form.name.value
            const quantity = form.quantity.value
            const supplier = form.supplier.value
            const taste = form.taste.value
            const category = form.category.value
            const details = form.details.value
            const photo = form.photo.value
    
            const updatedCoffee = {name,quantity, supplier, taste, category, details, photo}
            console.log(updatedCoffee);
    
            // send data to server
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method: 'PUT', headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(updatedCoffee)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success",
                        icon: "success",
                        text: "coffee updated sucessfully",
                        draggable: true
                      });
                }
            })
        }

    return (
        <div>
            {/* add coffee form code */}
            
            <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-xl font-bold'>Update coffee</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className='flex gap-10'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={name} placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="info@site.com" className="input input-bordered" />
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
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' defaultValue={taste} placeholder="info@site.com" className="input input-bordered" />
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
                            <input type="text" name='category' defaultValue={category} placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' defaultValue={details} placeholder="info@site.com" className="input input-bordered" />
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
                            <input type="text" name='photo' defaultValue={photo} placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Coffee" className='btn btn-block bg-sky-300 mt-10'/>
            </form>
        </div>

        </div>
    );
};

export default UpdateCoffee;