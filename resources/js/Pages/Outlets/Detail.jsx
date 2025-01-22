import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Details({ outlet }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                   Outlet Details
                </h2>
            }
        >
            <Head title="Outlet Details" />


            <div className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                    <div className="mx-auto px-4 py-6">
                        <div className="mb-6 space-y-4">
                            <h3 className="text-lg font-bold">{outlet.name}</h3>
                            <p>{outlet.address}</p>
                            <p>Coordinates: {outlet.latitude}, {outlet.longitude}</p>
                            <p>Brand: {outlet.brand.name}</p>
                            <p>Distance Miles: {outlet.distance_miles}Mil  From Monas</p>
                            <p>Distance Kilometer {outlet.distance_kilometer}KM From Monas</p>
                        </div>
                        <Link
                            href="/outlets"
                            className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            Back to Outlets
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        </AuthenticatedLayout>
    );
}
