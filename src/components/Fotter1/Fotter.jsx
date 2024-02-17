import React from 'react';

const Fotter = () => {
    return (
      <div>
        <div className="footer flex flex-col justify-end pt-12 pb-6 bg-[#000]">
          <div className="flex gap-5 justify-between items-start self-center px-5 mt-8 w-[1170px]  max-w-[1170px] max-md:flex-wrap max-md:max-w-full bg-[#000]">
            <div className="flex flex-col flex-1 py-0.5 text-base leading-6 text-neutral-50">
              <div className="text-2xl font-bold tracking-wider leading-6 max-md:mr-1">
                Exclusive
              </div>
              <div className="mt-7  text-xl font-medium leading-7">
                Subscribe
              </div>
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
              <div className="flex h-[73px] w-[150px] gap-2 justify-between mt-2">
                <img
                  className="w-[73px]"
                  src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gat~3vRFc2DbWM11m1hqiss3GhJVQXL8lVxr76vuYVRbGEuLVuKlRPn4rmbdM-mO1kERnKsqtA~Q58WCyAvdxkqBvLSxGxQxS18aSuTHfXHZn7bCwBTrtgDkm-tbDu2t8xXI6FZeEL9Ur8Vv-j8HJvOvunYdm3Umy2PCCxOB~CiR4AY6OXGiPA8gAdJL54SVvPo0EhRadPxfDVQQeg5ZbMUmxjnTgp~IIRIDepxndrbhbexdtKwXdv-ZJVsClWR1YNuYlegRiPNpU86cozkptvQLYkrhLWlWx5oh-EfbFPPTzjutr0EOAG-THsWAXAl8HO70ZDdT6VSzkQql~omovg__"
                />
                <div className="relative h-[75px]">
                  <img
                    className="w-[90px] absolute right-0 top-[-20px] h-[80px] m-0 p-0"
                    src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkV6WyEXnv0PCUAIN91Py1RUCKWZ-rYqXJlMmXJdNeFEgw0t8g9grKDlVfBgbmb-adyUp6W1MlwOP-nXFM6eL7k760kNkKkwVS0juUgkhkz1mbFUxuwwGvqnSIUILstHsZUEuzjCxg4z5Mazh~e8KsLzrKAZxyLedsjyPVHsxtsJivWQIqQNJQwD5-OKwQMlstRlHSpEPj~RRYO~TacSaY2BAg~Xz2-OiYVfrISEnwQkgHlEDsMCxMVOQNcvqDlDmAdPAo9TBrMdGzbXgD~ZFk55VfRdENPbWOVC88Wtva6uV95NNhTyGBI4FhBnDxy9BZJcYz2Og1hWnPIv-uJtiA__"
                    alt=""
                  />
                  <img
                    className="w-[90px] h-[80px] m-t-[13px] p-0"
                    src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkV6WyEXnv0PCUAIN91Py1RUCKWZ-rYqXJlMmXJdNeFEgw0t8g9grKDlVfBgbmb-adyUp6W1MlwOP-nXFM6eL7k760kNkKkwVS0juUgkhkz1mbFUxuwwGvqnSIUILstHsZUEuzjCxg4z5Mazh~e8KsLzrKAZxyLedsjyPVHsxtsJivWQIqQNJQwD5-OKwQMlstRlHSpEPj~RRYO~TacSaY2BAg~Xz2-OiYVfrISEnwQkgHlEDsMCxMVOQNcvqDlDmAdPAo9TBrMdGzbXgD~ZFk55VfRdENPbWOVC88Wtva6uV95NNhTyGBI4FhBnDxy9BZJcYz2Og1hWnPIv-uJtiA__"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-5 justify-between pr-8 mt-6 max-md:pr-5"></div>
            </div>
          </div>
          <div className="flex flex-col items-center px-16 pt-4 mt-16 w-full text-base leading-6 text-white whitespace-nowrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-1.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9e77ca5f6362e8c84e9e430400b10a2e9fcc4f4b98d11736abbf6c72292338e?apiKey=fd869f2637a440ed9834ce82e88a7ee8&"
                className="my-auto w-5 aspect-square"
              />
              <div className="grow">
                Copyright Rimel 2022. All right reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Fotter;