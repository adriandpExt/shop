import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import { SectionTitle } from "../../../components/section-title";
import InputField from "../../../components/form/input-field/InputField";

const Login = () => {
  return (
    <main>
      <SectionTitle title="Login" path="Home | Login" />

      <div className="flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-dark border border-gray-600 shadow w-full rounded-lg divide-y divide-gray-200">
            <form className="px-5 py-7 space-y-5">
              <InputField
                label="Email"
                inputType="email"
                name="email"
                placeholder="Please enter..."
                icons={<MdEmail size={20} />}
              />

              <InputField
                label="Password"
                inputType="password"
                name="password"
                placeholder="Please enter..."
                icons={<FaLock size={20} />}
              />

              <button
                type="submit"
                className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold justify-center flex"
              >
                <span className="inline-block mr-2">Login</span>
                <LuLogIn size={20} />
              </button>
            </form>
          </div>

          <div className="py-5 text-center">
            <Link
              to="/register"
              className="btn btn-neutral text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              Don't have an account? Please register.
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
