import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create({ brands }) {
    const { data, setData, post, reset, errors } = useForm({
        name: '',
        address: '',
        latitude: '',
        longitude: '',
        brand_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/outlets', data, {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                   Create Outlet
                </h2>
            }
        >
            <Head title="Create Outlet" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <div className="mx-auto p-4">
                            <h1 className="text-2xl font-semibold mb-6">Create a New Outlet</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                                        Outlet Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Outlet Name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.name && <div className="text-red-600 text-sm">{errors.name}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="address">
                                        Address
                                    </label>
                                    <textarea
                                        id="address"
                                        placeholder="Address"
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.address && <div className="text-red-600 text-sm">{errors.address}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="latitude">
                                        Latitude
                                    </label>
                                    <input
                                        id="latitude"
                                        type="number"
                                        placeholder="Latitude"
                                        value={data.latitude}
                                        onChange={(e) => setData('latitude', e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.latitude && <div className="text-red-600 text-sm">{errors.latitude}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="longitude">
                                        Longitude
                                    </label>
                                    <input
                                        id="longitude"
                                        type="number"
                                        placeholder="Longitude"
                                        value={data.longitude}
                                        onChange={(e) => setData('longitude', e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.longitude && <div className="text-red-600 text-sm">{errors.longitude}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="brand_id">
                                        Select Brand
                                    </label>
                                    <select
                                        id="brand_id"
                                        value={data.brand_id}
                                        onChange={(e) => setData('brand_id', e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    >
                                        <option value="">Select Brand</option>
                                        {brands.map((brand) => (
                                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                                        ))}
                                    </select>
                                    {errors.brand_id && <div className="text-red-600 text-sm">{errors.brand_id}</div>}
                                </div>

                                <div className="flex space-x-4">
                                    <Link
                                        href="/outlets"
                                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                                    >
                                        Back
                                    </Link>

                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                    >
                                        Create Outlet
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
