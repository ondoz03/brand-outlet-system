import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ outlets }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure?')) {
            destroy(`/outlets/${id}`);
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Outlets Management
                </h2>
            }
        >
            <Head title="Outlets" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <Link
                            href="/outlets/create"
                            className="inline-block mb-6 mt-3 p-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
                        >
                            Add New Outlet
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
                                        Brand
                                    </th>
                                    <th className="py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                        Address
                                    </th>
                                    <th className="py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {outlets.data.map((outlet, index) => (
                                    <tr
                                        key={outlet.id}
                                        className={`${
                                            index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                        } border-b hover:bg-gray-100 transition`}
                                    >
                                        <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                                        <td className="py-3 px-4 text-sm text-gray-700">
                                            <Link
                                                href={`/outlets/${outlet.slug}`}
                                                className="text-blue-600 hover:underline hover:text-blue-800 font-medium"
                                            >
                                                {outlet.name}
                                            </Link>
                                        </td>
                                        <td className="py-3 px-4 text-sm text-gray-700">{outlet.brand.name}</td>
                                        <td className="py-3 px-4 text-sm text-gray-700">{outlet.address}</td>
                                        <td className="py-3 px-4 text-sm text-gray-700">
                                            <Link
                                                href={`/outlets/${outlet.id}/edit`}
                                                className="text-blue-600 hover:text-blue-800 font-medium mr-4"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(outlet.id)}
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
                                Showing <span className="font-medium">{outlets.from}</span> to{' '}
                                <span className="font-medium">{outlets.to}</span> of{' '}
                                <span className="font-medium">{outlets.total}</span> results
                            </div>
                            <div className="flex gap-1">
                                {outlets.links.map((link) =>
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
