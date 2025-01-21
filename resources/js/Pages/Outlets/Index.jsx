import React, { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react'


export default function OutletIndex({ outlets, brands }) {
    const { flash } = usePage().props;
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        latitude: '',
        longitude: '',
        brand_id: '',
        id: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({});

        if (formData.id) {

            router.put(`/outlets/${formData.id}`, formData, {
                onSuccess: () => {
                    setFormData({ name: '', address: '', latitude: '', longitude: '', brand_id: '', id: null });
                },
                onError: (err) => {
                    setErrors(err);
                }
            });
        } else {

            router.post('/outlets', formData, {
                onSuccess: () => {
                    setFormData({ name: '', address: '', latitude: '', longitude: '', brand_id: '', id: null });
                },
                onError: (err) => {
                    setErrors(err);
                }
            });
        }
    };

    const handleEdit = (outlet) => {
        setFormData({
            name: outlet.name,
            address: outlet.address,
            latitude: outlet.latitude,
            longitude: outlet.longitude,
            brand_id: outlet.brand_id,
            id: outlet.id,
        });
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure?')) {
            router.delete(`/outlets/${id}`);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-6">Outlet Management</h1>

            {flash.message && (
                <div className="bg-green-100 text-green-800 p-4 mb-6 rounded-md shadow-md">
                    {flash.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="mb-6 space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Outlet Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>

                <div>
                    <textarea
                        placeholder="Address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                        {errors.address && <p className="text-red-500 text-sm mt-2">{errors.address}</p>}

                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Latitude"
                        value={formData.latitude}
                        onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.latitude && <p className="text-red-500 text-sm mt-2">{errors.latitude}</p>}
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Longitude"
                        value={formData.longitude}
                        onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.longitude && <p className="text-red-500 text-sm mt-2">{errors.longitude}</p>}

                </div>

                <div>
                    <select
                        value={formData.brand_id}
                        onChange={(e) => setFormData({ ...formData, brand_id: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Select Brand</option>
                        {brands.map((brand) => (
                            <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                    {errors.brand_id && <p className="text-red-500 text-sm mt-2">{errors.brand_id}</p>}

                </div>

                <button
                    type="submit"
                    className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    {formData.id ? 'Update' : 'Create'} Outlet
                </button>
            </form>

            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">#</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Brand</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Address</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Coordinates</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {outlets.data.map((outlet, index) => (
                        <tr key={outlet.id} className="border-t border-gray-200">
                            <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{outlet.name}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{outlet.brand.name}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{outlet.address}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">
                                {outlet.latitude}, {outlet.longitude}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-700">
                                <button
                                    onClick={() => handleEdit(outlet)}
                                    className="text-indigo-600 hover:text-indigo-800 mr-3"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(outlet.id)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="py-12 px-4">
            {outlets.links.map((link) =>
                link.url ? (
                    <Link
                        key={link.label}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 mx-1 ${
                            link.active ? "text-blue-500 font-bold" : ""
                        }`}
                    />
                ) : (
                    <span
                        key={link.label}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className="p-1 mx-1 text-slate-300"
                    ></span>
                )
            )}
        </div>
        </div>
    );
}
