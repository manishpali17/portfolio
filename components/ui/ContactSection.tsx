'use client';
import {
  animateLeftToRight,
  animateToTop,
  textAnimation,
} from '@/components/Helpers/gsap';
import { useFormState, useFormStatus } from 'react-dom';
import { createContact } from '@/app/lib/action';
import { useEffect } from 'react';

export default function ContactSection() {
  const initialState = { errors: {}, message: '' };
  const { pending } = useFormStatus();
  const [state, dispatch] = useFormState(createContact, initialState);

  useEffect(() => {
    animateToTop('.top');
    animateLeftToRight('.contact');
    textAnimation('.contactTitle', 'Contact', 1, 'none');
  });

  return (
    <>
      <div className="w-full px-5 text-white lg:px-32 xl:px-80">
        <h1 className="contact contactTitle py-5 text-center font-SpaceGrotesk text-3xl font-bold hover:animate-bounce sm:text-6xl">
          C
        </h1>
        <p className="contact text-center font-SpaceGrotesk text-[#898989]">
          Please fill out the following form and I will get back to you within
          the next 24 hours.
        </p>

        <form action={dispatch} className="top space-y-16 pt-6">
          <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:gap-2">
            <div className="w-full space-y-1 sm:w-1/2">
              <p className="w-5 rounded-full border border-gray-600 bg-black text-center font-SpaceGrotesk text-xs text-slate-400 opacity-90 ">
                1
              </p>
              <label htmlFor="fullName" className="font-semibold">
                What&apos;s your name?
              </label>
              <p className="text-xs font-medium opacity-50 ">REQUIRED</p>
            </div>
            <div className="w-full sm:w-1/2">
              <input
                id="fullName"
                type="text"
                className="w-full rounded-full bg-[#171717]  px-4 py-2 outline-none hover:bg-[#2B2B2B]"
                placeholder="Type your full name"
                name="fullName"
                aria-describedby="fullName-error"
              />
              <div id="fullName-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.fullName &&
                  state?.errors?.fullName.map((error) => (
                    <p
                      className="mt-2 animate-pulse text-sm text-red-500 md:ml-2 md:mt-4 md:text-lg"
                      key={error}
                    >
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:gap-2 ">
            <div className="w-full space-y-1 sm:w-1/2">
              <p className="w-5 rounded-full border border-gray-600 bg-black text-center font-SpaceGrotesk text-xs text-slate-400 opacity-90 ">
                2
              </p>
              <label htmlFor="email" className="font-semibold">
                What is your email address?
              </label>
              <p className="text-xs font-medium opacity-50 ">REQUIRED</p>
            </div>
            <div className="w-full sm:w-1/2">
              <input
                id="email"
                type="email"
                name="email"
                className="w-full rounded-full bg-[#171717]  px-4 py-2 outline-none hover:bg-[#2B2B2B] "
                placeholder="example@domain.com"
                aria-describedby="email-error"
                defaultValue=""
              />
              <div id="email-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.email &&
                  state?.errors?.email.map((error) => (
                    <p
                      className="mt-2 animate-pulse text-sm text-red-500 md:ml-2 md:mt-4 md:text-lg"
                      key={error}
                    >
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:gap-2 ">
            <div className="w-full space-y-1 sm:w-1/2 ">
              <p className="w-5 rounded-full border border-gray-600 bg-black text-center font-SpaceGrotesk text-xs text-slate-400 opacity-90 ">
                3
              </p>
              <label htmlFor="description" className="font-semibold">
                Can you tell me about your project / product / company in a few
                words?
              </label>
              <p className="text-xs font-medium opacity-50 ">REQUIRED</p>
            </div>
            <div className="w-full sm:w-1/2">
              <textarea
                id="description"
                typeof="text"
                name="description"
                className="w-full rounded-xl bg-[#171717]  px-4 py-2 outline-none hover:bg-[#2B2B2B]"
                placeholder="Type your answer here..."
                rows={3}
                defaultValue=""
                aria-describedby="description-error"
              />
              <div id="description-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.description &&
                  state?.errors?.description.map((error) => (
                    <p
                      className="mt-2 animate-pulse text-sm text-red-500 md:ml-2 md:mt-4 md:text-lg"
                      key={error}
                    >
                      {error}
                    </p>
                  ))}
                {
                  <p className="mt-2 animate-pulse text-sm text-red-500 md:ml-2">
                    {state?.message}
                  </p>
                }
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:w-full md:justify-center">
            <button
              type="submit"
              className="w-max rounded-full bg-[#38E492] px-4 py-2 font-SpaceGrotesk text-lg font-bold text-black active:animate-bounce"
              disabled={pending}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
