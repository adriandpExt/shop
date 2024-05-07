import { Link } from "react-router-dom";
import { SectionTitle } from "../../../components/section-title";
import InputField from "../../../components/form/input-field/InputField";
import { LuLogIn } from "react-icons/lu";

const Register = () => {
  return (
    <main>
      <SectionTitle title="Register" path="Home | Register" />

      <div className="flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-dark border border-gray-600 shadow w-full rounded-lg divide-y divide-gray-200">
            <form className="px-5 py-7 space-y-5">
              <InputField
                label="FirstName"
                inputType="text"
                name="firtname"
                placeholder="Please enter..."
              />

              <InputField
                label="Lastname"
                inputType="text"
                name="lastname"
                placeholder="Please enter..."
              />

              <InputField
                label="Email"
                inputType="email"
                name="email"
                placeholder="Please enter..."
              />

              <InputField
                label="Phone"
                inputType="text"
                name="phone"
                placeholder="Please enter..."
              />
              <InputField
                label="Address"
                inputType="text"
                name="address"
                placeholder="Please enter..."
              />

              <InputField
                label="Password"
                inputType="password"
                name="password"
                placeholder="Please enter..."
              />
              <InputField
                label="Confirm Password"
                inputType="password"
                name="confirmPassword"
                placeholder="Please enter..."
              />

              <button
                type="submit"
                className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold justify-center flex"
              >
                <span className="inline-block mr-2">Register</span>
                <LuLogIn size={20} />
              </button>
            </form>
          </div>

          <div className="py-5 text-center">
            <Link
              to="/login"
              className="btn btn-neutral text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              Already have an account? Please login.
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
