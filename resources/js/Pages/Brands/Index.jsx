import React, { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react'

export default function BrandIndex({ brands }) {
    const { flash } = usePage().props;
    const [formData, setFormData] = useState({ name: '', id: null });
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        if (formData.id) {

            router.put(`brands/${formData.id}`, { name: formData.name }, {
                onSuccess: () => {
                    setFormData({ name: '', id: null });
                },
                onError: (err) => {
                    setErrors(err);
                }
            });
        } else {

            router.post('brands', { name: formData.name }, {
                onSuccess: () => {
                    setFormData({ name: '', id: null });
                },
                onError: (err) => {
                    setErrors(err);
                }
            });
        }
    };

    const handleEdit = (brand) => {
        setFormData({ name: brand.name, id: brand.id });
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure?')) {
            router.delete(`brands/${id}`);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-6">Brand Management</h1>

        {flash.message && (
            <div className="bg-green-100 text-green-800 p-4 mb-6 rounded-md shadow-md">
                {flash.message}
            </div>
        )}

        <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Brand Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>
            <button
                type="submit"
                className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                {formData.id ? 'Update' : 'Create'} Brand
            </button>
        </form>

        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
            <thead>
                <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">#</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                </tr>
            </thead>
            <tbody>
                {brands.data.map((brand, index) => (
                    <tr key={brand.id} className="border-t border-gray-200">
                        <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                        <td className="py-3 px-4 text-sm text-gray-700">{brand.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                            <button
                                onClick={() => handleEdit(brand)}
                                className="text-indigo-600 hover:text-indigo-800 mr-3"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(brand.id)}
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
            {brands.links.map((link) =>
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
