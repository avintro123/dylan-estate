import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
        <h1 className="text-xl font-semibold mb-4">
          Thank you for listing your property with us,
        </h1>
        <p className="mb-4">
          Your listing will be reviewed and will go live within 24 hours.
        </p>
        <p className="mb-4">
          We will now manage your listing and get in touch with you after
          finding the best suitable tenant as per your preference.
        </p>
        <p className="mb-4 text-right">- Dylan Estates</p>
        <div className="flex space-x-4">
          <Link
            href="/edit-listing"
            className="bg-blue-900 text-white px-4 py-2 rounded"
          >
            Edit Property Listing
          </Link>
          <Link
            href="/preview-listing"
            className="bg-blue-900 text-white px-4 py-2 rounded"
          >
            Preview Property Listing
          </Link>
        </div>
      </div>
    </div>
  );
}
