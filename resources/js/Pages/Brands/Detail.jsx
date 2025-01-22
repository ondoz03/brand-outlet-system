import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';


export default function BrandDetail({ brand }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Brand Details
                </h2>
            }
        >
        <Head title="Brands" />

        <div className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                    <div className="mx-auto px-4 py-6">
                        <h1 className="text-2xl font-bold text-gray-800">{brand.name}</h1>
                        <p className="mt-4 text-gray-600">{brand.description || 'No description provided.'}</p>

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
                                        Address
                                    </th>
                                    <th className="py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                        longitude
                                    </th>
                                    <th className="py-3 px-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                        latitude
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {brand.outlets.map((outlet, index) => (
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
                                        <td className="py-3 px-4 text-sm text-gray-700">{outlet.address}</td>
                                        <td className="py-3 px-4 text-sm text-gray-700">{outlet.longitude}</td>
                                        <td className="py-3 px-4 text-sm text-gray-700">{outlet.latitude}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <Link
                            href="/brands"
                            className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            Back to Brands
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}

