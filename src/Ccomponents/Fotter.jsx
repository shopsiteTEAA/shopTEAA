import React from 'react';

const Fotter = () => {
    return (
        <div>
    <div className="flex flex-col justify-end pt-12 pb-6 bg-black">
      <button
        className="box-border relative shrink-0 px-6 py-4 mt-5 text-center rounded appearance-none cursor-pointer bg-[black] text-[white]"
        openLinkInNewTab={false}
      >
        Click me!
      </button>
      <div className="flex gap-5 justify-between items-start self-center px-5 mt-8 w-full max-w-[1170px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 py-0.5 text-base leading-6 text-neutral-50">
          <div className="text-2xl font-bold tracking-wider leading-6 max-md:mr-1">
            Exclusive
          </div>
          <div className="mt-7 text-xl font-medium leading-7">Subscribe</div>
          <div className="mt-6 whitespace-nowrap">
            Get 10% off your first order
          </div>
          <div className="flex gap-5 justify-between px-4 py-3 mt-4 rounded border-solid border-[1.5px] border-[color:var(--Text,#FAFAFA)]">
            <div className="flex-auto">Enter your email</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 text-base leading-6 text-neutral-50">
          <div className="text-xl font-medium leading-7">Support</div>
          <div className="mt-6 leading-6">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </div>
          <div className="mt-4">exclusive@gmail.com</div>
          <div className="mt-4">+88015-88888-9999</div>
        </div>
        <div className="flex flex-col flex-1 self-stretch text-base leading-6 whitespace-nowrap text-neutral-50">
          <div className="text-xl font-medium leading-7">Account</div>
          <div className="mt-6">My Account</div>
          <div className="mt-4">Login / Register</div>
          <div className="mt-4">Cart</div>
          <div className="mt-4">Wishlist</div>
          <div className="mt-4">Shop</div>
        </div>
        <div className="flex flex-col text-base leading-6 whitespace-nowrap basis-0 text-neutral-50">
          <div className="text-xl font-medium leading-7">Quick Link</div>
          <div className="mt-6">Privacy Policy</div>
          <div className="mt-4">Terms Of Use</div>
          <div className="mt-4">FAQ</div>
          <div className="mt-4">Contact</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-xl font-medium leading-7 text-neutral-50">
            Download App
          </div>
          <div className="mt-6 text-xs font-medium leading-5 whitespace-nowrap text-neutral-50">
            Save $3 with App New User Only
          </div>
          <div className="flex gap-2 justify-between mt-2">
            {/* No img elements here */}
          </div>
          <div className="flex gap-5 justify-between pr-8 mt-6 max-md:pr-5">
            {/* No img elements here */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-16 pt-4 mt-16 w-full text-base leading-6 text-white whitespace-nowrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9e77ca5f6362e8c84e9e430400b10a2e9fcc4f4b98d11736abbf6c72292338e?apiKey=fd869f2637a440ed9834ce82e88a7ee8&"
            className="my-auto w-5 aspect-square"
          />
          <div className="grow">Copyright Rimel 2022. All right reserved</div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default Fotter;