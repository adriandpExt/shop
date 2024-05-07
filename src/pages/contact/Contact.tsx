import InputField from "../../components/form/input-field/InputField";
import { SectionTitle } from "../../components/section-title";

const Contact = () => {
  return (
    <>
      <SectionTitle title="Contact Us" path="Home | Contact" />

      <div className="isolate px-6 lg:px-8">
        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <InputField inputType="text" label="Firstname" name="firstname" />
            <InputField inputType="text" label="Lastname" name="lastname" />

            <div className="sm:col-span-2">
              <InputField inputType="text" label="Company" name="company" />
            </div>
            <div className="sm:col-span-2">
              <InputField inputType="email" label="Email" name="email" />
            </div>
            <div className="sm:col-span-2">
              <InputField inputType="text" label="Phone" name="phone" />
            </div>
            <div className="sm:col-span-2">
              <InputField textarea name="message" label="Message"></InputField>
            </div>

            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  className="checkbox border-2"
                />
                <label
                  className="text-sm leading-6 text-accent-content ml-2"
                  id="switch-1-label"
                >
                  By selecting this, you agree to our
                  <a href="#" className="font-semibold text-blue-500">
                    &nbsp;privacy&nbsp;policy
                  </a>
                  .
                </label>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
