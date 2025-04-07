
export default function Page() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-black">
        <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-500 rounded-full mb-4"></div>
            <h2 className="text-2xl font-semibold mb-2">User Name</h2>
            <p className="text-gray-600 mb-4">user@example.com</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Edit Profile</button>
          </div>
        </div>
      </div>
    );
  }