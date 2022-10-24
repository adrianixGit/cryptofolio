export const Modal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  flex flex-col">
          <h2 className="text-xl font-medium mb-5">Your New Portfolio</h2>
          <form className="">
            <div className="mb-8 flex flex-col items-start">
              <label className="block text-sm mb-2" for="username">
                Name
              </label>
              <input
                className="appearance-none bg-transparent border-b border-r border-l border-primary rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Type here"
              />
            </div>
            <div class="mb-5 relative w-full flex flex-col items-start">
              <label className="block text-sm mb-2" for="username">
                Default fiat currency
              </label>
              <select className="appearance-none bg-transparent border-b border-r border-l border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>USD</option>
                <option>PLN</option>
                <option>EUR</option>
              </select>
              <div class="pointer-events-none absolute inset-y-10 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </form>
          <div className="modal-action flex w-full justify-center">
            <label htmlFor="my-modal" className="btn btn-secondary w-[50%]">
              Cancel
            </label>
            <label htmlFor="my-modal" className="btn btn-primary w-[50%]">
              Create
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
