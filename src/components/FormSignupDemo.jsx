export default function FormSignupDemo() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    alert(`To submit: ${JSON.stringify(values, null, 2)}`);
    event.currentTarget.reset();
  };

  return (
    <div class="rounded-2xl bg-white p-10 lg:w-md">
      <form
        id="demo-signup"
        class="flex flex-col space-y-8"
        onSubmit={handleSubmit}
      >
        <h3 class="text-center text-3xl font-bold">Demo Signup</h3>
        <input
          autocomplete="on"
          id="name"
          placeholder="Name"
          name="name"
          required
          type="text"
          class="focus:border-accent rounded-xl border-1 border-[#CCCCCC] py-2 pl-4"
        />
        <input
          autocomplete="on"
          id="company"
          placeholder="Company"
          name="company"
          type="text"
          class="focus:border-accent rounded-xl border-1 border-[#CCCCCC] py-2 pl-4"
        />
        <input
          autocomplete="on"
          id="email"
          placeholder="Email"
          name="email"
          required
          type="email"
          class="focus:border-accent rounded-xl border-1 border-[#CCCCCC] py-2 pl-4"
        />
        <button
          type="submit"
          class="bg-primary-dark text-primary-dark text-text rounded-lg px-4 py-2"
        >
          Request a Demo
        </button>
      </form>
    </div>
  );
}
