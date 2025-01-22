import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';

export default function EditBrand({ brand }) {
    const { data, setData, put, reset, errors } = useForm({
        name: brand.name,
        description: brand.description,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('brands.update', brand.id), {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Brand
                </h2>
            }
        >
            <Head title="Edit Brand" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <div className=" mx-auto p-4">
                            <div className="mx-auto p-4">
                                <h1 className="text-2xl font-semibold mb-6">Edit Brand</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                        {errors.name && <div className="text-red-600 text-sm">{errors.name}</div>}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="description">
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                        {errors.description && (
                                            <div className="text-red-600 text-sm">{errors.description}</div>
                                        )}
                                    </div>

                                    <div className="flex space-x-4">
                                        <Link
                                            href="/brands"
                                            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                                        >
                                            Back
                                        </Link>

                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
