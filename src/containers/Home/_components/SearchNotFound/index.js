import React from "react";

export default function SearchNotFound() {
  return (
    <section className="flex items-center h-full p-16  dark:text-black">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-lg text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-coolGray-600">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/apps/empty-search-results.229c0d3.png"
              alt="emptyresultimage"
            />
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            No Services Found For Your Search
          </p>
          <p className="mt-4 mb-8 dark:text-coolGray-400">
            Try a new search or get a free quote for your project from our
            community of freelancers.
          </p>
          <a
            href="/#"
            className="px-8 py-3 font-semibold rounded dark:bg-green-400 dark:text-coolGray-900"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  );
}
