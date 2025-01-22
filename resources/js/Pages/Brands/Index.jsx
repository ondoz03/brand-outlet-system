import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function BrandIndex({ brands }) {
    const { data, setData, post, delete: destroy, reset, errors } = useForm({
        name: '',
        description: '',
    });

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this brand?')) {
            destroy(`brands/${id}`, {
                onSuccess: () => {
                    alert('Brand deleted successfully!');
                    reset(); // Reset form if necessary
                },
                onError: (err) => {
                    console.error('Error deleting brand:', err);
                },
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                   Brand Management
                </h2>
            }
        >
        <Head title="Brands" />
        <div className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                    <Link
                        href="/brands/create"
                        className="inline-block mb-6 mt-3 p-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Create New Brand
                    </Link>

                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    #
                                </th>
                                <th className="py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Description
                                </th>
                                <th className="py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {brands.data.map((brand, index) => (
                                <tr
                                    key={brand.id}
                                    className={`${
                                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    } border-b hover:bg-gray-100 transition`}
                                >
                                    <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                                    <td className="py-3 px-4 text-sm text-gray-700">
                                        <Link
                                            href={`/brands/${brand.slug}`}
                                            className="text-blue-600 hover:underline hover:text-blue-800 font-medium"
                                        >
                                            {brand.name}
                                        </Link>
                                    </td>
                                    <td className='py-3 px-4 text-sm text-gray-700'>
                                        {brand.description || 'No description provided.'}
                                    </td>

                                    <td className="py-3 px-4 text-sm text-gray-700">
                                        <Link
                                            href={`/brands/${brand.id}/edit`}
                                            className="text-blue-600 hover:text-blue-800 font-medium mr-4"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(brand.id)}
                                            className="text-red-600 hover:text-red-800 font-medium"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex items-center justify-between py-6">
                        <div className="text-sm text-gray-500">
                            Showing <span className="font-medium">{brands.from}</span> to{' '}
                            <span className="font-medium">{brands.to}</span> of{' '}
                            <span className="font-medium">{brands.total}</span> results
                        </div>
                        <div className="flex gap-1">
                            {brands.links.map((link) =>
                                link.url ? (
                                    <Link
                                        key={link.label}
                                        href={link.url}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`px-3 py-1 rounded-md text-sm ${
                                            link.active
                                                ? 'bg-blue-500 text-white font-bold'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        } transition`}
                                    />
                                ) : (
                                    <span
                                        key={link.label}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className="px-3 py-1 rounded-md text-sm bg-gray-50 text-gray-300"
                                    ></span>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </AuthenticatedLayout>
    );
}
