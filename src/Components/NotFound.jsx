/* eslint-disable react/no-unescaped-entities */
function NotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-6xl font-bold text-red-400">404</h1>
                <p className="mt-4 text-xl font-semibold">This page doesn't exist</p>
                <p className="mt-2 text-gray-500">Sorry, the page you are looking for does not exist.</p>
                <a href="/" className="mt-6 inline-block bg-indigo-500 text-white px-6 py-2 rounded-full font-bold cursor-pointer hover:bg-indigo-600 transition-colors duration-200">Retourner à l'accueil</a>
            </div>
        </div>
    );
}

export default NotFound;
