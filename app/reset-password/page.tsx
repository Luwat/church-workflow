const Page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <div>
          <div>
            <div>Forgot password</div>
            <p>Enter your email to reset your password</p>
          </div>
          <div>
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <button type="submit">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
