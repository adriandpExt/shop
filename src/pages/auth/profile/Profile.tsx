import InputField from "../../../components/form/input-field/InputField";
import { SectionTitle } from "../../../components/section-title";

const Profile = () => {
  return (
    <>
      <SectionTitle title="User Profile" path="Home | User Profile" />

      <form className="max-w-7xl mx-auto px-10 py-5">
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-3">
          <div className="form-control w-full lg:max-w-xs">
            <InputField name={"firstname"} label="Firstname" />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <InputField name={"lastname"} label="LastName" />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <InputField name={"email"} label="Email" inputType="email" />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <InputField name={"phone"} label="Phone" />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <InputField name={"address"} label="Address" />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <InputField
              name={"password"}
              label="Password"
              inputType="password"
            />
          </div>
        </div>
        <button
          className="btn btn-lg bg-blue-600 hover:bg-blue-500 text-white mt-10"
          type="submit"
        >
          Update Profile
        </button>
      </form>
    </>
  );
};

export default Profile;
