import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl p-5">
            <figure className="w-1/3">
                <img
                    src={photo}
                    alt={`${name}`}
                    className="rounded-xl object-cover w-full h-full"
                />
            </figure>
            <div className="card-body w-2/3">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className="text-sm text-gray-600"><strong>Quantity:</strong> {quantity}</p>
                <p className="text-sm text-gray-600"><strong>Supplier:</strong> {supplier}</p>
                <p className="text-sm text-gray-600"><strong>Taste:</strong> {taste}</p>
                <p className="text-sm text-gray-600"><strong>Category:</strong> {category}</p>
                <p className="text-sm text-gray-600"><strong>Details:</strong> {details}</p>
                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-info text-white mr-2">View</button>
                    <Link to={`updateCoffee/${_id}`}><button className="btn btn-info text-white mr-2">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-error text-white bg-red-500">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
