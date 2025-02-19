import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ error, errorInfo, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
      <h2 className="text-2xl text-gray-800 mb-2">Something went wrong</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full mt-4">
        <p className="text-gray-600 mb-4">
          We're sorry, but an unexpected error occurred. Please try again later.
        </p>

        <div className="bg-gray-50 p-4 rounded">
          <h3 className="font-semibold text-gray-800 mb-2">Error Details:</h3>
          <pre className="text-sm text-gray-600 overflow-auto h-auto">
            {error?.toString()}
          </pre>
        </div>

        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={onRetry}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
